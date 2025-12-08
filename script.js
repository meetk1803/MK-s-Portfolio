document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    
    // --- Theme Toggle Logic ---
    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme');
    const themeIcon = themeToggle.querySelector('i');
    
    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    } else {
        // Default is light, icon is moon
        themeIcon.className = 'fas fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
        localStorage.setItem('theme', theme);
    });

    // --- Mobile Menu Toggle Logic ---
    menuToggle.addEventListener('click', () => {
        // 1. Toggle the 'active' class on the nav list to show/hide it
        navList.classList.toggle('active');
        
        // 2. Change the icon from bars <-> x
        const burgerIcon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            burgerIcon.classList.remove('fa-bars');
            burgerIcon.classList.add('fa-times'); // 'X' icon
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            burgerIcon.classList.remove('fa-times');
            burgerIcon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // 3. Close the mobile menu when a link is clicked
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                // Manually close the menu
                navList.classList.remove('active');
                
                // Reset the icon
                const burgerIcon = menuToggle.querySelector('i');
                burgerIcon.classList.remove('fa-times');
                burgerIcon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});