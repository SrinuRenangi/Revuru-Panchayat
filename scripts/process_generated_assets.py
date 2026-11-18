import os, sys, math
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance
import numpy as np

GEN_DIR = 'assets/generated'
os.makedirs(GEN_DIR, exist_ok=True)

def remove_white_bg(img_path, tolerance=240, feather=2):
    """Cleanly converts a white/near-white background to transparent alpha."""
    img = Image.open(img_path).convert('RGBA')
    arr = np.array(img, dtype=np.float32)
    
    # Calculate whiteness
    # RGB channels
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Distance from white
    dist = np.sqrt((255 - r)**2 + (255 - g)**2 + (255 - b)**2)
    
    # Alpha mask: 0 if very close to white, 255 if far
    # Smooth transition between dist threshold
    thresh_low = 15.0
    thresh_high = 45.0
    
    alpha = np.clip((dist - thresh_low) / (thresh_high - thresh_low), 0.0, 1.0) * 255.0
    
    # Replace alpha
    arr[:, :, 3] = np.minimum(a, alpha)
    res = Image.fromarray(arr.astype(np.uint8), mode='RGBA')
    
    if feather > 0:
        # Soft feather on alpha
        a_channel = res.split()[3].filter(ImageFilter.GaussianBlur(feather))
        res.putalpha(a_channel)
        
    return res

def create_3d_loop_gif(img, out_path, anim_type='float', num_frames=18, fps=15):
    """Creates a smooth 3D looping animated GIF from an isolated PNG."""
    w, h = img.size
    max_dim = 340
    if max(w, h) > max_dim:
        ratio = max_dim / max(w, h)
        img = img.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS)
    
    w, h = img.size
    frames = []
    pad = 20
    
    for i in range(num_frames):
        t = i / num_frames
        angle = t * 2 * math.pi
        canvas = Image.new('RGBA', (w + pad*2, h + pad*2), (0, 0, 0, 0))
        
        if anim_type == 'sway':
            # Horizontal wind sway & scale
            dx = int(5 * math.sin(angle))
            scale_y = 1.0 + 0.02 * math.cos(angle)
            mod = img.resize((w, int(h * scale_y)), Image.Resampling.BILINEAR)
            pos = (pad + dx, pad + (h - mod.height)//2)
            canvas.paste(mod, pos, mod)
            
        elif anim_type == 'vibrate':
            # Engine rumble vibration
            dx = int(2.5 * math.sin(angle * 4))
            dy = int(1.5 * math.cos(angle * 4))
            canvas.paste(img, (pad + dx, pad + dy), img)
            
        elif anim_type == 'aura':
            # Divine golden halo expansion
            glow = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(glow)
            alpha_pulse = int(55 + 40 * math.sin(angle))
            gdraw.ellipse((w*0.15, 0, w*0.85, h*0.7), fill=(255, 215, 0, alpha_pulse))
            glow = glow.filter(ImageFilter.GaussianBlur(14))
            comp = Image.alpha_composite(glow, img)
            dy = int(3 * math.sin(angle))
            canvas.paste(comp, (pad, pad + dy), comp)
            
        elif anim_type == 'gleam':
            # Metallic shine sweep
            gleam = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(gleam)
            band_x = int(-w*0.4 + t * w * 1.8)
            gdraw.polygon([(band_x, 0), (band_x + 60, 0), (band_x - 30, h), (band_x - 90, h)],
                          fill=(255, 255, 220, 95))
            gleam = gleam.filter(ImageFilter.GaussianBlur(8))
            comp = Image.alpha_composite(img, gleam)
            scale = 1.0 + 0.02 * math.sin(angle)
            mod = comp.resize((int(w * scale), int(h * scale)), Image.Resampling.BILINEAR)
            canvas.paste(mod, (pad + (w - mod.width)//2, pad + (h - mod.height)//2), mod)
            
        else: # float
            dy = int(5 * math.sin(angle))
            scale = 1.0 + 0.02 * math.cos(angle)
            mod = img.resize((int(w * scale), int(h * scale)), Image.Resampling.BILINEAR)
            canvas.paste(mod, (pad + (w - mod.width)//2, pad + (h - mod.height)//2 + dy), mod)
            
        frames.append(canvas)
        
    frames[0].save(
        out_path,
        save_all=True,
        append_images=frames[1:],
        duration=int(1000 / fps),
        loop=0,
        disposal=2
    )
    print(f"Generated 3D GIF: {out_path}")

if __name__ == '__main__':
    print("Asset processing engine ready.")
