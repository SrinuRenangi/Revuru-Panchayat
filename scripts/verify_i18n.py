import re, json

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html_keys = sorted(list(set(re.findall(r'data-i18n="([^"]+)"', html))))

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Match the JS I18N object
te_block = js[js.find('te: {'):js.find('en: {')]
en_block = js[js.find('en: {'):js.find('let currentLang')]

# find keys: pattern ^\s*(\w+):
te_keys = sorted(re.findall(r'^\s*(\w+):', te_block, re.MULTILINE))
en_keys = sorted(re.findall(r'^\s*(\w+):', en_block, re.MULTILINE))

print(f"HTML unique keys ({len(html_keys)}):")
print(html_keys)

missing_in_te = [k for k in html_keys if k not in te_keys]
missing_in_en = [k for k in html_keys if k not in en_keys]

print("Missing in TE:", missing_in_te)
print("Missing in EN:", missing_in_en)
