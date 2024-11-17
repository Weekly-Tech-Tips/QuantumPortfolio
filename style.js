// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Reveal elements on scroll
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

// Typing animation for header
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Parallax effect for header
const parallax = () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
};

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Skills progress animation
const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-badge');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add('animate');
        }, index * 100);
    });
};

// Form validation and animation
const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const txtElement = document.querySelector('.typing');
    const words = ['Developer', 'Programmer', 'Tech Enthusiast'];
    new TypeWriter(txtElement, words);

    // Initialize other animations
    parallax();
    window.addEventListener('scroll', revealOnScroll);
    animateSkills();

    // Add reveal classes to elements
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, button, .btn, .project-card, .skill-badge');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect for interactive elements
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor when it leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
}); 