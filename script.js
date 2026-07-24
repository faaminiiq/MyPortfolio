document.addEventListener('DOMContentLoaded', function () {

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================
     0. TRANSLATIONS (EN <-> MS)
     ===================================================== */
  var translations = {
    en: {
      'nav.about': 'about.md',
      'nav.skills': 'skills.json',
      'nav.projects': 'projects/',
      'nav.education': 'education.log',
      'nav.contact': 'contact.sh',

      'hero.eyebrow': '~/portfolio $ init --student',
      'hero.subtitle': "Computing student & front-end developer building small, useful things — from career portals to browser games — for real Malaysian users.",
      'hero.btnView': 'View Projects',
      'hero.btnResume': 'Download Resume',

      'about.eyebrow': 'about.md',
      'about.heading': 'About Me',
      'about.p1': "I'm a computing student who enjoys turning coursework into projects that actually get used — whether that's a career-readiness portal for a group assignment, a resume builder for job hunting season, or a browser game just for fun. I care about clean interfaces, sensible layout, and code that's easy for the next person (often future-me) to read.",
      'about.labelBased': 'Based in',
      'about.labelField': 'Field',
      'about.valueField': 'Computing / Front-End Focus',
      'about.labelLearning': 'Currently learning',
      'about.valueLearning': 'React Native & API integrations',
      'about.labelOutside': 'Outside of code',
      'about.valueOutside': 'Listening Music, hobby web apps',

      'skills.eyebrow': 'skills.json',
      'skills.heading': 'Skills & Tools',
      'skills.catLanguages': 'Languages',
      'skills.catFrameworks': 'Frameworks & Libraries',
      'skills.catTools': 'Tools & Platforms',

      'projects.eyebrow': 'projects/',
      'projects.heading': 'Selected Projects',
      'project.careerpilot.desc': 'Career path & skill-readiness exploration portal built for a group project, with a skill quiz and radar-chart reports.',
      'project.resumecraft.desc': 'Fully responsive resume builder with multiple templates, local-storage persistence, and one-click PDF export.',
      'project.rps.desc': 'A rock-paper-scissors browser game with a football-league twist, built with a full Malay-language UI.',
      'project.dramalist.desc': 'A MyAnimeList-style app for tracking dramas, integrated with the TMDB API for live show data.',
      'repo.viewCode': 'View code',
      'repo.download': 'Download ZIP',

      'education.eyebrow': 'education.log',
      'education.heading': 'Education',
      'edu.spm.meta': 'S.M.K METHODIST ACS · MALAYSIA · COMPLETED',
      'edu.spm.desc': 'Coursework spanning front-end development, artificial intelligence, database systems, and computer networking.',
      'edu.diploma.meta': 'POLITEKNIK BALIK PULAU · MALAYSIA · COMPLETED',
      'edu.diploma.desc': 'HTML5, CSS3, JavaScript and Bootstrap 5 — semantic markup, responsive layout, and DOM-driven interactivity.',
      'edu.degree.meta': 'UNIVERSITI TEKNOLOGI MARA (UITM SHAH ALAM) · MALAYSIA · ONGOING',
      'edu.degree.desc': 'Expert systems, search algorithms, first-order predicate logic, and resolution refutation.',

      'contact.eyebrow': 'contact.sh',
      'contact.heading': 'Get In Touch',
      'contact.p': "Have a project, an opportunity, or just want to say hi? Send a message and I'll get back to you.",
      'form.labelName': 'name',
      'form.labelEmail': 'email',
      'form.labelMessage': 'message',
      'form.invalidName': 'Please enter your name.',
      'form.invalidEmail': 'Please enter a valid email.',
      'form.invalidMessage': 'Please enter a message.',
      'form.send': '$ send_message',
      'form.success': 'Message queued! (Connect this form to Formspree or EmailJS to actually send it.)',

      'footer.built': 'Built with Bootstrap 5',

      'controls.theme': 'Toggle theme',
      'controls.lang': 'Switch language',
      'controls.scrollTop': 'Scroll to top'
    },
    ms: {
      'nav.about': 'tentang.md',
      'nav.skills': 'kemahiran.json',
      'nav.projects': 'projek/',
      'nav.education': 'pendidikan.log',
      'nav.contact': 'hubungi.sh',

      'hero.eyebrow': '~/portfolio $ mula --pelajar',
      'hero.subtitle': 'Pelajar sains komputer & pembangun front-end yang membina projek kecil yang berguna — daripada portal kerjaya hingga permainan pelayar — untuk pengguna Malaysia sebenar.',
      'hero.btnView': 'Lihat Projek',
      'hero.btnResume': 'Muat Turun Resume',

      'about.eyebrow': 'tentang.md',
      'about.heading': 'Tentang Saya',
      'about.p1': 'Saya seorang pelajar sains komputer yang gemar mengubah tugasan kursus menjadi projek yang benar-benar digunakan — sama ada portal kesediaan kerjaya untuk tugasan kumpulan, pembina resume untuk musim mencari kerja, atau permainan pelayar sekadar untuk keseronokan. Saya mengutamakan antara muka yang bersih, susun atur yang munasabah, dan kod yang mudah dibaca oleh orang seterusnya (selalunya saya sendiri di masa hadapan).',
      'about.labelBased': 'Berlokasi di',
      'about.labelField': 'Bidang',
      'about.valueField': 'Komputeran / Fokus Front-End',
      'about.labelLearning': 'Sedang dipelajari',
      'about.valueLearning': 'React Native & integrasi API',
      'about.labelOutside': 'Di luar coding',
      'about.valueOutside': 'Mendengar muzik, aplikasi web hobi',

      'skills.eyebrow': 'kemahiran.json',
      'skills.heading': 'Kemahiran & Alatan',
      'skills.catLanguages': 'Bahasa Pengaturcaraan',
      'skills.catFrameworks': 'Rangka Kerja & Pustaka',
      'skills.catTools': 'Alatan & Platform',

      'projects.eyebrow': 'projek/',
      'projects.heading': 'Projek Terpilih',
      'project.careerpilot.desc': 'Portal penerokaan laluan kerjaya & kesediaan kemahiran yang dibina untuk projek kumpulan, dengan kuiz kemahiran dan laporan carta radar.',
      'project.resumecraft.desc': 'Pembina resume responsif sepenuhnya dengan pelbagai templat, simpanan local-storage, dan eksport PDF sekali klik.',
      'project.rps.desc': 'Permainan pelayar batu-gunting-kertas dengan gaya liga bola sepak, dibina dengan antara muka sepenuhnya dalam Bahasa Melayu.',
      'project.dramalist.desc': 'Aplikasi bergaya MyAnimeList untuk menjejak drama, disepadukan dengan API TMDB untuk data rancangan secara langsung.',
      'repo.viewCode': 'Lihat kod',
      'repo.download': 'Muat Turun ZIP',

      'education.eyebrow': 'pendidikan.log',
      'education.heading': 'Pendidikan',
      'edu.spm.meta': 'S.M.K METHODIST ACS · MALAYSIA · SELESAI',
      'edu.spm.desc': 'Kursus merangkumi pembangunan front-end, kecerdasan buatan, sistem pangkalan data, dan rangkaian komputer.',
      'edu.diploma.meta': 'POLITEKNIK BALIK PULAU · MALAYSIA · SELESAI',
      'edu.diploma.desc': 'HTML5, CSS3, JavaScript dan Bootstrap 5 — penanda semantik, susun atur responsif, dan interaktiviti berasaskan DOM.',
      'edu.degree.meta': 'UNIVERSITI TEKNOLOGI MARA (UITM SHAH ALAM) · MALAYSIA · SEDANG BERLANGSUNG',
      'edu.degree.desc': 'Sistem pakar, algoritma carian, logik predikat tertib pertama, dan resolusi refutasi.',

      'contact.eyebrow': 'hubungi.sh',
      'contact.heading': 'Hubungi Saya',
      'contact.p': 'Ada projek, peluang, atau sekadar mahu bertegur sapa? Hantar mesej dan saya akan hubungi anda semula.',
      'form.labelName': 'nama',
      'form.labelEmail': 'emel',
      'form.labelMessage': 'mesej',
      'form.invalidName': 'Sila masukkan nama anda.',
      'form.invalidEmail': 'Sila masukkan emel yang sah.',
      'form.invalidMessage': 'Sila masukkan mesej.',
      'form.send': '$ hantar_mesej',
      'form.success': 'Mesej dalam giliran! (Sambungkan borang ini ke Formspree atau EmailJS untuk menghantar sebenar.)',

      'footer.built': 'Dibina dengan Bootstrap 5',

      'controls.theme': 'Tukar tema',
      'controls.lang': 'Tukar bahasa',
      'controls.scrollTop': 'Kembali ke atas'
    }
  };

  var terminalLinesByLang = {
    en: [
      { prompt: '$ whoami', output: 'Mohamad Afiq Naimi' },
      { prompt: '$ cat role.txt', output: 'Computing student, Front-End focus' },
      { prompt: '$ ls skills/', output: 'html5  css3  javascript  bootstrap5  php  mysql' },
      { prompt: '$ echo "let\'s build something"', output: "let's build something" }
    ],
    ms: [
      { prompt: '$ whoami', output: 'Mohamad Afiq Naimi' },
      { prompt: '$ cat peranan.txt', output: 'Pelajar sains komputer, fokus Front-End' },
      { prompt: '$ ls kemahiran/', output: 'html5  css3  javascript  bootstrap5  php  mysql' },
      { prompt: '$ echo "mari bina sesuatu"', output: 'mari bina sesuatu' }
    ]
  };

  var THEMES = ['light', 'dark', 'terminal'];
  var THEME_ICONS = {
    light: 'bi-sun-fill',
    dark: 'bi-moon-stars-fill',
    terminal: 'bi-terminal-fill'
  };

  var currentLang = document.documentElement.getAttribute('lang') === 'ms' ? 'ms' : 'en';
  var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  if (THEMES.indexOf(currentTheme) === -1) currentTheme = 'light';

  /* =====================================================
     1. FOOTER YEAR
     ===================================================== */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* =====================================================
     2. i18n — APPLY TRANSLATIONS TO THE PAGE
     ===================================================== */
  function applyTranslations(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
        el.setAttribute('title', dict[key]);
      }
    });

    var langLabel = document.getElementById('langLabel');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'BM' : 'EN';
    }

    document.documentElement.setAttribute('lang', lang);
  }

  function setLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem('naimi-lang', lang); } catch (e) {}
    applyTranslations(lang);
    // Refresh the terminal content in the new language without retyping
    if (terminalBody) {
      if (typewriterFinished || prefersReducedMotion) {
        renderTerminalInstantly(terminalLinesByLang[lang] || terminalLinesByLang.en);
      }
    }
  }

  applyTranslations(currentLang);

  var langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      setLanguage(currentLang === 'en' ? 'ms' : 'en');
    });
  }

  /* =====================================================
     3. THEME TOGGLE (Light -> Dark -> Terminal -> Light)
     ===================================================== */
  var themeIcon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.className = 'bi ' + (THEME_ICONS[theme] || THEME_ICONS.light);
    }
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      var colors = { light: '#FAFAF8', dark: '#0D1117', terminal: '#050B05' };
      metaTheme.setAttribute('content', colors[theme] || colors.light);
    }
  }

  function setTheme(theme) {
    currentTheme = theme;
    try { localStorage.setItem('naimi-theme', theme); } catch (e) {}
    applyTheme(theme);
  }

  applyTheme(currentTheme);

  var themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var nextIndex = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
      setTheme(THEMES[nextIndex]);
    });
  }

  /* =====================================================
     4. TERMINAL TYPEWRITER EFFECT
     ===================================================== */
  var terminalBody = document.getElementById('terminalBody');
  var typewriterFinished = false;

  function renderTerminalInstantly(lines) {
    var html = '';
    lines.forEach(function (line) {
      html += '<div>' + line.prompt + '</div><div style="color:#7BE0C4;">' + line.output + '</div>';
    });
    terminalBody.innerHTML = html;
  }

  function typeWriter(lines) {
    var lineIndex = 0;
    var charIndex = 0;
    var currentText = '';
    var typingPrompt = true;

    function step() {
      if (lineIndex >= lines.length) {
        typewriterFinished = true;
        return;
      }

      var line = lines[lineIndex];
      var target = typingPrompt ? line.prompt : line.output;

      if (charIndex < target.length) {
        currentText += target.charAt(charIndex);
        charIndex++;
        renderCurrent(line, typingPrompt, currentText);
        setTimeout(step, 22);
      } else {
        if (typingPrompt) {
          typingPrompt = false;
          charIndex = 0;
          currentText = '';
          terminalBody.innerHTML += '<div class="term-line-output" style="color:#7BE0C4;"></div>';
          setTimeout(step, 200);
        } else {
          lineIndex++;
          typingPrompt = true;
          charIndex = 0;
          currentText = '';
          setTimeout(step, 300);
        }
      }
    }

    function renderCurrent(line, isPrompt, text) {
      if (isPrompt) {
        var promptDiv = terminalBody.querySelector('.term-line-prompt.current');
        if (!promptDiv) {
          promptDiv = document.createElement('div');
          promptDiv.className = 'term-line-prompt current';
          terminalBody.appendChild(promptDiv);
        }
        promptDiv.textContent = text;
        if (text.length === line.prompt.length) {
          promptDiv.classList.remove('current');
        }
      } else {
        var outputDiv = terminalBody.querySelector('.term-line-output.current');
        if (!outputDiv) {
          outputDiv = document.createElement('div');
          outputDiv.className = 'term-line-output current';
          outputDiv.style.color = '#7BE0C4';
          terminalBody.appendChild(outputDiv);
        }
        outputDiv.textContent = text;
        if (text.length === line.output.length) {
          outputDiv.classList.remove('current');
        }
      }
    }

    step();
  }

  if (terminalBody) {
    var initialLines = terminalLinesByLang[currentLang] || terminalLinesByLang.en;
    if (prefersReducedMotion) {
      renderTerminalInstantly(initialLines);
      typewriterFinished = true;
    } else {
      typeWriter(initialLines);
    }
  }

  /* =====================================================
     5. SCROLL REVEAL (IntersectionObserver)
     ===================================================== */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* =====================================================
     6. ACTIVE NAV LINK HIGHLIGHTING
     ===================================================== */
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.file-link');

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active-file');
      var href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('active-file');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* =====================================================
     7. CLOSE MOBILE NAV ON LINK CLICK
     ===================================================== */
  var navCollapseEl = document.getElementById('navContent');
  if (navCollapseEl) {
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapseEl);
        if (bsCollapse) {
          bsCollapse.hide();
        } else if (navCollapseEl.classList.contains('show')) {
          new bootstrap.Collapse(navCollapseEl).hide();
        }
      });
    });
  }

  /* =====================================================
     8. CONTACT FORM VALIDATION
     ===================================================== */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (contactForm.checkValidity() === false) {
        contactForm.classList.add('was-validated');
        formSuccess.classList.add('d-none');
        return;
      }

      contactForm.classList.add('was-validated');
      formSuccess.classList.remove('d-none');

      // NOTE: This form has no backend yet. To actually send messages,
      // connect it to a service like Formspree, EmailJS, or your own API.
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  /* =====================================================
     9. SCROLL TO TOP BUTTON
     ===================================================== */
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    function toggleScrollTopBtn() {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('is-visible');
      } else {
        scrollTopBtn.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleScrollTopBtn, { passive: true });
    toggleScrollTopBtn();

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

});