console.log("EXCSELSO’26 Website Loaded Successfully!");

// Rules toggle
document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const rulesDiv = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        if (rulesDiv.style.display === 'block') {
            rulesDiv.style.display = 'none';
        } else {
            rulesDiv.style.display = 'block';
        }
    });
});

// Animate event cards on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });
// Add this at the top of your script
const fireConfetti = () => {
    // This is a simplified logic; usually, you'd use a library like 'canvas-confetti'
    console.log("Confetti Celebration!"); 
    // If you use the library, use: confetti();
};

document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', () => {
        // Trigger confetti when they open the rules
        if(button.getAttribute('aria-expanded') === 'false') {
            fireConfetti();
        }
    });
});
document.querySelectorAll('.event-card').forEach(card => {
    observer.observe(card);
});
