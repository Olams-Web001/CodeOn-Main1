// change navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// Toggle FAQ answers on click
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active'); 
    });
});

// Highlight navbar link for the current page
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active-link');
    }
});

//Error Handling
try {
    lucide.createIcons();
} catch (error) {
    console.error('Error creating icons:', error);
}