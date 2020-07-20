from PIL import Image,ImageDraw
import math
import random
size = (1920*2,1080*2)
scale = 3
pointrange = (3,6)
rotationrange = (180,180)
im = Image.new('RGBA', size,"white")

draw = ImageDraw.Draw(im)

for x in range(150):
    color = (random.randint(150,255),random.randint(150,150),random.randint(150,255))
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
