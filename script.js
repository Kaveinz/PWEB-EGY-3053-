document.addEventListener('DOMContentLoaded', function() {

    // --- Pemilihan Elemen ---
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.mobile-nav-trigger');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const allNavLinks = document.querySelectorAll('.desktop-nav a, .mobile-dropdown a');
    const sections = document.querySelectorAll('section[id]');

    // Logika untuk scrolled
    window.addEventListener('scroll', function() {
       
        header.classList.toggle('scrolled', window.scrollY > 50);
        highlightNavLinks();
    });

    // 2.logika dropdown
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileDropdown.classList.toggle('active');
    });

    // 3. logika dropdown
    mobileDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileDropdown.classList.remove('active');
        });
    });

    // 4. Logika highlight link
    function highlightNavLinks() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // --- form kontak ---
    const contactForm = document.querySelector('#kontak form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Terima kasih! Pesan Anda telah "dikirim".');
        contactForm.reset();
    });
});