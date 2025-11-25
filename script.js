/* CUSTOMS PAGE SCRIPT */

if (document.body.classList.contains("customspage")) {

    // Fade on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hide');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.classList.add('hide');
        appearOnScroll.observe(fader);
    });

    // Lightbox
    const zoomImages = document.querySelectorAll('.hanbok-item img, .bow-img img, .rites-image img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    zoomImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

}
    

/* HOMEPAGE SCRIPT */

if (document.body.classList.contains("homepage")) {

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Hero animation
    window.addEventListener("load", () => {
        const heroText = document.querySelector(".hero h2");
        const heroSub = document.querySelector(".hero p");

        if (heroText && heroSub) {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";

            setTimeout(() => {
                heroSub.style.opacity = "1";
                heroSub.style.transform = "translateY(0)";
            }, 500);
        }
    });

    // next page button
    function goNext() {
        window.location.href = "customs.html"; 
    }

    // expose globally
    window.goNext = goNext;
}
