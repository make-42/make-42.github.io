from PIL import Image,ImageDraw
import math
import random
size = (1920*2,1080*2)
im = Image.new('RGBA', size,"white")

draw = ImageDraw.Draw(im)

for x in range(100):
    color = (random.randint(80,255),random.randint(0,50),random.randint(80,255))
    center= (random.randint(1,size[0]),random.randint(1,size[1]))
    angle = random.randint(0,360)
    scale = random.randint(0,100)
    points = random.randint(3,6)
    pointlist = []
    for y in range(points):
        pointlist.append((center[0]+math.sin(math.radians(angle+360/points*y))*scale,center[1]+math.sin(math.radians(angle+90+360/points*y))*scale))
    draw.polygon(pointlist, fill = color)


im.save("output.png")
