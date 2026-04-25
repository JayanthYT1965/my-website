from PIL import Image

# Open the new user logo
img = Image.open('public/apex-logo-user.png').convert('RGBA')
pixels = img.load()
w, h = img.size

# Remove white/near-white background
tolerance = 30
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r > (255 - tolerance) and g > (255 - tolerance) and b > (255 - tolerance):
            pixels[x, y] = (0, 0, 0, 0)

img.save('public/apex-logo-final.png')
print(f"Done! Size: {img.size}")
