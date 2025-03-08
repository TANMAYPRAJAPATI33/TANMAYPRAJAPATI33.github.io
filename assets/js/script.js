/* Updated JavaScript (script.js) */

/* Wrap all custom scripts in a DOMContentLoaded event to ensure elements are ready */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Section Fade-In Observer
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);  // stop observing once faded in (one-time animation) :contentReference[oaicite:19]{index=19}
      }
    });
  }, { threshold: 0.1 });  // trigger when at least 10% of section is visible (adjust as needed)

  // Observe all sections with class "fade-section"
  document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
  });

  // 2. Typing Effect for Intro (typewriter animation)
  const txt = "a Web Developer.";  // text to type out (example text)
  const speed = 100;               // typing speed in milliseconds per character
  let i = 0;
  function typeWriter() {
    const target = document.getElementById('typewriter-text');
    if (target && i < txt.length) {
      target.textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();  // start the typing effect on page load for intro :contentReference[oaicite:20]{index=20}

  // 3. Word Reveal Effect (appear one word at a time)
  document.querySelectorAll('.word-reveal').forEach(el => {
    // Split the element's text content into individual span.words
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';  // clear original text
    words.forEach(word => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word + ' ';  // add a space after each word
      el.appendChild(span);
    });
    // Reveal each word sequentially
    const spans = el.querySelectorAll('.word');
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, 200 * idx);  // stagger by 200ms per word (adjust for faster/slower)
    });
  });

  // 4. Parallax Floating Objects (mouse movement effect)
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.float-obj').forEach(obj => {
      const speed = parseFloat(obj.dataset.speed) || 1;
      // Calculate transform offset relative to center of screen
      const x = (window.innerWidth - e.pageX * speed) / 90;
      const y = (window.innerHeight - e.pageY * speed) / 90;
      obj.style.transform = `translate(${x}px, ${y}px)`;  // move the object :contentReference[oaicite:21]{index=21}
    });
  });

  // 5. Generate Starfield
  const starContainer = document.getElementById('stars');
  if (starContainer) {
    const numStars = 75;  // number of stars to create (adjust for density)
    for (let s = 0; s < numStars; s++) {
      const star = document.createElement('div');
      star.className = 'star';
      // random position within the container
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      // optional: random animation delay to stagger twinkles
      star.style.animationDelay = (Math.random() * 5) + 's';
      starContainer.appendChild(star);
    }
  }

});
