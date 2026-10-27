// ===== Happy Diwali 2026 — app.js =====

// ====== BOOKS DATA ======
const BOOKS = [
  {
    vol:1, title:"DIWALI GYAAN - VOL 1", theme:"दीपावली दर्शन", live:true,
    color:"linear-gradient(180deg,#5a2200,#1a0800)", topColor:"#f5a623",
    dohas:[
      ["दीप जले तो अँधेरा भागे, ज्ञान जले तो अज्ञान","जिसने खुद को रोशन कर लिया, उसने सब कुछ पा लिया"],
      ["घी की बाती, तेल की जोत, मन का दीपक जला","Happy Diwali 2026 — रोशनी का यह पावन त्यौहार"],
      ["दिवाली आई, दिवाली आई, रोशन हुआ जहान","ज्ञान का दीप जलाने वाला, वही है महान"],
      ["पटाखे फूटें, रौनक बढ़े, लक्ष्मी आएँ द्वार","मन में रोशनी रखने वाला, वो है सच्चा हकदार"],
      ["रंगोली सजाओ आँगन में, दीये जलाओ सौ","मन साफ रखो — Happy Diwali 2026 — बाकी सब होगा"],
    ]
  },
  {
    vol:2, title:"LAXMI KE POHE - VOL 2", theme:"समृद्धि दर्शन", live:true,
    color:"linear-gradient(180deg,#4a2800,#150a00)", topColor:"#ffd700",
    dohas:[
      ["लक्ष्मी वहाँ आती है जहाँ, मेहनत हो ईमानदार","2026 की दिवाली में — काम ही है आधार"],
      ["सोना चाँदी बाद में आए, पहले आत्मबल लाओ","जब मन का कोष भर जाए, तब धन को बुलाओ"],
      ["दीवाली पर लक्ष्मी पूजो, मन को भी पवित्र करो","पोहे बाँटो, खुशी स्वीकारो — Happy Diwali 2026"],
    ]
  },
  {
    vol:3, title:"FIREWORKS GYAN - VOL 3", theme:"उत्साह ग्रंथ", live:true,
    color:"linear-gradient(180deg,#3d1a00,#0f0600)", topColor:"#ff8c00",
    dohas:[
      ["पटाखे की तरह फूटो तुम, रोशनी बनकर बिखरो","Happy Diwali 2026 — डर को दिल से निकालो"],
      ["जोश हो अंदर आग का, बाहर हो मुस्कान","यही दिवाली, यही असली इनसान"],
      ["धमाके से डरना नहीं, रोशनी को गले लगाओ","अंधेरे की परवाह छोड़ो, नया सवेरा लाओ"],
    ]
  },
  {
    vol:4, title:"RANGOLI DARSHAN - VOL 4", theme:"सौंदर्य दर्शन", live:true,
    color:"linear-gradient(180deg,#4d1000,#130400)", topColor:"#c0392b",
    dohas:[
      ["रंगोली सजाई आँगन में, रंग भरे हज़ार","जीवन भी रंगोली जैसा — हर रंग है दरकार"],
      ["लाल, हरा, पीला, नीला — सब रंग मिलाओ","Happy Diwali 2026 — ऐसे ही जीवन को सजाओ"],
      ["एक रंग से रंगोली ना बने, चाहिए विविधता","इसी में है जीवन की सुंदरता"],
    ]
  },
  {
    vol:5, title:"MOKSHA DEEPAM - VOL 5", theme:"आध्यात्म", live:true,
    color:"linear-gradient(180deg,#2d1a00,#080400)", topColor:"#d4af37",
    dohas:[
      ["मोक्ष न मिले मंदिर से, न दीपों से पाओ","जब अपने भीतर झाँको — वहीं राम को पाओ"],
      ["दिवाली बाहर मनाते हो, भीतर भी जलाओ दीप","जो जागता है — Happy Diwali 2026 — उसे न आए नींद"],
      ["देह की मिट्टी दीया बने, आत्मा बने प्रकाश","Happy Diwali 2026 — हर दिन हो विकास"],
    ]
  },
  {vol:6, title:"DIWALI 2026 - VOL 6", theme:"आगामी", live:false, dohas:[]},
  {vol:7, title:"DIYA KA RAZ - VOL 7", theme:"आगामी", live:false, dohas:[]},
  {vol:8, title:"FESTIVAL VIBES - VOL 8", theme:"आगामी", live:false, dohas:[]},
  {vol:9, title:"GRAND FINALE - VOL 9", theme:"आगामी", live:false, dohas:[]},
];

const EXTRA_PHOTOS = Array.from({length:12}, (_, i) => {
  const emojis = ['🪔','🎆','🎇','✨','🏮','🙏','🌺','🪷','🎊','🌟','🔆','💫'];
  const caps = ['दीपावली की रोशनी','आतिशबाज़ी','रंगोली सजावट','दीये जलाए','लालटेन','पूजा','फूलों की सजावट','कमल दीप','जश्न','सितारों की रात','उजाला','Happy Diwali 2026'];
  return {id:i+1, emoji:emojis[i], cap:caps[i]};
});

// ====== SAFE DOM ELEMENT CREATOR ======
// Uses insertAdjacentHTML instead of template — avoids null firstElementChild bug
function makeEl(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  return wrapper.firstElementChild;
}

// ====================================================
// SOUND ENGINE — Web Audio API
// ====================================================
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playCracker(volume) {
  volume = volume || 0.7;
  try {
    var ctx = getAudioCtx();
    var buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.35), ctx.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2.5);
    }
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800 + Math.random() * 1200;
    var gain = ctx.createGain();
    gain.gain.value = volume;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch(e) {}
}

function playRocket() {
  try {
    var ctx = getAudioCtx();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(300, ctx.currentTime);
    o.frequency.linearRampToValueAtTime(1800, ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.45);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.45);
    setTimeout(function(){ playCracker(0.5); }, 420);
  } catch(e) {}
}

function playDiyaLight() {
  try {
    var ctx = getAudioCtx();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = 523.25;
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 1.2);
    var o2 = ctx.createOscillator();
    var g2 = ctx.createGain();
    o2.type = 'sine';
    o2.frequency.value = 783.99;
    g2.gain.setValueAtTime(0, ctx.currentTime);
    g2.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.05);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    o2.connect(g2);
    g2.connect(ctx.destination);
    o2.start();
    o2.stop(ctx.currentTime + 0.8);
  } catch(e) {}
}

function playBell() {
  try {
    var ctx = getAudioCtx();
    var freqs = [880, 1174.66, 1318.51, 1760];
    freqs.forEach(function(f, i) {
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      var t0 = ctx.currentTime + i * 0.06;
      g.gain.setValueAtTime(0.12, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 2.0);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + 2.0);
    });
  } catch(e) {}
}

// ====== AMBIENT MUSIC ======
var ambienceRunning = false;
var ambienceInterval = null;
var SCALE = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.26];

function playNote(freq, time, duration, vol, type) {
  vol = vol || 0.06;
  type = type || 'sine';
  try {
    var ctx = getAudioCtx();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(vol, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + duration);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(time);
    o.stop(time + duration);
  } catch(e) {}
}

function playMelodyPhrase() {
  try {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    var pattern = [0,2,4,5,4,2,1,0,2,4,5,7,5,4,2,1];
    var t = now;
    pattern.forEach(function(idx) {
      playNote(SCALE[idx % SCALE.length], t, 0.4, 0.07, 'triangle');
      playNote(SCALE[0] * 0.5, t, 0.45, 0.04, 'sine');
      t += 0.28;
    });
  } catch(e) {}
}

function startAmbience() {
  if (ambienceRunning) return;
  ambienceRunning = true;
  playMelodyPhrase();
  ambienceInterval = setInterval(function() {
    if (ambienceRunning) playMelodyPhrase();
  }, 5200);
}

function stopAmbience() {
  ambienceRunning = false;
  clearInterval(ambienceInterval);
  ambienceInterval = null;
}

function ambience(on) {
  if (on) startAmbience(); else stopAmbience();
}

// ====================================================
// FIREWORKS
// ====================================================
var fwCanvas = null;
var fwCtx = null;
var fireworksActive = false;
var fireworksRAF = null;
var particles = [];
var fireworkInterval = null;

function initCanvas() {
  fwCanvas = document.getElementById('fireworksCanvas');
  if (!fwCanvas) return;
  fwCtx = fwCanvas.getContext('2d');
  resizeCanvas();
  fwCanvas.addEventListener('click', function(e) {
    var rect = fwCanvas.getBoundingClientRect();
    spawnFirework(e.clientX - rect.left, e.clientY - rect.top);
  });
}

function resizeCanvas() {
  if (!fwCanvas) return;
  fwCanvas.width = window.innerWidth;
  fwCanvas.height = window.innerHeight;
}

function spawnFirework(x, y) {
  if (!fwCanvas) return;
  var cx = (x !== undefined && x !== null) ? x : Math.random() * fwCanvas.width;
  var cy = (y !== undefined && y !== null) ? y : Math.random() * fwCanvas.height * 0.6;
  var colors = ['#ffd700','#ff6b00','#ff0000','#ff69b4','#00ffff','#ffffff','#f5a623','#ff4500','#adff2f','#ff1493'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  var count = 60 + Math.floor(Math.random() * 50);
  for (var i = 0; i < count; i++) {
    var angle = (Math.PI * 2 / count) * i;
    var speed = 1.5 + Math.random() * 5;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1, color: color,
      size: 1.5 + Math.random() * 2.5,
      decay: 0.012 + Math.random() * 0.018,
      gravity: 0.055
    });
  }
  playRocket();
}

function animateFireworks() {
  if (!fwCtx) return;
  fwCtx.fillStyle = 'rgba(10,5,0,0.15)';
  fwCtx.fillRect(0, 0, fwCanvas.width, fwCanvas.height);
  for (var i = particles.length - 1; i >= 0; i--) {
    var p = particles[i];
    p.x += p.vx; p.y += p.vy;
    p.vy += p.gravity; p.vx *= 0.98;
    p.alpha -= p.decay;
    if (p.alpha <= 0) { particles.splice(i, 1); continue; }
    fwCtx.save();
    fwCtx.globalAlpha = p.alpha;
    fwCtx.beginPath();
    fwCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    fwCtx.fillStyle = p.color;
    fwCtx.shadowColor = p.color;
    fwCtx.shadowBlur = 10;
    fwCtx.fill();
    fwCtx.restore();
  }
  fireworksRAF = requestAnimationFrame(animateFireworks);
}

function startFireworks(duration) {
  duration = duration || 7000;
  if (fireworksActive) {
    // already running — just add more bursts
    spawnFirework();
    spawnFirework();
    return;
  }
  fireworksActive = true;
  resizeCanvas();
  animateFireworks();
  var count = 0;
  var maxBursts = Math.floor(duration / 500);
  fireworkInterval = setInterval(function() {
    spawnFirework();
    if (Math.random() > 0.4) spawnFirework();
    count++;
    if (count >= maxBursts) stopFireworks();
  }, 500);
}

function stopFireworks() {
  clearInterval(fireworkInterval);
  fireworkInterval = null;
  setTimeout(function() {
    if (fireworksRAF) { cancelAnimationFrame(fireworksRAF); fireworksRAF = null; }
    if (fwCtx) fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
    fireworksActive = false;
  }, 3500);
}

// Wire ALL elements with data-fireworks attribute
function initFireworkButtons() {
  // use querySelectorAll — works for multiple same-id or data attrs
  document.querySelectorAll('[id="fireworksBtn"], [data-fw]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      startFireworks(6000);
    });
  });
  // fireworksBtn2 if exists
  var fb2 = document.getElementById('fireworksBtn2');
  if (fb2) fb2.addEventListener('click', function() { startFireworks(6000); });
}

// ====================================================
// INTRO GATE
// ====================================================
function initIntro() {
  var gate = document.getElementById('introGate');
  if (!gate) return;

  if (localStorage.getItem('diwali_intro_viewed') === '1') {
    gate.classList.add('hide');
  }

  var enterBtn = document.getElementById('enterBtn');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      localStorage.setItem('diwali_intro_viewed', '1');
      gate.classList.add('hide');
      playBell();
      playDiyaLight();
      setTimeout(function() { startFireworks(7000); }, 300);
      setTimeout(function() { startAmbience(); }, 800);
    });
  }

  var replayBtn = document.getElementById('replayIntro');
  if (replayBtn) {
    replayBtn.addEventListener('click', function() {
      localStorage.removeItem('diwali_intro_viewed');
      gate.classList.remove('hide');
    });
  }
}

// ====================================================
// NAV — hide at top, show on scroll
// ====================================================
function initNav() {
  var nav = document.querySelector('.topnav');
  var ticker = document.getElementById('tickerBar');
  if (!nav) return;
  nav.style.transform = 'translateY(-120%)';
  nav.style.opacity = '0';
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.style.transform = y < 60 ? 'translateY(-120%)' : 'translateY(0)';
    nav.style.opacity = y < 60 ? '0' : '1';
  }
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
  if (ticker) {
    setTimeout(function() {
      ticker.style.transform = 'translateY(0)';
    }, 1500);
  }
}

// ====================================================
// BOOKSHELF
// ====================================================
function initShelf() {
  var row = document.getElementById('shelfRow');
  if (!row) return;

  BOOKS.forEach(function(b) {
    var d = document.createElement('div');
    d.className = 'spine ' + (b.live ? 'live' : 'soon');
    if (b.live) {
      d.setAttribute('role', 'button');
      d.setAttribute('tabindex', '0');
    }
    d.setAttribute('title', b.title + ' — ' + (b.live ? 'खोलने हेतु क्लिक करें' : 'शीघ्र आ रहा है'));
    d.style.background = b.color || '';
    if (b.live && b.topColor) d.style.borderTopColor = b.topColor;

    d.innerHTML = '<div class="vol">VOL.<br><b style="font-size:1.3rem">' + b.vol + '</b></div>'
      + '<div class="t">' + b.title + '</div>'
      + '<div style="font-size:.9rem">' + (b.live ? '🪔' : '🔒') + '</div>';

    if (b.live) {
      d.addEventListener('click', function() {
        playDiyaLight();
        openReader(b.vol);
      });
      d.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playDiyaLight();
          openReader(b.vol);
        }
      });
      d.addEventListener('mouseenter', function() {
        playDiyaLight();
      });
    }
    row.appendChild(d);
  });

  var coll = document.getElementById('collLine');
  if (coll) {
    var liveCount = BOOKS.filter(function(b){ return b.live; }).length;
    var totalDohas = BOOKS.filter(function(b){ return b.live; }).reduce(function(s,b){ return s + b.dohas.length; }, 0);
    coll.textContent = '🪔 Happy Diwali 2026 — ' + liveCount + ' Live Books • ' + (BOOKS.length - liveCount) + ' Coming Soon • ' + (totalDohas * 10) + '+ Diwali Dohe';
  }
}

// ====================================================
// READER
// ====================================================
var readerVol = 1;
var readerPage = 0;

function openReader(vol) {
  var b = null;
  for (var i = 0; i < BOOKS.length; i++) {
    if (BOOKS[i].vol === vol) { b = BOOKS[i]; break; }
  }
  if (!b || !b.live) return;
  readerVol = vol;
  readerPage = parseInt(localStorage.getItem('diwali_volume_page_idx') || '0', 10) || 0;
  if (readerPage >= b.dohas.length) readerPage = 0;
  renderReader(b);
  var r = document.getElementById('reader');
  if (r) r.classList.add('open');
  var titleEl = document.getElementById('readerTitle');
  if (titleEl) titleEl.textContent = 'Vol ' + b.vol + ' — ' + b.title + ' 🪔';
}

function renderReader(b) {
  var box = document.getElementById('readerPages');
  if (!box) return;
  var perPage = window.innerWidth >= 760 ? 2 : 1;
  box.classList.toggle('dual', perPage === 2);
  box.innerHTML = '';

  var arths = [
    'प्रकाश और ज्ञान एक ही हैं — Happy Diwali 2026!',
    'दीपावली हर दिन मनाओ — खुशी बाँटने से बढ़ती है।',
    'मेहनत और ईमानदारी से बड़ा कोई त्यौहार नहीं।',
    'रोशनी बाँटने से कम नहीं होती — और बढ़ती है।',
    'जो अंधेरे से नहीं डरता, वही असली रोशनी है।',
  ];

  for (var i = 0; i < perPage; i++) {
    var idx = (readerPage + i) % b.dohas.length;
    var d = b.dohas[idx];
    if (!d) continue;
    var article = document.createElement('article');
    article.className = 'page';
    article.innerHTML = '<h4>दोहा ' + (idx + 1) + ' / ' + b.dohas.length + ' • ' + b.theme + ' 🪔</h4>'
      + '<p class="doha">' + d[0] + ',<br>' + d[1] + ' ॥</p>'
      + '<p class="arth">अर्थ: ' + arths[idx % arths.length] + '</p>';
    box.appendChild(article);
  }

  var pageInfo = document.getElementById('pageInfo');
  if (pageInfo) pageInfo.textContent = 'पृष्ठ ' + (readerPage + 1) + ' / ' + b.dohas.length + ' • ← → से पलटें';
  localStorage.setItem('diwali_volume_page_idx', String(readerPage));
}

function initReader() {
  var r = document.getElementById('reader');
  if (!r) return;

  function closeReader() { r.classList.remove('open'); }

  var closeBtn = document.getElementById('readerClose');
  if (closeBtn) closeBtn.addEventListener('click', closeReader);

  r.addEventListener('click', function(e) {
    if (e.target === r) closeReader();
  });

  var prevBtn = document.getElementById('prevPage');
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      playDiyaLight();
      var b = BOOKS.filter(function(x){ return x.vol === readerVol; })[0];
      if (!b) return;
      readerPage = (readerPage - 1 + b.dohas.length) % b.dohas.length;
      renderReader(b);
    });
  }

  var nextBtn = document.getElementById('nextPage');
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      playDiyaLight();
      var b = BOOKS.filter(function(x){ return x.vol === readerVol; })[0];
      if (!b) return;
      readerPage = (readerPage + 1) % b.dohas.length;
      renderReader(b);
    });
  }

  document.addEventListener('keydown', function(e) {
    if (!r.classList.contains('open')) return;
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    if (e.key === 'Escape') closeReader();
  });

  // Music toggle inside reader
  var m = document.getElementById('musicToggle');
  function updateMusicLabel() {
    var on = localStorage.getItem('diwali_audio_state') === 'on';
    if (m) m.textContent = on ? '🔊 Music ON' : '🔇 Music OFF';
  }
  updateMusicLabel();
  if (m) {
    m.addEventListener('click', function() {
      var on = localStorage.getItem('diwali_audio_state') !== 'on';
      localStorage.setItem('diwali_audio_state', on ? 'on' : 'off');
      updateMusicLabel();
      ambience(on);
    });
  }
}

// ====================================================
// HOME MUSIC BUTTON
// ====================================================
function initMusicButtons() {
  // Handle ALL music toggle buttons on the page
  document.querySelectorAll('#musicToggleHome').forEach(function(btn) {
    function updateLabel() {
      var on = localStorage.getItem('diwali_audio_state') === 'on';
      btn.textContent = on ? '🔊 Music ON' : '🔇 Music OFF';
    }
    updateLabel();
    btn.addEventListener('click', function() {
      var on = localStorage.getItem('diwali_audio_state') !== 'on';
      localStorage.setItem('diwali_audio_state', on ? 'on' : 'off');
      updateLabel();
      ambience(on);
      if (on) playBell();
    });
  });
}

// ====================================================
// GALLERY
// ====================================================
function initGallery() {
  var g = document.getElementById('extraGal');
  if (!g) return;
  EXTRA_PHOTOS.forEach(function(p) {
    var btn = document.createElement('button');
    btn.setAttribute('aria-label', p.cap + ' — बड़ा देखें');
    btn.innerHTML = '<div class="ph">' + p.emoji + '</div><span>' + p.cap + '</span>';
    btn.addEventListener('click', function() {
      playDiyaLight();
      var dlg = document.getElementById('zoomDlg');
      var cap = document.getElementById('zoomCap');
      if (cap) cap.textContent = p.cap + ' — Happy Diwali 2026 🪔';
      if (dlg) dlg.showModal();
    });
    g.appendChild(btn);
  });
}

// ====================================================
// CONTACT FORM
// ====================================================
function initContact() {
  var f = document.getElementById('contactForm');
  if (!f) return;
  f.addEventListener('submit', function(e) {
    e.preventDefault();
    var n = f.name.value.trim();
    var em = f.email.value.trim();
    var msg = f.msg.value.trim();
    var ok = true;

    var eName = document.getElementById('e-name');
    var eEmail = document.getElementById('e-email');
    var eMsg = document.getElementById('e-msg');
    var status = document.getElementById('formStatus');

    if (eName) eName.textContent = n.length < 2 ? 'कृपया नाम लिखें (कम से कम 2 अक्षर)' : '';
    if (n.length < 2) ok = false;

    var emOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    if (eEmail) eEmail.textContent = emOk ? '' : 'सही ईमेल लिखें';
    if (!emOk) ok = false;

    if (eMsg) eMsg.textContent = msg.length < 10 ? 'संदेश कम से कम 10 अक्षर हो' : '';
    if (msg.length < 10) ok = false;

    if (!ok) { if (status) status.textContent = 'कृपया त्रुटियाँ सुधारें।'; return; }
    playBell();
    if (status) status.textContent = 'धन्यवाद! 🪔 Happy Diwali 2026 — ईमेल ऐप खुल रहा है…';
    location.href = 'mailto:hello@example.com?subject='
      + encodeURIComponent('Diwali 2026 — message from ' + n)
      + '&body=' + encodeURIComponent(msg + '\n— ' + n + ' ' + em);
  });
}

// ====================================================
// CLICK SPARKS (anywhere on page body)
// ====================================================
function initClickSparks() {
  document.addEventListener('click', function(e) {
    var tag = e.target.tagName;
    if (tag === 'BUTTON' || tag === 'A' || tag === 'INPUT' || tag === 'TEXTAREA') return;
    createSpark(e.clientX, e.clientY);
  });
}

function createSpark(x, y) {
  var emojis = ['✨','🪔','🎆','⭐','💫','🎇'];
  var em = emojis[Math.floor(Math.random() * emojis.length)];
  var s = document.createElement('span');
  s.textContent = em;
  s.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;pointer-events:none;z-index:9999;'
    + 'font-size:' + (1.2 + Math.random()).toFixed(1) + 'rem;'
    + 'animation:float-up .9s ease-out forwards;transform:translate(-50%,-50%);';
  document.body.appendChild(s);
  setTimeout(function(){ if(s.parentNode) s.parentNode.removeChild(s); }, 950);
}

// ====================================================
// RESIZE
// ====================================================
window.addEventListener('resize', function() {
  resizeCanvas();
  var r = document.getElementById('reader');
  if (r && r.classList.contains('open')) {
    var b = BOOKS.filter(function(x){ return x.vol === readerVol; })[0];
    if (b) renderReader(b);
  }
}, {passive: true});

// ====================================================
// INIT — runs when DOM is ready
// ====================================================
document.addEventListener('DOMContentLoaded', function() {
  initCanvas();
  initIntro();
  initNav();
  initShelf();
  initReader();
  initMusicButtons();
  initGallery();
  initContact();
  initFireworkButtons();
  initClickSparks();

  // Auto fireworks for returning visitors
  if (localStorage.getItem('diwali_intro_viewed') === '1') {
    setTimeout(function() {
      startFireworks(5000);
      if (localStorage.getItem('diwali_audio_state') === 'on') startAmbience();
    }, 2000);
  }
});
