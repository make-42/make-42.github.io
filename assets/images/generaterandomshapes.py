from PIL import Image,ImageDraw
import math
import random
size = (1920*2,1080*2)
scale = 3
shapes = 50
pointrange = (3,6)
rotationrange = (180,180)
opacityrange = (0,255)
brightnessrange = (0,10)
redrange = (255,255)
greenrange = (179,179)
bluerange = (246,246)
im = Image.new('RGBA', size)

draw = ImageDraw.Draw(im)

for x in range(shapes):
	brightness = random.randint(brightnessrange[0],brightnessrange[1])
	color = (random.randint(redrange[0],redrange[1])+brightness,random.randint(greenrange[0],greenrange[1])+brightness,random.randint(bluerange[0],bluerange[1])+brightness,random.randint(opacityrange[0],opacityrange[1]))
	r = color[0]
	g = color[1]
	b = color[2]
	a = color[3]
	if r > 255:
		r = 255
	if g > 255:
		g = 255
	if b > 255:
		b = 255
	color = (r,g,b,a)
	center= (random.randint(1,size[0]),random.randint(1,size[1]))
	angle = random.randint(rotationrange[0],rotationrange[1])
	scalerand = random.randint(0,1000)
	points = random.randint(pointrange[0],pointrange[1])
	pointlist = []
	isoutofbounds=False
	for y in range(points):
		pointx=center[0]+math.sin(math.radians(angle+360/points*y))*scalerand*scale*size[1]/50000
		pointy=center[1]+math.sin(math.radians(angle+90+360/points*y))*scalerand*scale*size[1]/50000
		if pointx < size[0]:
			if pointx < 0:
				isoutofbounds=True
				break
		else:
			isoutofbounds=True
			break
		if pointy < size[1]:
			if pointy < 0:
				isoutofbounds=True
				break
		else:
			isoutofbounds=True
			break
		pointlist.append((pointx,pointy))
	if isoutofbounds != True:
		draw.polygon(pointlist, fill = color)


im.save("output.png")
