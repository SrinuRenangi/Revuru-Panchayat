// Revuru Grama Panchayat - Interactive 3D Portal & Asset Engine

const ASSET_DATA = [
  {
    id: "01_emblem_master",
    category: "symbol",
    nameTe: "రేవూరు పంచాయతీ మాస్టర్ 3D చిహ్నం",
    nameEn: "Revuru Panchayat Master 3D Seal",
    descTe: "గ్రామ చిహ్న సమగ్ర స్వరూపం: బంగారు వలయం, వరి కంకులు, సూర్యోదయం, ఆలయం మరియు రేవూరు నినాదం యొక్క సంపూర్ణ మిళితం.",
    descEn: "The complete heraldic seal combining the sacred temple, sunrise, banyan tree, tractor, water reservoir, and motto.",
    gif: "assets/gifs/01_emblem_master_3d.gif",
    png: "assets/images/01_emblem_master.png",
    png4k: "assets/images/4k_01_emblem_master.png",
    palette: ["#878e32", "#2d5413", "#e1c72e", "#eed414", "#0e99f8"]
  },
  {
    id: "02_banyan_tree",
    category: "nature",
    nameTe: "గ్రామ మహావృక్షం (పచ్చని జీవధార)",
    nameEn: "The Sacred Banyan Tree",
    descTe: "గ్రామీణ జీవావరణాన్ని, పచ్చదనాన్ని మరియు తరతరాల నీడనిచ్చే గ్రామ సంస్కృతిని సూచించే మహావృక్షం.",
    descEn: "Ancient banyan tree symbolizing community shelter, ecological longevity, and village roots.",
    gif: "assets/gifs/02_banyan_tree_3d.gif",
    png: "assets/images/02_banyan_tree.png",
    png4k: "assets/images/4k_02_banyan_tree.png",
    palette: ["#617b2b", "#263713", "#babc33", "#14320b", "#4a631f"]
  },
  {
    id: "03_red_tractor",
    category: "nature",
    nameTe: "అన్నదాత & ఎరుపు ట్రాక్టర్",
    nameEn: "Farmer on Modern Red Tractor",
    descTe: "వ్యవసాయ రంగంలో ఆధునిక సాంకేతిక పరిజ్ఞానం, యాంత్రీకరణ మరియు రైతన్న అలుపెరగని శ్రమకు ప్రతీక.",
    descEn: "Mechanized red tractor cultivating fields, honoring agrarian livelihood and agricultural prowess.",
    gif: "assets/gifs/03_red_tractor_3d.gif",
    png: "assets/images/03_red_tractor.png",
    png4k: "assets/images/4k_03_red_tractor.png",
    palette: ["#b82e22", "#20291c", "#638f58", "#e1efec", "#822218"]
  },
  {
    id: "04_temple_gopuram",
    category: "symbol",
    nameTe: "చారిత్రక ద్రావిడ ఆలయ గోపురం",
    nameEn: "Historic Dravidian Temple Gopuram",
    descTe: "పురాతన ఆలయ వాస్తుకళా వైభవం, గ్రామ ఆధ్యాత్మిక సాంప్రదాయం మరియు దివ్య రక్షణను ప్రతిబింబించే గోపురం.",
    descEn: "Towering South Indian temple architecture representing spiritual heritage and artistic legacy.",
    gif: "assets/gifs/04_temple_gopuram_3d.gif",
    png: "assets/images/04_temple_gopuram.png",
    png4k: "assets/images/4k_04_temple_gopuram.png",
    palette: ["#f9e335", "#f1dbb0", "#956530", "#c3842e", "#79481f"]
  },
  {
    id: "05_water_tower",
    category: "symbol",
    nameTe: "రేవూరు రక్షిత మంచినీటి ఓవర్‌హెడ్ ట్యాంక్",
    nameEn: "Revuru Elevated Drinking Water Tower",
    descTe: "'REVURU' అక్షరాలతో విలసిల్లే జలాశయం — ప్రతి ఇంటికీ స్వచ్ఛమైన, ఆరోగ్యకరమైన తాగునీటి భరోసా.",
    descEn: "Modern white overhead water reservoir marked REVURU guaranteeing clean tap water to every home.",
    gif: "assets/gifs/05_water_tower_3d.gif",
    png: "assets/images/05_water_tower.png",
    png4k: "assets/images/4k_05_water_tower.png",
    palette: ["#ebe5dc", "#996f32", "#cba773", "#0e99f8", "#ffffff"]
  },
  {
    id: "06_sun_and_rays",
    category: "symbol",
    nameTe: "నవోదయ సూర్యుడు & స్వర్ణ కిరణాలు",
    nameEn: "Radiant Sunrise & Solar Corona",
    descTe: "గ్రామ శిఖరాన ఉదయిస్తున్న భానుడు — చీకట్లను పారద్రోలి వెలుగులు నింపే నవ వికాసానికి, ఆశకు ప్రతీక.",
    descEn: "Bright rising sun dispelling shadows, illuminating the rural horizon with warmth and progress.",
    gif: "assets/gifs/06_sun_and_rays_3d.gif",
    png: "assets/images/06_sun_and_rays.png",
    png4k: "assets/images/4k_06_sun_and_rays.png",
    palette: ["#eed414", "#f4e15d", "#ff7b00", "#ffffff", "#c3842e"]
  },
  {
    id: "07_flying_birds",
    category: "nature",
    nameTe: "స్వేచ్ఛా విహంగాల సమూహం",
    nameEn: "Flock of Soaring Birds",
    descTe: "నీలాకాశంలో ఎగురుతున్న పక్షులు — గ్రామ ప్రశాంతత, స్వేచ్ఛాయుత జీవనం మరియు ఆరోగ్యకరమైన వాతావరణం.",
    descEn: "Birds soaring across azure sky denoting pristine rural atmosphere, freedom, and peaceful coexistence.",
    gif: "assets/gifs/07_flying_birds_3d.gif",
    png: "assets/images/07_flying_birds.png",
    png4k: "assets/images/4k_07_flying_birds.png",
    palette: ["#0e99f8", "#7ecaf3", "#111827", "#ffffff", "#4b5563"]
  },
  {
    id: "08_village_community",
    category: "symbol",
    nameTe: "గ్రామ ఆవాసాలు & సుందర రహదారి",
    nameEn: "Village Cottages & Connecting Highway",
    descTe: "ఎర్రటి పెంకుటిళ్ళ సమూహం, చక్కటి తారు రోడ్డు — ఆధునిక మౌలిక వసతులతో కూడిన స్వయం సమృద్ధి గ్రామం.",
    descEn: "Tidy terracotta-roof cottages and paved arterial road depicting structured village infrastructure.",
    gif: "assets/gifs/08_village_community_3d.gif",
    png: "assets/images/08_village_community.png",
    png4k: "assets/images/4k_08_village_community.png",
    palette: ["#b83d26", "#e7f0eb", "#347a15", "#475569", "#79481f"]
  },
  {
    id: "09_revuru_title_3d",
    category: "typography",
    nameTe: "3D స్వర్ణ శిరోభూషణం 'రేవూరు'",
    nameEn: "3D Sculpted Golden Title 'Revuru'",
    descTe: "బంగారు నగిషీలు, సూక్ష్మమైన వెలుగునీడల రిఫ్లెక్షన్‌తో రూపొందించబడిన తెలుగు అక్షర కళాఖండం.",
    descEn: "Master-crafted 3D Telugu lettering in burnished gold enamel with beveled high-relief depth.",
    gif: "assets/gifs/09_revuru_title_3d.gif",
    png: "assets/images/09_revuru_title_3d.png",
    png4k: "assets/images/4k_09_revuru_title_3d.png",
    palette: ["#eed414", "#f4e15d", "#c3842e", "#79481f", "#fff59d"]
  },
  {
    id: "10_panchayat_title_3d",
    category: "typography",
    nameTe: "3D శ్వేత వర్ణం 'పంచాయత్'",
    nameEn: "3D Silver Embossed 'Panchayat'",
    descTe: "నిష్కళంక పారదర్శక పరిపాలనకు గుర్తుగా వెండి వెలుగులతో కూడిన తెలుగు శీర్షిక.",
    descEn: "Clean, silver-white dimensional typography framed with balancing geometric horizontal bars.",
    gif: "assets/gifs/10_panchayat_title_3d.gif",
    png: "assets/images/10_panchayat_title_3d.png",
    png4k: "assets/images/4k_10_panchayat_title_3d.png",
    palette: ["#ffffff", "#e7f0eb", "#9ca3af", "#1f2937", "#eed414"]
  },
  {
    id: "11_motto_ribbon",
    category: "typography",
    nameTe: "గ్రామ నినాద పతాకం 'మన ప్రగతే మనభవిష్యత్తు'",
    nameEn: "Motto Ribbon: 'Our Progress is Our Future'",
    descTe: "గ్రామస్థులందరి ఐక్యత, సమిష్టి కృషి మరియు ఉజ్వల భవితవ్యాన్ని చాటిచెప్పే స్వర్ణ పతాకం.",
    descEn: "Flowing golden banner heralding the core Panchayat governance philosophy: 'Our Progress is Our Future'.",
    gif: "assets/gifs/11_motto_ribbon_3d.gif",
    png: "assets/images/11_motto_ribbon.png",
    png4k: "assets/images/4k_11_motto_ribbon.png",
    palette: ["#eed414", "#c3842e", "#79481f", "#fff9c4", "#347a15"]
  },
  {
    id: "12_golden_wheat_left",
    category: "nature",
    nameTe: "ఎడమవైపు స్వర్ణ వరికంకి",
    nameEn: "Left Golden Paddy Ear (Harvest Sheaf)",
    descTe: "సంపన్నమైన వ్యవసాయ సిరులు, పుష్కలమైన ఆహార ధాన్యాల ఉత్పత్తిని సూచించే బంగారు వరికంకి.",
    descEn: "Lush golden rice stalk framing the western arc, symbolizing food security and bountiful crop harvest.",
    gif: "assets/gifs/12_golden_wheat_left_3d.gif",
    png: "assets/images/12_golden_wheat_left.png",
    png4k: "assets/images/4k_12_golden_wheat_left.png",
    palette: ["#eed414", "#c3842e", "#81b817", "#14320b", "#fff176"]
  },
  {
    id: "13_golden_wheat_right",
    category: "nature",
    nameTe: "కుడివైపు స్వర్ణ వరికంకి",
    nameEn: "Right Golden Paddy Ear (Harvest Sheaf)",
    descTe: "సస్యశ్యామలమైన రేవూరు పొలాలకు నిదర్శనంగా కుడివైపున కొలువైన సుసంపన్న వరికంకి.",
    descEn: "Symmetric eastern golden paddy ear signifying agricultural balance, prosperity, and celebratory green life.",
    gif: "assets/gifs/13_golden_wheat_right_3d.gif",
    png: "assets/images/13_golden_wheat_right.png",
    png4k: "assets/images/4k_13_golden_wheat_right.png",
    palette: ["#eed414", "#c3842e", "#81b817", "#14320b", "#fff176"]
  },
  {
    id: "14_lower_fields_arc",
    category: "nature",
    nameTe: "హరిత క్షేత్రాల చాపం (భూతల స్వర్గం)",
    nameEn: "Emerald Contoured Agricultural Arc",
    descTe: "లోగో క్రింది భాగంలో సుందరమైన వరి మడులు, తరంగాల్లా సాగే పంట చేల పనోరమా దృశ్యం.",
    descEn: "Panoramic contoured agricultural terraces nestled gracefully inside the lower golden circular arc.",
    gif: "assets/gifs/14_lower_fields_arc_3d.gif",
    png: "assets/images/14_lower_fields_arc.png",
    png4k: "assets/images/4k_14_lower_fields_arc.png",
    palette: ["#347a15", "#14320b", "#81b817", "#eed414", "#0a1906"]
  }
];

// Bilingual Dictionary
const I18N = {
  te: {
    liveUpdates: "ప్రత్యక్ష ప్రకటనలు",
    panchayatName: "రేవూరు గ్రామ పంచాయతీ",
    panchayatSub: "Revuru Grama Panchayat • Andhra Pradesh",
    navHome: "ప్రధాన పేజీ",
    navServices: "గ్రామ సేవలు",
    navAssets: "3D చిహ్నాలు & గ్యాలరీ",
    navColors: "రంగుల కోడ్‌లు",
    navAbout: "రేవూరు చరిత్ర",
    btnAssets4k: "4K & 3D GIFs",
    heroBadge: "స్వర్ణ గ్రామ పంచాయతీ రేవూరు",
    heroTitleRevuru: "రేవూరు",
    heroTitlePanchayat: "గ్రామ పంచాయతీ",
    mottoText: "మన ప్రగతే మనభవిష్యత్తు",
    mottoSub: "Our Progress is Our Shared Future",
    heroLead: "పచ్చని పొలాలు, చారిత్రక ఆధ్యాత్మిక శోభ, నిరంతర అభివృద్ధి, ఆధునిక డిజిటల్ పరిపాలనతో సుసంపన్నమైన రేవూరు గ్రామ అధికారిక వెబ్ పోర్టల్. 3D గ్రాఫిక్స్, అల్ట్రా 4K దృశ్యాలు మరియు సమగ్ర పౌర సేవల సమాహారం.",
    btnExploreAssets: "3D ఎలిమెంట్స్ పరిశీలించండి",
    btnCitizenServices: "పౌర సేవల పోర్టల్",
    metricWater: "రక్షిత మంచినీరు",
    metricAgri: "ఎకరాల పచ్చని పంటలు",
    metricDigital: "డిజిటల్ సేవలు",
    ctrlMaster: "3D మాస్టర్ చిహ్నం",
    ctrlGlint: "గోల్డ్ గ్లింట్ ఎఫెక్ట్",
    ctrlDownload4k: "4K PNG డౌన్‌లోడ్",
    stageHint: "3D కోణాన్ని చూడడానికి కర్సర్‌ని లేదా టచ్‌ని కదిలించండి",
    tagServices: "పౌర కేంద్రక పరిపాలన",
    servicesTitle: "రేవూరు గ్రామ పంచాయతీ సేవలు",
    servicesDesc: "గ్రామ ప్రజల సౌకర్యార్థం సచివాలయ సేవలు, వ్యవసాయ తోడ్పాటు మరియు సర్టిఫికెట్ల వివరాలు",
    srvAgri: "రైతు భరోసా & వ్యవసాయం",
    srvAgriDesc: "విత్తనాలు, ఎరువుల పంపిణీ, ఆధునిక యంత్రాల రాయితీలు మరియు పంట సాగు మార్గదర్శకాలు.",
    srvWater: "రక్షిత మంచినీటి సరఫరా",
    srvWaterDesc: "అతి పెద్ద రేవూరు ఓవర్‌హెడ్ ట్యాంక్ ద్వారా ప్రతి ఇంటికీ ఉచిత పరిశుభ్రమైన తాగునీటి సరఫరా.",
    srvGreen: "పరిశుభ్రత & పర్యావరణం",
    srvGreenDesc: "స్వచ్ఛ రేవూరు ఉద్యమం, పచ్చని చెట్ల పెంపకం, మురుగునీటి నిర్వహణ మరియు పర్యావరణ పరిరక్షణ.",
    srvCulture: "చారిత్రక సంస్కృతి & ఉత్సవాలు",
    srvCultureDesc: "పురాతన దేవాలయ సంరక్షణ, గ్రామ తిరునాళ్ళు, సాంస్కృతిక వేడుకలు మరియు సామరస్య వేదిక.",
    learnMore: "వివరాలు చూడండి",
    tagAssets: "డిజిటల్ చిహ్నాల విభజన",
    assetsTitle: "రేవూరు లోగో సమగ్ర 3D ఎలిమెంట్స్ & 4K ఆస్తులు",
    assetsDesc: "మూల చిహ్నంలోని ప్రతి భాగాన్ని విడదీసి, సహజమైన అంచులు, అల్ట్రా-హై-డెఫినిషన్ 4K నాణ్యత మరియు స్పందించే 3D యానిమేషన్ GIFలుగా రూపొందించబడిన ప్రతిష్ఠాత్మక సేకరణ.",
    tabAll: "అన్నీ (14 అంశాలు)",
    tabSymbols: "ప్రధాన చిహ్నాలు",
    tabNature: "ప్రకృతి & వ్యవసాయం",
    tabType: "3D అక్షరాలు & నినాదం",
    tagColors: "అధికారిక రంగుల కోడ్‌లు",
    colorsTitle: "రేవూరు పంచాయతీ కలర్ పాలెట్ & డిజైన్ టోకెన్లు",
    colorsDesc: "లోగో నుండి గణితశాస్త్ర రీత్యా విశ్లేషించి వర్గీకరించబడిన అసలైన హెక్స్ (HEX), RGB కోడ్‌లు మరియు వాటి ప్రాముఖ్యత.",
    tagAbout: "గ్రామ పరిచయం",
    aboutTitle: "రేవూరు: సాంప్రదాయం మరియు ఆధునికతల సంగమం",
    aboutP1: "రేవూరు గ్రామం సారవంతమైన నేలలు, ఆదర్శవంతమైన వ్యవసాయ సంస్కృతి, పురాతన ఆలయ గోపురం మరియు శాంతియుత ప్రజా జీవనానికి ప్రసిద్ధి చెందిన పుణ్యభూమి.",
    aboutP2: "పంచాయతీ లోగోలో కొలువైన ప్రతి చిహ్నం రేవూరు గ్రామీణ ఆత్మను ప్రతిబింబిస్తుంది. ఉదయిస్తున్న సూర్యుడు ప్రతి ఉదయం తెచ్చే నవ వికాసాన్ని సూచిస్తే, ట్రాక్టర్ మరియు వరికంకులు అన్నదాత శ్రమను, గోపురం మన సంస్కృతిని, వాటర్ ట్యాంక్ ప్రజా సంక్షేమాన్ని నిరూపిస్తాయి.",
    hl1Title: "సారవంతమైన భూములు",
    hl1Desc: "వరి, పండ్లు మరియు వాణిజ్య పంటల సమృద్ధి",
    hl2Title: "చారిత్రక వారసత్వం",
    hl2Desc: "శతాబ్దాల నాటి ద్రావిడ ఆలయ శిల్పకళా వైభవం",
    hl3Title: "డిజిటల్ పరిపాలన",
    hl3Desc: "పారదర్శకమైన మరియు వేగవంతమైన ఆన్‌లైన్ సేవలు",
    btnViewPng: "PNG బొమ్మ",
    btnViewGif: "3D యానిమేషన్",
    btnDownloadPng: "PNG పొందండి",
    btnDownload4k: "4K అల్ట్రా PNG"
  },
  en: {
    liveUpdates: "LIVE UPDATES",
    panchayatName: "Revuru Grama Panchayat",
    panchayatSub: "Official Civic & Rural Governance Portal",
    navHome: "Home",
    navServices: "Services",
    navAssets: "3D Assets & Gallery",
    navColors: "Color Palette",
    navAbout: "About Revuru",
    btnAssets4k: "4K & 3D GIFs",
    heroBadge: "Model Grama Panchayat • Revuru",
    heroTitleRevuru: "REVURU",
    heroTitlePanchayat: "Grama Panchayat",
    mottoText: "Our Progress is Our Future",
    mottoSub: "Mana Pragathe Mana Bhavishyathu",
    heroLead: "Welcome to the official digital portal of Revuru Grama Panchayat. Celebrating lush agricultural heritage, historic Dravidian architecture, pure drinking water infrastructure, and transparent digital citizen services with ultra 4K visuals and responsive 3D animations.",
    btnExploreAssets: "Explore 3D Elements",
    btnCitizenServices: "Citizen Services",
    metricWater: "Pure Tap Water",
    metricAgri: "Acres of Green Farms",
    metricDigital: "Digital Citizen Portal",
    ctrlMaster: "3D Master Seal",
    ctrlGlint: "Gold Sheen Pulse",
    ctrlDownload4k: "Download 4K PNG",
    stageHint: "Move your cursor or touch to rotate in 3D perspective",
    tagServices: "Citizen-Centric Governance",
    servicesTitle: "Panchayat Public Services",
    servicesDesc: "Direct civic amenities, farmer subsidies, welfare schemes, and certified documentation.",
    srvAgri: "Rythu Bharosa & Farming",
    srvAgriDesc: "High-yield seeds, organic fertilizers, mechanization subsidies, and farm advisories.",
    srvWater: "Safe Drinking Water Supply",
    srvWaterDesc: "Uninterrupted purified water supply to all households from the Revuru overhead reservoir.",
    srvGreen: "Clean & Green Village",
    srvGreenDesc: "Swachh Revuru mission, plantation drives, scientific drainage, and green energy.",
    srvCulture: "Heritage & Community Culture",
    srvCultureDesc: "Preservation of centuries-old temples, village festivals, and harmonious civic life.",
    learnMore: "Learn More",
    tagAssets: "Emblem Partition & Assets",
    assetsTitle: "Comprehensive 3D Emblem Elements & 4K Assets",
    assetsDesc: "Each constituent icon from the official emblem has been meticulously isolated with smooth feathered contours, converted into responsive 3D animated GIFs and pristine 4K resolution master files.",
    tabAll: "All (14 Assets)",
    tabSymbols: "Core Symbols",
    tabNature: "Nature & Agriculture",
    tabType: "3D Typography",
    tagColors: "Official Design Tokens",
    colorsTitle: "Color Palette & Design Tokens",
    colorsDesc: "Mathematically derived Hex and RGB color specifications extracted directly from the Revuru Panchayat insignia.",
    tagAbout: "About Revuru",
    aboutTitle: "Revuru: Harmony of Heritage & Modernity",
    aboutP1: "Revuru is a vibrant agricultural paradise in Andhra Pradesh renowned for fertile soils, sacred stone architecture, and progressive rural community governance.",
    aboutP2: "Every detail of the emblem mirrors the soul of the village: the sunrise brings renewal, the banyan tree offers protective shade, the red tractor celebrates hardworking farmers, and the water tower ensures health for all.",
    hl1Title: "Fertile Farmlands",
    hl1Desc: "Bountiful paddy, mango orchards, and cash crops",
    hl2Title: "Sacred Architectural Heritage",
    hl2Desc: "Centuries-old Dravidian temple gopuram and stone shrines",
    hl3Title: "Digital Civic Governance",
    hl3Desc: "Fast, transparent online delivery of citizen certificates",
    btnViewPng: "PNG Image",
    btnViewGif: "3D Animated GIF",
    btnDownloadPng: "Download PNG",
    btnDownload4k: "4K Master PNG"
  }
};

let currentLang = 'te';

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  init3DEmblemStage();
  initAssetGrid();
  initLanguageToggle();
  initToast();
  initColorCopy();
  initMobileMenu();
});

// 1. Ambient Golden Particle Canvas
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -Math.random() * 0.6 - 0.2;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.color = Math.random() > 0.4 ? '238, 212, 20' : '129, 184, 23';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 10;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// 2. Interactive 3D Emblem Stage
function init3DEmblemStage() {
  const stage = document.getElementById('emblem3DStage');
  const wrapper = document.getElementById('emblemWrapper');
  const heroAsset = document.getElementById('mainHeroAsset');
  const btnModeMaster = document.getElementById('btnModeMaster');
  const btnModeGleam = document.getElementById('btnModeGleam');

  let bounds = stage.getBoundingClientRect();
  window.addEventListener('resize', () => {
    bounds = stage.getBoundingClientRect();
  });

  stage.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const xPct = (mouseX / bounds.width) - 0.5;
    const yPct = (mouseY / bounds.height) - 0.5;

    const rotX = -yPct * 24; // tilt up/down
    const rotY = xPct * 28;  // tilt left/right
    const transZ = 30;

    wrapper.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${transZ}px)`;
  });

  stage.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });

  // Touch tilt for mobile
  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const xPct = ((touch.clientX - bounds.left) / bounds.width) - 0.5;
      const yPct = ((touch.clientY - bounds.top) / bounds.height) - 0.5;
      wrapper.style.transform = `rotateX(${-yPct * 20}deg) rotateY(${xPct * 20}deg) translateZ(20px)`;
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });

  // Stage Buttons
  btnModeMaster.addEventListener('click', () => {
    btnModeMaster.classList.add('active');
    btnModeGleam.classList.remove('active');
    heroAsset.src = 'assets/gifs/01_emblem_master_3d.gif';
  });

  btnModeGleam.addEventListener('click', () => {
    btnModeGleam.classList.add('active');
    btnModeMaster.classList.remove('active');
    heroAsset.src = 'assets/gifs/emblem_3d_glow.gif';
  });
}

// 3. Populate Asset Showcase Cards
function initAssetGrid() {
  const grid = document.getElementById('assetsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? ASSET_DATA 
      : ASSET_DATA.filter(item => item.category === filter);

    filtered.forEach(asset => {
      const card = document.createElement('article');
      card.className = 'asset-card';
      card.dataset.category = asset.category;

      const title = currentLang === 'te' ? asset.nameTe : asset.nameEn;
      const desc = currentLang === 'te' ? asset.descTe : asset.descEn;

      // Palette swatches HTML
      const swatchesHtml = asset.palette.map(hex => `
        <span class="swatch-chip" style="background-color: ${hex};" data-hex="${hex}" title="Click to copy ${hex}"></span>
      `).join('');

      card.innerHTML = `
        <div class="asset-media-stage">
          <span class="asset-badge-id">#${asset.id.split('_')[0]}</span>
          <div class="view-mode-toggle">
            <button class="v-toggle-btn active" data-view="gif">3D GIF</button>
            <button class="v-toggle-btn" data-view="png">PNG</button>
          </div>
          <img src="${asset.gif}" alt="${title}" class="asset-main-visual" id="img-${asset.id}">
        </div>

        <div class="asset-content">
          <h3 class="asset-title">${title}</h3>
          <p class="asset-desc">${desc}</p>
          
          <div class="asset-palette-bar">
            <span class="palette-label">రంగులు / Palette:</span>
            ${swatchesHtml}
          </div>

          <div class="asset-actions">
            <a href="${asset.png}" download="${asset.id}.png" class="btn-download-png">
              📥 <span class="lbl-png">${currentLang === 'te' ? 'PNG పొందండి' : 'Download PNG'}</span>
            </a>
            <a href="${asset.png4k}" download="4K_${asset.id}.png" class="btn-download-4k">
              💎 <span class="lbl-4k">${currentLang === 'te' ? '4K అల్ట్రా PNG' : '4K Master PNG'}</span>
            </a>
          </div>
        </div>
      `;

      // Handle GIF / PNG Toggle inside card
      const toggleBtns = card.querySelectorAll('.v-toggle-btn');
      const visualImg = card.querySelector(`#img-${asset.id}`);

      toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const view = btn.dataset.view;
          visualImg.src = view === 'gif' ? asset.gif : asset.png;
        });
      });

      // Swatch Click Copy
      const chips = card.querySelectorAll('.swatch-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
          const hex = e.target.dataset.hex;
          navigator.clipboard.writeText(hex).then(() => {
            showToast(`${hex} copied to clipboard!`);
          });
        });
      });

      grid.appendChild(card);
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
}

// 4. Language Switcher (Telugu <-> English)
function initLanguageToggle() {
  const btn = document.getElementById('langToggleBtn');

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'te' ? 'en' : 'te';
    btn.innerHTML = currentLang === 'te' 
      ? '<span class="active-lang">తెలుగు</span> / <span>English</span>' 
      : '<span>తెలుగు</span> / <span class="active-lang">English</span>';

    // Update all i18n data elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[currentLang] && I18N[currentLang][key]) {
        el.textContent = I18N[currentLang][key];
      }
    });

    // Re-render Asset Grid with updated language
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const grid = document.getElementById('assetsGrid');
    const cards = grid.querySelectorAll('.asset-card');

    cards.forEach((card, idx) => {
      const asset = ASSET_DATA[idx];
      if (asset) {
        card.querySelector('.asset-title').textContent = currentLang === 'te' ? asset.nameTe : asset.nameEn;
        card.querySelector('.asset-desc').textContent = currentLang === 'te' ? asset.descTe : asset.descEn;
        card.querySelector('.lbl-png').textContent = currentLang === 'te' ? 'PNG పొందండి' : 'Download PNG';
        card.querySelector('.lbl-4k').textContent = currentLang === 'te' ? '4K అల్ట్రా PNG' : '4K Master PNG';
      }
    });

    showToast(currentLang === 'te' ? 'భాష తెలుగుకు మార్చబడింది' : 'Language switched to English');
  });
}

// 5. Toast Notification
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function initToast() {
  // ready
}

// 6. Copy Color Palette Codes
function initColorCopy() {
  const copyBadges = document.querySelectorAll('.copy-badge');
  copyBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      const code = badge.dataset.copy;
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Copied ${code} to clipboard!`);
      });
    });
  });
}

// 7. Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(8, 20, 6, 0.96)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--border-glass)';
    });
  }
}
