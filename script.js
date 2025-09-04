
    // Smooth reveal on scroll
    const observers = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('show');
      });
    }, {threshold: 0.12});
    observers.forEach(o => io.observe(o));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact handler (demo - no backend)
    function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const status = document.getElementById('formStatus');
      status.textContent = 'Envoi simulé…';
      setTimeout(()=> {
        status.textContent = 'Message envoyé — merci !';
        document.getElementById('contactForm').reset();
      }, 900);
      return false;
    }

    // Pitch text to be read by voice
    const pitch = [
      "Bienvenue chez SDTech, Seynabou et Daouda Technologie.",
      "Nous sommes deux développeurs Full Stack passionnés par l'intelligence artificielle.",
      "Notre mission : concevoir des applications web et mobiles intelligentes, accessibles et utiles pour les entreprises et la société.",
      "Nous proposons du développement web et mobile, l'intégration d'outils d'IA, et l'accompagnement à la transformation digitale.",
      "Contactez-nous à SDTech arrobase gmail point com."
    ].join(' ');

    const playBtn = document.getElementById('playPitch');
    let speaking = false;
    let utterance;
    function speakPitch(){
      if(!('speechSynthesis' in window)){
        alert('Synthèse vocale non supportée dans ce navigateur.');
        return;
      }
      if(speaking){
        window.speechSynthesis.cancel();
        speaking = false;
        playBtn.textContent = '▶️ Écouter le pitch';
        return;
      }
      utterance = new SpeechSynthesisUtterance(pitch);
      // French male-like voice preference
      utterance.lang = 'fr-FR';
      utterance.rate = 1.0;
      // choose a male-ish voice if available
      const voices = window.speechSynthesis.getVoices();
      let chosen = voices.find(v => /fr.*(female|woman|femme)/i.test(v.name)) || voices.find(v => v.lang.startsWith('fr')) || voices[0];
      if (chosen) utterance.voice = chosen;
      utterance.onend = () => { speaking = false; playBtn.textContent = '▶️ Écouter le pitch'; };
      window.speechSynthesis.speak(utterance);
      speaking = true;
      playBtn.textContent = '⏸️ Arrêter';

      //choose female voice for fun
        // let chosen = voices.find(v => /fr.*(female|woman|femme)/i.test(v.name)) || voices.find(v => v.lang.startsWith('fr')) || voices[0];
    }
    playBtn.addEventListener('click', speakPitch);

    // download PDF (basic export using print)
    document.getElementById('downloadPdf').addEventListener('click', () => {
      // opens print dialog; user can save as PDF
      window.print();
    });

    // small accessibility: keyboard focus on CTA
    document.getElementById('btn-cta').addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      document.getElementById('name').focus();
    });


    // Script pour l'année du copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Script pour les animations de défilement
    function checkReveal() {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('show');
        }
      });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Script pour le bouton "Nous contacter"
    document.getElementById('btn-cta').addEventListener('click', function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
