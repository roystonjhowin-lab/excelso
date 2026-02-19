console.log("EXCELSO’26 Website Loaded Successfully!");

// ===============================
// RULES TOGGLE + CONFETTI + SPARKLES
// ===============================

const fireConfetti = () => {
    console.log("Confetti Celebration!");
    // If using canvas-confetti library:
    // confetti();
};

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

        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y + (Math.random() - 0.5) * 100;

        sparkle.animate([
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: `translate(${destinationX - x}px, ${destinationY - y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', (e) => {

        const rulesDiv = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);

        if (rulesDiv) {
            rulesDiv.style.display = isExpanded ? 'none' : 'block';
        }

        if (!isExpanded) {
            fireConfetti();
            createSparkles(e.pageX, e.pageY);
        }
    });
});


// ===============================
// SCROLL ANIMATION (Intersection Observer)
// ===============================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card, .fade-in').forEach(el => {
    observer.observe(el);
});


// ===============================
// COUNTDOWN TIMER (Bug-Free)
// ===============================

const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    const targetDate = new Date("March 7, 2026 08:30:00").getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "🎉 EXCELSO’26 HAS BEGUN!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `
            <strong>${days}</strong> Days 
            <strong>${hours}</strong> Hours 
            <strong>${minutes}</strong> Minutes
        `;
    }, 1000);
}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const {
            collegeName,
            collegePlace,
            facultyName,
            facultyContact,
            event,
            participants
        } = req.body;

        const participantDetails = participants.map((p, index) => `
            Participant ${index + 1}:
            Name: ${p.name}
            Contact: ${p.contact}
        `).join('\n');

        await resend.emails.send({
            from: 'EXCELSO <onboarding@resend.dev>',
            to: 'YOUR_EMAIL@gmail.com',
            subject: 'New EXCELSO’26 Registration',
            text: `
College: ${collegeName}
Location: ${collegePlace}

Faculty In-Charge:
Name: ${facultyName}
Contact: ${facultyContact}

Event: ${event}

${participantDetails}
            `
        });

        res.status(200).json({ message: 'Registration successful' });

    } catch (error) {
        res.status(500).json({ message: 'Error sending email' });
    }
}
