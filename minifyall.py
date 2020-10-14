import glob
from jsmin import jsmin
from rcssmin import cssmin
import sass
import os
import subprocess

dirs = ["./","./resume/","./stats/","./weather/","./blog/", "./tools/", "./typing/","./matrix/"]

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
		some_command = "js2coffee "+file
		output = subprocess.run(some_command,capture_output=True, shell=True).stdout
		fileopen = open(file[:-3]+".coffee","w", encoding="utf8")
		fileopen.write(output.decode("utf-8"))
		fileopen.close()
		print("☕",file,"compiled.")

	for file in glob.glob(dir+"*.scss"):
		fileopen = open(file,"r+", encoding="utf8")
		text = fileopen.read()
		fileopen.close()
		fileopen = open(file[:-5]+".min.css","w", encoding="utf8")
		fileopen.write(cssmin(sass.compile(string=text)))
		fileopen.close()
		print("📝",file,"compiled.")


os.system("node compile.js")
for loopdir in dirs:
	minifydir(loopdir)
