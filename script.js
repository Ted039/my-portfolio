

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.querySelector('.theme-toggle'); 

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('moon-icon').style.display = 'none';
        document.getElementById('sun-icon').style.display = 'block';
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            
            document.body.classList.toggle('dark-theme');

           
            const moonIcon = document.getElementById('moon-icon');
            const sunIcon = document.getElementById('sun-icon');

    
            if (document.body.classList.contains('dark-theme')) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
                localStorage.setItem('theme', 'dark');
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
                
                localStorage.setItem('theme', 'light');
            }
        });
    }

    
    const buttons = document.querySelectorAll('.view-details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
        });
    });

   
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.classList.remove('open');
        });
    });

    
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('open');
            }
        });
    });

    
    const githubLinks = document.querySelectorAll('.modal .github-link');
    githubLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            window.open(this.href, '_blank');
           
            modals.forEach(modal => {
                modal.classList.remove('open');
            });
        });
    });

    document.getElementById('typewriter').addEventListener('animationiteration', function () {
        const subTagline = document.getElementById('typewriter');
        subTagline.style.animation = 'none'; 
        subTagline.offsetHeight; 
        subTagline.style.animation = ''; 
    });

   
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');
    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});


document.querySelector('.sidebar-toggle-btn').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
});


