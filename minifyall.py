"""
Small python program for minifying pages.
Sorry, me in the future for having to run this every single fucking time
you make a motherfucking change...
"""
# pylint: disable=line-too-long
# pylint: disable=missing-function-docstring
# pylint: disable=subprocess-run-check
import os
import glob
import subprocess
from jsmin import jsmin
from rcssmin import cssmin
import sass

dirs = ["./","./resume/","./stats/","./weather/","./blog/", "./tools/", "./typing/","./matrix/","./404/","./snake/"]

# Minify a directory
def minifydir(dir_var):
    for file in glob.glob(dir_var+"*.min.js"):
        os.remove(file)
    for file in glob.glob(dir_var+"*.min.css"):
        os.remove(file)
    for file in glob.glob(dir_var+"*.js"):
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
    for file in glob.glob(dir_var+"*.scss"):
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
