import glob
from jsmin import jsmin
from rcssmin import cssmin
import os

dirs = ["./","./resume/","./stats/","./weather/","./blog/", "./tools/"]

def minifydir(dir):
	for file in glob.glob(dir+"*.min.js"):
		os.remove(file)

	for file in glob.glob(dir+"*.min.css"):
		os.remove(file)

	for file in glob.glob(dir+"*.js"):
		fileopen = open(file,"r+", encoding="utf8")
		text = fileopen.read()
		fileopen.close()
		fileopen = open(file[:-3]+".min.js","w", encoding="utf8")
		fileopen.write(jsmin(text))
		fileopen.close()

	for file in glob.glob(dir+"*.css"):
		fileopen = open(file,"r+", encoding="utf8")
		text = fileopen.read()
		fileopen.close()
		fileopen = open(file[:-4]+".min.css","w", encoding="utf8")
		fileopen.write(cssmin(text))
		fileopen.close()


for loopdir in dirs:
	minifydir(loopdir)


	