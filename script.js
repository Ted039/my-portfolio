
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeToggle');
    
    
    const savedTheme = localStorage.getItem('theme');
    
   
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

const themeToggleButton = document.getElementById('theme-toggle');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function() {
        
        document.body.classList.toggle('dark-theme');

        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

const projectLinks = document.querySelectorAll('.project-link');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');
const githubLinks = document.querySelectorAll('.github-btn');


projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
      
        document.getElementById(`${projectId}Modal`).style.display = 'block';
    });
});


closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});


githubLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        window.open(this.href, '_blank');
        
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

    themeButton.addEventListener('click', () => {
        
        document.body.classList.toggle('dark-theme');

        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
