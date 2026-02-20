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
// Carnival Click Animation
document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', (e) => {
        createSparkles(e.pageX, e.pageY);
    });
});

function createSparkles(x, y) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        
        const size = Math.random() * 10 + 5;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.background = `gold`;
        sparkle.style.position = `absolute`;
        sparkle.style.borderRadius = `50%`;
        
        // Simple move animation
        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y + (Math.random() - 0.5) * 100;
        
        sparkle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${destinationX - x}px, ${destinationY - y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}
const targetDate = new Date("March 7, 2026 08:30:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    `<strong>${days}</strong> Days 
     <strong>${hours}</strong> Hours 
     <strong>${minutes}</strong> Minutes`;

}, 1000);
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
console.log("EXCELSO’26 Website Loaded Successfully!");
const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
let currentStep = 0;

function showStep(step) {
  steps.forEach((el, index) => {
    el.classList.toggle("active", index === step);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep++;
    showStep(currentStep);
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
  });
});

showStep(currentStep);

// ==============================
// MULTI STEP FORM
// ==============================
const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

function showStep(step) {
  steps.forEach((s, index) => {
    s.classList.remove("active");
    if (index === step) s.classList.add("active");
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// ==============================
// GENERATE PARTICIPANT FIELDS
// ==============================
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const container = document.getElementById("participantsContainer");

checkboxes.forEach(box => {
  box.addEventListener("change", () => {
    container.innerHTML = "";

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const count = parseInt(cb.dataset.count);
        const eventName = cb.value;

        const eventTitle = document.createElement("h3");
        eventTitle.textContent = eventName + " Participants";
        eventTitle.style.marginTop = "20px";
        container.appendChild(eventTitle);

        for (let i = 1; i <= count; i++) {

          const nameInput = document.createElement("input");
          nameInput.type = "text";
          nameInput.name = `${eventName} - Participant ${i} Name`;
          nameInput.placeholder = `Participant ${i} Name`;
          nameInput.required = true;

          const phoneInput = document.createElement("input");
          phoneInput.type = "tel";
          phoneInput.name = `${eventName} - Participant ${i} Contact`;
          phoneInput.placeholder = `Participant ${i} Contact Number`;
          phoneInput.required = true;

          container.appendChild(nameInput);
          container.appendChild(phoneInput);
        }
      }
    });
  });
});

// ==============================
// PREVENT MULTIPLE REGISTRATION
// ==============================
document.getElementById("registrationForm")
.addEventListener("submit", function(e){

  const college = document.querySelector('input[name="College Name"]').value.trim().toLowerCase();

  if(localStorage.getItem("registeredCollege") === college){
    alert("This college has already registered!");
    e.preventDefault();
    return;
  }

  localStorage.setItem("registeredCollege", college);
});
