// Color Mode Toggle
const colorModeToggle = document.getElementById('colorModeToggle');
const body = document.body;
const colorModeIcon = colorModeToggle ? colorModeToggle.querySelector('i') : null;

if (colorModeToggle && colorModeIcon) {
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        body.classList.add('dark-mode');
        colorModeIcon.classList.remove('fa-moon');
        colorModeIcon.classList.add('fa-sun');
    }

    colorModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            colorModeIcon.classList.remove('fa-moon');
            colorModeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            colorModeIcon.classList.remove('fa-sun');
            colorModeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(filterBtn => {
            filterBtn.classList.remove('active');
            filterBtn.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        
        const filter = btn.getAttribute('data-filter');
        
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Duplicate project cards to make the marquee loop seamlessly.
const portfolioTrack = document.querySelector('.portfolio-track');
const portfolioSets = portfolioTrack ? portfolioTrack.querySelectorAll('.portfolio-set') : [];

if (portfolioSets.length === 2) {
    portfolioSets[0].querySelectorAll('.portfolio-item').forEach(item => {
        const image = item.querySelector('.portfolio-img img');
        const title = item.querySelector('h3');

        if (image && title) {
            image.loading = 'eager';

            const viewButton = document.createElement('button');
            viewButton.className = 'project-view-button';
            viewButton.type = 'button';
            viewButton.setAttribute('aria-label', `View ${title.textContent.trim()} image full screen`);
            viewButton.innerHTML = '<i class="fas fa-expand" aria-hidden="true"></i> View';
            item.querySelector('.portfolio-img').appendChild(viewButton);
        }

        const duplicate = item.cloneNode(true);
        const duplicateImage = duplicate.querySelector('.portfolio-img img');
        if (duplicateImage) {
            duplicateImage.loading = 'eager';
        }
        duplicate.querySelectorAll('.project-view-button').forEach(button => {
            button.setAttribute('tabindex', '-1');
        });
        portfolioSets[1].appendChild(duplicate);
    });
}

// Open project images in a full-screen dialog.
const projectViewer = document.getElementById('projectViewer');
const projectViewerImage = projectViewer ? projectViewer.querySelector('.project-viewer-image') : null;
const projectViewerCaption = projectViewer ? projectViewer.querySelector('.project-viewer-caption') : null;
const projectViewerClose = projectViewer ? projectViewer.querySelector('.project-viewer-close') : null;

if (portfolioTrack && projectViewer && projectViewerImage && projectViewerCaption && projectViewerClose) {
    const closeProjectViewer = () => {
        projectViewer.close();
        projectViewerImage.removeAttribute('src');
        projectViewerImage.alt = '';
        projectViewerCaption.textContent = '';
    };

    portfolioTrack.addEventListener('click', event => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const viewButton = target.closest('.project-view-button');
        const project = viewButton ? viewButton.closest('.portfolio-item') : null;
        const image = project ? project.querySelector('.portfolio-img img') : null;
        const title = project ? project.querySelector('h3') : null;

        if (!image || !title) return;

        projectViewerImage.src = image.currentSrc || image.src;
        projectViewerImage.alt = image.alt;
        projectViewerCaption.textContent = title.textContent.trim();
        projectViewer.showModal();
    });

    projectViewerClose.addEventListener('click', () => {
        closeProjectViewer();
    });

    projectViewer.addEventListener('click', event => {
        if (event.target === projectViewer) {
            closeProjectViewer();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && projectViewer.open) {
            event.preventDefault();
            closeProjectViewer();
        }
    });

    projectViewer.addEventListener('close', () => {
        projectViewerImage.removeAttribute('src');
        projectViewerImage.alt = '';
        projectViewerCaption.textContent = '';
    });
}

// Duplicate certificate cards to make the marquee loop seamlessly.
const certificateTrack = document.querySelector('.certificate-track');
const certificateSets = certificateTrack ? certificateTrack.querySelectorAll('.certificate-set') : [];

if (certificateSets.length === 2) {
    const originalCards = certificateSets[0].querySelectorAll('.certificate-card');

    originalCards.forEach(card => {
        const duplicate = card.cloneNode(true);
        duplicate.querySelectorAll('a').forEach(link => {
            link.setAttribute('tabindex', '-1');
        });
        certificateSets[1].appendChild(duplicate);
    });
}

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function showSlide(index) {
    if (!testimonialSlides.length || !testimonialDots.length) return;

    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    if (testimonialSlides[index]) {
        testimonialSlides[index].classList.add('active');
    }

    if (testimonialDots[index]) {
        testimonialDots[index].classList.add('active');
    }

    currentSlide = index;
}

if (testimonialDots.length) {
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

// Auto slide change
if (testimonialSlides.length && testimonialDots.length) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// // Form Submission
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;
    
//     // Here you would typically send the form data to a server
//     // For demonstration, we'll just log it and show an alert
//     console.log({ name, email, subject, message });
//     alert('Thank you for your message! I will get back to you soon.');
    
//     // Reset form
//     form.reset();
// });

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for skill animation
const aboutSection = document.getElementById('about');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

observer.observe(aboutSection);

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});