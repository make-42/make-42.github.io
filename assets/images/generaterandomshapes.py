from PIL import Image,ImageDraw
import math
import random
size = (1920*2,1080*2)
im = Image.new('RGBA', size,"white")

draw = ImageDraw.Draw(im)

for x in range(150):
    color = (random.randint(150,255),random.randint(150,150),random.randint(150,255))
    center= (random.randint(1,size[0]),random.randint(1,size[1]))
    angle = random.randint(0,360)
    scale = random.randint(0,75)
    points = random.randint(3,6)
    pointlist = []
    isoutofbounds=False
    for y in range(points):
        pointx=center[0]+math.sin(math.radians(angle+360/points*y))*scale
        pointy=center[1]+math.sin(math.radians(angle+90+360/points*y))*scale

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
