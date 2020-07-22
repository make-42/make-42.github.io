import glob
from slimit import minify

for file in glob.glob("./*.js"):
	fileopen = open(file,"r+")
	text = str(fileopen.read())
	fileopen.close()
	fileopen = open(file+".min.js","w")
	fileopen.write(minify(text, mangle=True, mangle_toplevel=True))
	fileopen.close()