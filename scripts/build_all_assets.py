import os
import math
import json
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageOps
import numpy as np
from sklearn.cluster import KMeans

SRC_PATH = 'C:/Users/sriva/.gemini/antigravity/brain/ccf63138-b0eb-4478-a984-08bb08cfd978/.user_uploaded/media_1794982670176_9511b2a9.jpg'
IMG_DIR = 'assets/images'
GIF_DIR = 'assets/gifs'
PALETTE_FILE = 'assets/color_palette.json'

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(GIF_DIR, exist_ok=True)

orig = Image.open(SRC_PATH).convert('RGBA')
W, H = orig.size

def extract_palette(image, n_colors=5):
    rgb = image.convert('RGB')
    small = rgb.resize((80, 80))
    arr = np.array(small).reshape(-1, 3)
    # Filter out transparent or near-black background if needed
    kmeans = KMeans(n_clusters=n_colors, random_state=42, n_init=3).fit(arr)
    centers = kmeans.cluster_centers_.astype(int)
    counts = np.bincount(kmeans.labels_)
    sorted_idx = np.argsort(counts)[::-1]
    
    palette = []
    for idx in sorted_idx:
        c = centers[idx]
        hex_code = f"#{c[0]:02x}{c[1]:02x}{c[2]:02x}"
        pct = round(float(counts[idx] / len(arr) * 100), 1)
        palette.append({
            'rgb': [int(c[0]), int(c[1]), int(c[2])],
            'hex': hex_code,
            'percentage': pct
        })
    return palette

def soft_crop(img, box, blur=6, shape='rounded', radius=24):
    cropped = img.crop(box)
    cw, ch = cropped.size
    mask = Image.new('L', (cw, ch), 0)
    draw = ImageDraw.Draw(mask)
    margin = blur * 2
    if shape == 'ellipse':
        draw.ellipse((margin, margin, cw - margin, ch - margin), fill=255)
    elif shape == 'arc_bottom':
        draw.pieslice((-cw*0.2, -ch*0.5, cw*1.2, ch*1.1), 0, 180, fill=255)
    else:
        draw.rounded_rectangle((margin, margin, cw - margin, ch - margin), radius=radius, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(blur))
    cropped.putalpha(mask)
    return cropped

def save_4k(cropped, filename, scale=4):
    target_w = cropped.width * scale
    target_h = cropped.height * scale
    # Cap maximum dimension to 3840 for web friendliness and crispness
    if max(target_w, target_h) > 3840:
        ratio = 3840 / max(target_w, target_h)
        target_w = int(target_w * ratio)
        target_h = int(target_h * ratio)
    upscaled = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
    upscaled = upscaled.filter(ImageFilter.UnsharpMask(radius=2, percent=125, threshold=2))
    path = os.path.join(IMG_DIR, filename)
    upscaled.save(path, format='PNG', optimize=True)
    return path

# 1. Emblem Master Silhouette
print("Generating 01: Emblem Master Composite...")
mask_emblem = Image.new('L', (W, H), 0)
draw_emb = ImageDraw.Draw(mask_emblem)
draw_emb.ellipse((65, 25, 959, 920), fill=255)
draw_emb.polygon([(0, 360), (140, 330), (220, 480), (180, 750), (20, 740), (0, 520)], fill=255)
draw_emb.polygon([(1024, 360), (884, 330), (804, 480), (844, 750), (1004, 740), (1024, 520)], fill=255)
draw_emb.polygon([(30, 680), (994, 680), (980, 860), (44, 860)], fill=255)
draw_emb.ellipse((140, 740, 884, 980), fill=255)
mask_emblem = mask_emblem.filter(ImageFilter.GaussianBlur(4))
emblem_img = orig.copy()
emblem_img.putalpha(mask_emblem)
emblem_img.save(os.path.join(IMG_DIR, '01_emblem_master.png'))
save_4k(emblem_img, '4k_01_emblem_master.png', scale=4)

# Elements definition
definitions = [
    {
        'id': '02_banyan_tree',
        'name': 'The Great Banyan Tree (మహావృక్షం)',
        'description': 'Lush sacred green canopy representing shelter, heritage, and ecological stability.',
        'box': (25, 15, 470, 420),
        'blur': 6,
        'shape': 'rounded',
        'radius': 35,
        'animation': 'sway'
    },
    {
        'id': '03_red_tractor',
        'name': 'Farmer & Red Tractor (వ్యవసాయం & ట్రాక్టర్)',
        'description': 'Iconic tractor tilling fertile fields symbolizing agrarian vitality and modern mechanization.',
        'box': (60, 290, 260, 420),
        'blur': 5,
        'shape': 'ellipse',
        'animation': 'vibrate'
    },
    {
        'id': '04_temple_gopuram',
        'name': 'Sacred Dravidian Temple Gopuram (దేవాలయ గోపురం)',
        'description': 'Historic stone temple architecture standing tall against the horizon representing spiritual harmony.',
        'box': (610, 130, 745, 315),
        'blur': 5,
        'shape': 'rounded',
        'radius': 20,
        'animation': 'aura'
    },
    {
        'id': '05_water_tower',
        'name': 'Revuru Elevated Water Reservoir (రక్షిత మంచినీటి ట్యాంక్)',
        'description': 'Modern white civic water tower marked "REVURU" assuring pure drinking water infrastructure.',
        'box': (735, 135, 910, 400),
        'blur': 5,
        'shape': 'rounded',
        'radius': 20,
        'animation': 'float'
    },
    {
        'id': '06_sun_and_rays',
        'name': 'Golden Sunrise & Solar Rays (ఉదయ భానుడు)',
        'description': 'Blazing dawn sun illuminating the village representing progress, optimism, and bright tomorrow.',
        'box': (400, 150, 630, 310),
        'blur': 6,
        'shape': 'ellipse',
        'animation': 'radiance'
    },
    {
        'id': '07_flying_birds',
        'name': 'Flock of Flying Birds (విహంగాల సమూహం)',
        'description': 'Sylvan flock soaring across clear skies symbolizing freedom, peace, and natural harmony.',
        'box': (590, 15, 890, 135),
        'blur': 4,
        'shape': 'ellipse',
        'animation': 'drift'
    },
    {
        'id': '08_village_community',
        'name': 'Village Cottages & Highway (గ్రామ ఆవాసాలు & రహదారి)',
        'description': 'Clean rural homes with red tiled roofs along the connecting paved village road.',
        'box': (270, 280, 820, 440),
        'blur': 5,
        'shape': 'rounded',
        'radius': 25,
        'animation': 'depth'
    },
    {
        'id': '09_revuru_title_3d',
        'name': '3D Golden Title "రేవూరు" (Revuru Inscription)',
        'description': 'Master sculpted 3D Telugu typography in mirror-burnished golden enamel with deep relief shadow.',
        'box': (120, 365, 890, 600),
        'blur': 6,
        'shape': 'rounded',
        'radius': 25,
        'animation': 'gleam'
    },
    {
        'id': '10_panchayat_title_3d',
        'name': '3D Title "పంచాయత్" (Panchayat Inscription)',
        'description': 'Pure silver/white 3D embossed civic inscription framed with horizontal equalizing bars.',
        'box': (125, 560, 885, 680),
        'blur': 5,
        'shape': 'rounded',
        'radius': 20,
        'animation': 'pulse'
    },
    {
        'id': '11_motto_ribbon',
        'name': 'Motto Ribbon: "మన ప్రగతే మనభవిష్యత్తు"',
        'description': 'Flowing golden scroll proclaiming the Panchayat vision: "Our Progress is Our Future".',
        'box': (20, 660, 1000, 860),
        'blur': 6,
        'shape': 'rounded',
        'radius': 30,
        'animation': 'wave'
    },
    {
        'id': '12_golden_wheat_left',
        'name': 'Left Golden Paddy Sheaf (ఎడమ బంగారు వరికంకి)',
        'description': 'Bountiful golden rice ear crowning the emblem side, signifying agricultural prosperity.',
        'box': (0, 330, 230, 760),
        'blur': 5,
        'shape': 'rounded',
        'radius': 30,
        'animation': 'sway'
    },
    {
        'id': '13_golden_wheat_right',
        'name': 'Right Golden Paddy Sheaf (కుడి బంగారు వరికంకి)',
        'description': 'Bountiful golden rice ear framing the eastern arc, signifying harvest celebration.',
        'box': (790, 330, 1024, 760),
        'blur': 5,
        'shape': 'rounded',
        'radius': 30,
        'animation': 'sway'
    },
    {
        'id': '14_lower_fields_arc',
        'name': 'Contoured Emerald Terraces (హరిత క్షేత్రాలు)',
        'description': 'Sweeping geometric paddy field furrows cradled within the lower golden border arc.',
        'box': (170, 770, 850, 970),
        'blur': 6,
        'shape': 'rounded',
        'radius': 40,
        'animation': 'depth'
    }
]

palette_database = {}

# Process emblem palette
palette_database['01_emblem_master'] = {
    'name': 'Revuru Panchayat Master Emblem',
    'palette': extract_palette(emblem_img)
}

# Process each element
processed_elements = []

for elem in definitions:
    elem_id = elem['id']
    print(f"Processing {elem_id}: {elem['name']}...")
    cropped = soft_crop(orig, elem['box'], blur=elem['blur'], shape=elem['shape'], radius=elem.get('radius', 24))
    
    # Save standard PNG
    png_path = os.path.join(IMG_DIR, f"{elem_id}.png")
    cropped.save(png_path, format='PNG')
    
    # Save 4K PNG
    save_4k(cropped, f"4k_{elem_id}.png", scale=4)
    
    # Extract palette
    palette = extract_palette(cropped)
    palette_database[elem_id] = {
        'name': elem['name'],
        'palette': palette
    }
    
    processed_elements.append({
        **elem,
        'png': f"assets/images/{elem_id}.png",
        'png_4k': f"assets/images/4k_{elem_id}.png",
        'gif': f"assets/gifs/{elem_id}_3d.gif",
        'palette': palette
    })

# Save Palette JSON
with open(PALETTE_FILE, 'w', encoding='utf-8') as f:
    json.dump(palette_database, f, indent=2, ensure_ascii=False)
print(f"Saved color database to {PALETTE_FILE}")

# Animation generation functions
def generate_3d_gif(elem, num_frames=18, fps=15):
    elem_id = elem['id']
    anim_type = elem['animation']
    img_path = os.path.join(IMG_DIR, f"{elem_id}.png")
    base = Image.open(img_path).convert('RGBA')
    
    # Resize to moderate resolution for responsive GIF speed
    max_dim = 360
    if max(base.width, base.height) > max_dim:
        ratio = max_dim / max(base.width, base.height)
        base = base.resize((int(base.width * ratio), int(base.height * ratio)), Image.Resampling.LANCZOS)
    
    w, h = base.size
    frames = []
    
    for i in range(num_frames):
        t = i / num_frames
        angle = t * 2 * math.pi
        
        # Canvas padding for movement
        pad_x, pad_y = 20, 20
        frame_canvas = Image.new('RGBA', (w + pad_x*2, h + pad_y*2), (0, 0, 0, 0))
        
        if anim_type == 'sway':
            # Horizontal wind sway & gentle tilt
            dx = int(6 * math.sin(angle))
            scale_y = 1.0 + 0.02 * math.cos(angle)
            mod = base.resize((w, int(h * scale_y)), Image.Resampling.BILINEAR)
            pos = (pad_x + dx, pad_y + (h - mod.height)//2)
            frame_canvas.paste(mod, pos, mod)
            
        elif anim_type == 'vibrate':
            # Engine rumble vibration & field dust shimmer
            dx = int(2.5 * math.sin(angle * 4))
            dy = int(1.5 * math.cos(angle * 4))
            frame_canvas.paste(base, (pad_x + dx, pad_y + dy), base)
            
        elif anim_type == 'aura':
            # Golden aura pulse around temple
            glow = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(glow)
            alpha_pulse = int(50 + 40 * math.sin(angle))
            gdraw.ellipse((w*0.2, 0, w*0.8, h*0.7), fill=(255, 215, 0, alpha_pulse))
            glow = glow.filter(ImageFilter.GaussianBlur(14))
            comp = Image.alpha_composite(glow, base)
            dy = int(3 * math.sin(angle))
            frame_canvas.paste(comp, (pad_x, pad_y + dy), comp)
            
        elif anim_type == 'radiance':
            # Sun corona expansion and beam brightness
            enhancer = ImageEnhance.Brightness(base)
            bright = enhancer.enhance(1.0 + 0.25 * math.sin(angle))
            scale = 1.0 + 0.04 * math.sin(angle)
            mod = bright.resize((int(w * scale), int(h * scale)), Image.Resampling.BILINEAR)
            pos = (pad_x + (w - mod.width)//2, pad_y + (h - mod.height)//2)
            frame_canvas.paste(mod, pos, mod)
            
        elif anim_type == 'gleam':
            # Metallic gold glint sweep
            gleam = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(gleam)
            band_x = int(-w*0.4 + t * w * 1.8)
            gdraw.polygon([(band_x, 0), (band_x + 60, 0), (band_x - 40, h), (band_x - 100, h)],
                          fill=(255, 255, 230, 110))
            gleam = gleam.filter(ImageFilter.GaussianBlur(8))
            comp = Image.alpha_composite(base, gleam)
            scale = 1.0 + 0.02 * math.sin(angle)
            mod = comp.resize((int(w * scale), int(h * scale)), Image.Resampling.BILINEAR)
            pos = (pad_x + (w - mod.width)//2, pad_y + (h - mod.height)//2)
            frame_canvas.paste(mod, pos, mod)
            
        elif anim_type == 'pulse':
            # Silver embossing pulse
            enhancer = ImageEnhance.Contrast(base)
            boost = enhancer.enhance(1.0 + 0.2 * math.cos(angle))
            dy = int(2 * math.sin(angle))
            frame_canvas.paste(boost, (pad_x, pad_y + dy), boost)
            
        elif anim_type == 'wave':
            # Golden ribbon shine wave
            gleam = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(gleam)
            band_x = int(-w*0.3 + t * w * 1.6)
            gdraw.polygon([(band_x, 0), (band_x + 90, 0), (band_x + 10, h), (band_x - 80, h)],
                          fill=(255, 245, 180, 95))
            gleam = gleam.filter(ImageFilter.GaussianBlur(10))
            comp = Image.alpha_composite(base, gleam)
            dy = int(3 * math.sin(angle))
            frame_canvas.paste(comp, (pad_x, pad_y + dy), comp)
            
        elif anim_type == 'drift':
            # Birds flight drift and wing oscillation
            dx = int(8 * math.sin(angle))
            dy = int(4 * math.cos(angle))
            frame_canvas.paste(base, (pad_x + dx, pad_y + dy), base)
            
        else: # float / depth
            dy = int(5 * math.sin(angle))
            scale = 1.0 + 0.02 * math.cos(angle)
            mod = base.resize((int(w * scale), int(h * scale)), Image.Resampling.BILINEAR)
            pos = (pad_x + (w - mod.width)//2, pad_y + (h - mod.height)//2 + dy)
            frame_canvas.paste(mod, pos, mod)
            
        frames.append(frame_canvas)
        
    gif_path = os.path.join(GIF_DIR, f"{elem_id}_3d.gif")
    frames[0].save(
        gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=int(1000 / fps),
        loop=0,
        disposal=2
    )
    print(f"Generated GIF: {gif_path}")

print("Generating 3D Animated Responsive GIFs for all elements...")
for elem in processed_elements:
    generate_3d_gif(elem)

# Also generate the Master Emblem 3D GIF
print("Generating Master Emblem 3D GIF...")
emb_base = Image.open(os.path.join(IMG_DIR, '01_emblem_master.png')).convert('RGBA')
emb_base = emb_base.resize((450, 450), Image.Resampling.LANCZOS)
emb_w, emb_h = emb_base.size
emb_frames = []
for i in range(20):
    t = i / 20
    angle = t * 2 * math.pi
    scale = 1.0 + 0.03 * math.sin(angle)
    dx = int(3 * math.sin(angle))
    dy = int(5 * math.cos(angle))
    
    gleam = Image.new('RGBA', (emb_w, emb_h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(gleam)
    band_x = int(-emb_w * 0.4 + t * emb_w * 1.8)
    gdraw.polygon([(band_x, 0), (band_x + 90, 0), (band_x - 50, emb_h), (band_x - 140, emb_h)],
                  fill=(255, 255, 220, 95))
    gleam = gleam.filter(ImageFilter.GaussianBlur(12))
    comp = Image.alpha_composite(emb_base, gleam)
    
    f_canvas = Image.new('RGBA', (emb_w + 30, emb_h + 30), (0, 0, 0, 0))
    fw, fh = int(emb_w * scale), int(emb_h * scale)
    scaled = comp.resize((fw, fh), Image.Resampling.BILINEAR)
    pos = ((emb_w + 30 - fw)//2 + dx, (emb_h + 30 - fh)//2 + dy)
    f_canvas.paste(scaled, pos, scaled)
    emb_frames.append(f_canvas)

emb_frames[0].save(
    os.path.join(GIF_DIR, '01_emblem_master_3d.gif'),
    save_all=True,
    append_images=emb_frames[1:],
    duration=65,
    loop=0,
    disposal=2
)
print("Finished all asset builds!")
