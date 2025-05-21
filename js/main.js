const menuToggle = document.querySelector('#menu-toggle');
const navbar = document.querySelector('.navbar');
const menuIcon = menuToggle.querySelector('i');
const overlay = document.querySelector('#overlay');
const skillItems = document.querySelectorAll('.skill-item');
const cards = document.querySelectorAll('.resume-card.clickable');

// Toggle dropdown menu
menuToggle.addEventListener('click', () => {
    menuIcon.classList.add('fade-out');

    setTimeout(() => {
        const isOpen = navbar.classList.toggle('active');

        if (isOpen) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        }

        menuIcon.classList.remove('fade-out');
    }, 200);
});

// Close menu when a nav link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.add('fade-out');

            setTimeout(() => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
                menuIcon.classList.remove('fade-out');
            }, 200);
        }
    });
});

// Optional: Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }
});

// ScrollReveal animations
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills, .projects-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.about-content, .project-card', { origin: 'right' });
ScrollReveal().reveal('.skills-grid', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.project-box', { origin: 'left', interval: 200 });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    } else {
      entry.target.classList.remove('animated'); // Reset when out of view
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% visible

skillItems.forEach(item => observer.observe(item));

cards.forEach(card => {
    card.addEventListener('click', () => {
        const wasOpen = card.classList.contains('open');

        // Close all other cards
        cards.forEach(c => c.classList.remove('open'));

        // Only open this card if it wasn’t already open
        if (!wasOpen) card.classList.add('open');
    });
});