from PIL import Image
import PIL.ImageOps
import glob

for file in glob.glob("./*.png"):
	image = Image.open(file).convert("RGBA")
	r,g,b,a = image.split()
	rgb_image = Image.merge('RGB', (r,g,b))
	inverted_image = PIL.ImageOps.invert(rgb_image)
	r2,g2,b2 = inverted_image.split()
	final_transparent_image = Image.merge('RGBA', (r2,g2,b2,a))
	final_transparent_image.save(file)
