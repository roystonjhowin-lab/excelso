console.log("EXCSELSO’26 Aquatic Website Loaded Successfully!");

// Rules Toggle
document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const rules = document.getElementById(button.getAttribute('aria-controls'));
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        rules.style.display = expanded ? 'none' : 'block';
        button.setAttribute('aria-expanded', !expanded);
    });
});

// Floating Treasure Hunt Coordinator Bubbles
const treasureHuntCoordinators = [
    {name:"Leesha Lobo", role:"Treasure Hunt Student", phone:"+919148502215"},
    {name:"Rohan Dsouza", role:"Treasure Hunt Student", phone:"+918453984299"},
    {name:"Mohammed Azman", role:"Treasure Hunt Student", phone:"+916360891633"},
];

treasureHuntCoordinators.forEach(coord => {
    const bubble = document.createElement('div');
    bubble.classList.add('coordinator-bubble');
    bubble.innerHTML = `<a href="tel:${coord.phone}" style="color:#004f7c;text-decoration:none"><strong>${coord.name}</strong><br>${coord.role}</a>`;
    document.body.appendChild(bubble);
    const x = Math.random() * window.innerWidth * 0.9;
    const y = Math.random() * window.innerHeight * 0.7;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
});

// Hero Floating Bubbles already handled by CSS animation
