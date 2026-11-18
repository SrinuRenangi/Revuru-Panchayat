// Revuru Grama Panchayat - Official Portal Script

const I18N = {
  te: {
    panchayatName: "రేవూరు గ్రామ పంచాయతీ",
    panchayatSub: "అనంతసాగరం మండలం, ఎస్.పి.ఎస్.ఆర్ నెల్లూరు జిల్లా - 524303",
    navHome: "హోమ్",
    navAbout: "చరిత్ర & భౌగోళికం",
    navServices: "గ్రామ సేవలు",
    navContact: "సంప్రదించండి",
    btnMap: "మ్యాప్స్",
    heroPill: "ఆదర్శ గ్రామ పంచాయతీ • రేవూరు",
    titleMain: "రేవూరు",
    titleSub: "గ్రామ పంచాయతీ",
    mottoText: "మన ప్రగతే మనభవిష్యత్తు",
    mottoEn: "Our Progress is Our Shared Future",
    heroDesc: "ఆంధ్రప్రదేశ్, శ్రీ పొట్టి శ్రీరాములు నెల్లూరు జిల్లా, అనంతసాగరం మండలంలోని రేవూరు గ్రామం. పెన్నా నదీ పరీవాహక ప్రాంతంలోని సస్యశ్యామల వరి చేలు, చారిత్రక ఆలయ వైభవం మరియు స్వచ్ఛమైన రక్షిత మంచినీటి వసతులతో అభివృద్ధి పథంలో సాగుతున్న ఆదర్శ గ్రామం.",
    btnExplore: "గ్రామ వివరాలు చూడండి →",
    btnServices: "సచివాలయ సేవలు",
    btnLocation: "గూగుల్ మ్యాప్స్",
    statPin: "పోస్టల్ పిన్‌కోడ్",
    statCoords: "79.51° E అక్షాంశం",
    statWater: "రక్షిత మంచినీరు",
    tagHistory: "భౌగోళికం & వారసత్వం",
    historyTitle: "రేవూరు గ్రామ చరిత్ర & భౌగోళిక విశేషాలు",
    historySub: "గూగుల్ మ్యాప్స్ స్థాన సూచిక (14.5886° N, 79.5104° E) ఆధారంగా రేవూరు సమగ్ర సమాచారం",
    historyP1: "రేవూరు గ్రామం నెల్లూరు జిల్లా అనంతసాగరం మండలంలో ఆత్మకూరు అసెంబ్లీ నియోజకవర్గ పరిధిలో ఉంది. పెన్నా మరియు బొగ్గేరు నదీ పరీవాహక ప్రాంతాల ఒండ్రు నేలలు, సోమశిల జలాశయ కాలువల సమృద్ధి వల్ల ఈ గ్రామంలో వరి, మామిడి తోటలు మరియు వాణిజ్య పంటలు విస్తారంగా పండుతాయి.",
    historyP2: "గ్రామంలోని శ్రీ రామాలయం, పురాతన ఆలయ గోపురం, గ్రామ దేవత శ్రీ పోలేరమ్మ ఆలయం, శతాబ్దాల నాటి గ్రామ రచ్చబండ మర్రి చెట్టు మరియు Z.P. హైస్కూల్ ఇక్కడి ప్రధాన సాంస్కృతిక కేంద్రాలు. రేవూరు ఓవర్‌హెడ్ వాటర్ ట్యాంక్ ప్రతి ఇంటికీ తాగునీటిని సమకూరుస్తూ గ్రామ ప్రజల ఆరోగ్యానికి భరోసానిస్తోంది.",
    featTempleTitle: "ఆలయ సాంస్కృతిక వైభవం",
    featTempleDesc: "శ్రీ రామాలయం, చారిత్రక గోపురం మరియు పోలేరమ్మ ఉత్సవాలు గ్రామ ఆధ్యాత్మిక ఐక్యతకు నిదర్శనం.",
    featAgriTitle: "వరి సాగు & రైతు భరోసా",
    featAgriDesc: "సారవంతమైన ఒండ్రు నేలల్లో నాణ్యమైన వరి పంటలు, రైతు భరోసా కేంద్రం ద్వారా ఆధునిక సాంకేతిక సలహాలు.",
    featWaterTitle: "రక్షిత మంచినీటి ట్యాంక్ (REVURU)",
    featWaterDesc: "'REVURU' పేరుతో వెలసిన మహా జలాశయం ద్వారా గ్రామ వీధులలోని ప్రతి నివాసానికీ సురక్షిత తాగునీరు.",
    featTreeTitle: "గ్రామ రచ్చబండ మహావృక్షం",
    featTreeDesc: "తరతరాలుగా గ్రామ పెద్దలు, రైతులు సమావేశమయ్యే మర్రి చెట్టు గ్రామ సాంప్రదాయ ఐక్యతకు ప్రతీక.",
    tagServices: "పౌర సంక్షేమం",
    servicesTitle: "గ్రామ సచివాలయ & పంచాయతీ సేవలు",
    servicesSub: "గ్రామ ప్రజల సౌకర్యార్థం సచివాలయం ద్వారా అందుబాటులో ఉన్న ప్రజా సేవలు",
    srv1Title: "రైతు భరోసా కేంద్రం (RBK)",
    srv1Desc: "నాణ్యమైన విత్తనాలు, ఎరువుల పంపిణీ, పంట నమోదు (e-Crop) మరియు వ్యవసాయ పరికరాల రాయితీ సేవలు.",
    srv2Title: "రక్షిత మంచినీటి సరఫరా",
    srv2Desc: "రేవూరు భారీ ఓవర్‌హెడ్ రిజర్వాయర్ ద్వారా ప్రతి ఇంటికీ ఉచిత, స్వచ్ఛమైన మరియు శుద్ధి చేసిన తాగునీటి సరఫరా.",
    srv3Title: "సచివాలయ పౌర సేవలు",
    srv3Desc: "జనన/మరణ ధ్రువీకరణలు, ఆస్తి పన్ను, ఇంటి నంబర్ కేటాయింపు, రేషన్ కార్డు మరియు ప్రభుత్వ పథకాల నమోదు.",
    srv4Title: "స్వచ్ఛ రేవూరు & పారిశుధ్యం",
    srv4Desc: "నిరంతర చెత్త సేకరణ, మురుగు కాలువల నిర్వహణ, ఎల్ఈడీ వీధి దీపాలు మరియు పచ్చదనం పెంపొందించే కార్యక్రమాలు.",
    tagContact: "కార్యాలయ చిరునామా",
    contactTitle: "రేవూరు గ్రామ పంచాయతీ కార్యాలయం",
    contactSub: "గ్రామ సేవలు, ప్రజా సమస్యల పరిష్కారం మరియు సమాచారం కొరకు సంప్రదించండి.",
    cOfficeLabel: "కార్యాలయ చిరునామా:",
    cMailLabel: "అధికారిక ఈమెయిల్:",
    cHoursLabel: "పనివేళలు:",
    cPhoneLabel: "హెల్ప్‌లైన్:"
  },
  en: {
    panchayatName: "Revuru Grama Panchayat",
    panchayatSub: "Ananthasagaram Mandal, SPSR Nellore District - 524303",
    navHome: "Home",
    navAbout: "History & Geography",
    navServices: "Civic Services",
    navContact: "Contact Us",
    btnMap: "Maps",
    heroPill: "Model Grama Panchayat • Revuru",
    titleMain: "REVURU",
    titleSub: "Grama Panchayat",
    mottoText: "Our Progress is Our Future",
    mottoEn: "Mana Pragathe Mana Bhavishyathu",
    heroDesc: "Welcome to Revuru, an illustrious agrarian village in Ananthasagaram Mandal, SPSR Nellore District, Andhra Pradesh. Nourished by the fertile Penna river basin, lush green paddy fields, ancient Dravidian temple architecture, and safe drinking water infrastructure.",
    btnExplore: "Explore Village History →",
    btnServices: "Secretariat Services",
    btnLocation: "Google Maps",
    statPin: "Postal PIN Code",
    statCoords: "79.51° E Longitude",
    statWater: "Pure Tap Water",
    tagHistory: "Geography & Heritage",
    historyTitle: "Revuru Village History & Geography",
    historySub: "Comprehensive details mapped to location coordinates (14.5886° N, 79.5104° E)",
    historyP1: "Revuru is a renowned agricultural heritage settlement in Ananthasagaram Mandal, within the Atmakur Assembly constituency of Nellore District. Benefiting from alluvial soils enriched by the Penna and Boggeru river basins and Somasila irrigation canals, the village produces bountiful paddy, mango groves, and cash crops.",
    historyP2: "Local historic landmarks include Sri Ramalayam, the ancient Temple Gopuram, Sri Poleramma Temple, the centuries-old village banyan tree (Rachabanda), and Z.P. High School. The prominent overhead water reservoir guarantees uninterrupted safe drinking water to every home.",
    featTempleTitle: "Sacred Temple Heritage",
    featTempleDesc: "Sri Ramalayam, historic stone Gopuram, and annual festivities reflect harmonious community culture.",
    featAgriTitle: "Paddy Farming & Farmer Center",
    featAgriDesc: "Rich paddy cultivation in alluvial soils supported by the Rythu Bharosa Kendra with modern agrarian advisories.",
    featWaterTitle: "Protected Water Tower (REVURU)",
    featWaterDesc: "The monumental reservoir labeled 'REVURU' delivering clean, pressurized drinking water to every street.",
    featTreeTitle: "The Village Banyan Tree",
    featTreeDesc: "The ancestral banyan tree where community elders gather in shade, symbolizing village harmony.",
    tagServices: "Civic Welfare",
    servicesTitle: "Panchayat & Secretariat Services",
    servicesSub: "Public services and civic welfare facilities available to all residents",
    srv1Title: "Rythu Bharosa Kendra (RBK)",
    srv1Desc: "High-yield seeds, certified fertilizers, e-Crop booking, and agricultural mechanization subsidies.",
    srv2Title: "Safe Tap Water Supply",
    srv2Desc: "Uninterrupted purified tap water delivered to every household from the Revuru overhead reservoir.",
    srv3Title: "Civic Secretariat Services",
    srv3Desc: "Birth/death certificates, property tax assessment, house numbering, ration cards, and welfare schemes.",
    srv4Title: "Swachh Revuru & Sanitation",
    srv4Desc: "Daily waste collection, underground drain maintenance, LED street lighting, and green village drives.",
    tagContact: "Office Location",
    contactTitle: "Revuru Grama Panchayat Office",
    contactSub: "Contact the village secretariat for citizen documentation, queries, and grievance redressal.",
    cOfficeLabel: "Office Address:",
    cMailLabel: "Official Email:",
    cHoursLabel: "Office Hours:",
    cPhoneLabel: "Helpline:"
  }
};

let currentLang = 'te';

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  init3DEmblemStage();
  initLanguageToggle();
  initMobileMenu();
});

// Ambient Golden Canvas Particles
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
      this.size = Math.random() * 2.2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = -Math.random() * 0.45 - 0.15;
      this.alpha = Math.random() * 0.5 + 0.2;
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

  for (let i = 0; i < 35; i++) {
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

// 3D Parallax Tilt for Master Emblem
function init3DEmblemStage() {
  const stage = document.getElementById('emblem3DStage');
  const wrapper = document.getElementById('emblemWrapper');

  if (!stage || !wrapper) return;

  let bounds = stage.getBoundingClientRect();
  window.addEventListener('resize', () => {
    bounds = stage.getBoundingClientRect();
  });

  stage.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const xPct = (mouseX / bounds.width) - 0.5;
    const yPct = (mouseY / bounds.height) - 0.5;

    const rotX = -yPct * 22;
    const rotY = xPct * 26;
    const transZ = 20;

    wrapper.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${transZ}px)`;
  });

  stage.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });

  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const xPct = ((touch.clientX - bounds.left) / bounds.width) - 0.5;
      const yPct = ((touch.clientY - bounds.top) / bounds.height) - 0.5;
      wrapper.style.transform = `rotateX(${-yPct * 16}deg) rotateY(${xPct * 16}deg) translateZ(12px)`;
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
}

// Language Switcher (Telugu / English)
function initLanguageToggle() {
  const btn = document.getElementById('langToggleBtn');

  if (!btn) return;

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'te' ? 'en' : 'te';
    btn.innerHTML = currentLang === 'te' 
      ? '<span class="active-lang">తెలుగు</span> / <span>EN</span>' 
      : '<span>TE</span> / <span class="active-lang">EN</span>';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[currentLang] && I18N[currentLang][key]) {
        el.textContent = I18N[currentLang][key];
      }
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '74px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(6, 17, 5, 0.96)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--border-gold)';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }
}
