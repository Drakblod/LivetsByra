document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveals
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Header scroll background
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Quote Animation
    const quotes = [
        "Kärleken är det enda som blir större när vi slösar med den.",
        "Där ord tar slut, tar musiken vid.",
        "Livet mäts inte i andetag, utan i de ögonblick som tar andan ur oss.",
        "Ju vackrare minne, desto tyngre saknad. Men tacksamheten förvandlar plågan till en helig gåva."
    ];

    let quoteIndex = 0;
    const quoteElement = document.getElementById('quote-display');

    const updateQuote = () => {
        quoteElement.style.opacity = 0;

        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            quoteElement.textContent = `"${quotes[quoteIndex]}"`;
            quoteElement.style.opacity = 1;
        }, 1000);
    };

    // Initialize quote display
    quoteElement.style.opacity = 1;
    setInterval(updateQuote, 5000);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for nav links (existing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
