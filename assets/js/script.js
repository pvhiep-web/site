document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 80,
            duration: 800,
            easing: 'ease-out-cubic'
        });
    }

    // Nav Link Active State
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile Menu Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isFlex = navMenu.style.display === 'flex';
            if (isFlex) {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                // Inline styles for mobile glass drawer
                Object.assign(navMenu.style, {
                    position: 'absolute',
                    top: '80px',
                    left: '16px',
                    right: '16px',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    padding: '24px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    gap: '10px',
                    zIndex: '1001'
                });
            }
        });
    }

    // iOS Tab Switcher
    const tabs = document.querySelectorAll('.ios-tab');
    const panels = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Deactivate all
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => {
                    p.classList.remove('active');
                    p.classList.add('hidden');
                });

                // Activate clicked
                tab.classList.add('active');
                const targetId = tab.getAttribute('data-target');
                const targetPanel = document.querySelector(targetId);

                if (targetPanel) {
                    targetPanel.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => targetPanel.classList.add('active'), 10);
                }
            });
        });
    }
});
