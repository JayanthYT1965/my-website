from PIL import Image

img = Image.open('public/preloader-logo-v2.png').convert('RGBA')
pixels = img.load()
w, h = img.size

# Sample corner pixel to determine background color
corner = pixels[0, 0]
print(f"Corner pixel: {corner}")
bg_r, bg_g, bg_b = corner[0], corner[1], corner[2]
tolerance = 40

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if (abs(r - bg_r) < tolerance and
            abs(g - bg_g) < tolerance and
            abs(b - bg_b) < tolerance):
            pixels[x, y] = (0, 0, 0, 0)

img.save('public/preloader-logo-transparent.png')
print("Done! Saved to public/preloader-logo-transparent.png")
