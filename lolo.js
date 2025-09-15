const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.querySelector('i').classList.toggle('fa-bars');
      menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
        navLinks.classList.remove("active");
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Active nav link
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thanks for your message! I\'ll get back to you soon.');
      this.reset();
    });
    // Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  const typewriterElement = document.getElementById('typewriter-text');
  const texts = [
    "A Creative Web Developer 🚀",
    "A School Scholar 📚", 
    "A Graphic Designer 🎨"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let deleteSpeed = 50;
  let pauseTime = 2000;

  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Delete text
      typewriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = deleteSpeed;
    } else {
      // Type text
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    // Check if current text is complete
    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex++;
      if (textIndex >= texts.length) textIndex = 0;
      typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
  }
  
  // Start the typewriter effect after a short delay
  setTimeout(typeWriter, 1000);
});