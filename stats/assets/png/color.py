from PIL import Image
import PIL.ImageOps
import glob
import numpy as np

for file in glob.glob("./*.png"):
	image = Image.open(file)
	r,g,b,a = image.split()
	rgb_image = Image.merge('RGB', (r,g,b))
	data = np.array(image)
	red, green, blue, alpha = data.T
	white_areas = (red == 255) & (blue == 255) & (green == 255)
	data[..., :-1][white_areas.T] = (226, 183, 20)
	im2 = Image.fromarray(data)
	im2.save(file+"Y.png")
