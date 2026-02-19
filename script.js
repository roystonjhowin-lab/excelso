console.log("EXCELSO’26 Website Loaded Successfully!");

// ===============================
// RULES TOGGLE + CONFETTI + SPARKLES (MERGED)
// ===============================

document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', (e) => {

        const rulesDiv = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle aria
        button.setAttribute('aria-expanded', !isExpanded);

        // Toggle visibility using hidden attribute
        rulesDiv.hidden = isExpanded;

        // Trigger effects only when opening
        if (!isExpanded) {
            fireConfetti();
            createSparkles(e.pageX, e.pageY);
        }
    });
});

function fireConfetti() {
    console.log("🎉 Confetti Celebration!");
}

// ===============================
// SPARKLE EFFECT
// ===============================

function createSparkles(x, y) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        const size = Math.random() * 10 + 5;
        sparkle.style.cssText = `
            width:${size}px;
            height:${size}px;
            left:${x}px;
            top:${y}px;
            background:gold;
            position:absolute;
            border-radius:50%;
            pointer-events:none;
        `;

        const destinationX = (Math.random() - 0.5) * 100;
        const destinationY = (Math.random() - 0.5) * 100;

        sparkle.animate([
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: `translate(${destinationX}px,${destinationY}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// ===============================
// INTERSECTION OBSERVER (Only one animation system)
// ===============================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card').forEach(card => {
    observer.observe(card);
});

// ===============================
// COUNTDOWN TIMER (Safe Version)
// ===============================

const targetDate = new Date("March 7, 2026 08:30:00").getTime();
const countdownEl = document.getElementById("countdown");

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "🎉 EXCELSO’26 Has Begun!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownEl.innerHTML =
        `<strong>${days}</strong> Days 
         <strong>${hours}</strong> Hours 
         <strong>${minutes}</strong> Minutes`;

}, 1000);
