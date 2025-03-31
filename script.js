
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeToggle');
    
    
    const savedTheme = localStorage.getItem('theme');
    
   
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    
    themeButton.addEventListener('click', () => {
        
        document.body.classList.toggle('dark-theme');

        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
