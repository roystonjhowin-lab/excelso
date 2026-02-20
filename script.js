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

// Dynamic Participants
const eventCheckboxes = document.querySelectorAll(".event-checkbox");
const container = document.getElementById("participantsContainer");

eventCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", generateParticipants);
});

function generateParticipants() {
  container.innerHTML = "";

  eventCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      let count = 0;

      if (
        checkbox.value === "Upside Down Abyss" ||
        checkbox.value === "Comeback Arena" ||
        checkbox.value === "Sunken Strategy Quest"
      ) {
        count = 2;
      } else if (
        checkbox.value === "Aquavengers" ||
        checkbox.value === "Timeless Tides"
      ) {
        count = 1;
      }

      let html = `<h3>${checkbox.value}</h3>`;

      for (let i = 1; i <= count; i++) {
        html += `
          <input type="text" name="${checkbox.value} Participant ${i} Name" required placeholder="Participant ${i} Name">
          <input type="tel" name="${checkbox.value} Participant ${i} Contact" required placeholder="Participant ${i} Contact Number">
        `;
      }

      container.innerHTML += html;
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);
  
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
html {
  height: 100%;
}

body {
  margin: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: space-around;
}

body,
.example h1,
.example p,
.example .button {
  transition: all .2s ease-in-out;
}

body.light-theme {
  background-color: #151515;
}

body.light-theme .example h1 {
  color: #FFFFFF;
}

body.light-theme .example p {
  color: #FFFFFF;
}

body.light-theme .buttons .button {
  color: #FFFFFF;
  border-color: #FFFFFF;
}

body.light-theme .buttons .button:hover {
  color: #151515;
  background-color: #FFFFFF;
}

.example {
  font-family: 'Roboto', sans-serif;
  width: 550px;
  height: 378px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

.example .flipdown {
  margin: auto;
}

.example h1 {
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  margin-top: 0;
  margin-bottom: 10px;
}

.example p {
  text-align: center;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 35px;
}

.example .buttons {
  width: 100%;
  height: 50px;
  margin: 50px auto 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.example .buttons p {
  height: 50px;
  line-height: 50px;
  font-weight: 400;
  padding: 0px 25px 0px 0px;
  color: #333;
  margin: 0px;
}

.example .button {
  display: inline-block;
  height: 50px;
  box-sizing: border-box;
  line-height: 46px;
  text-decoration: none;
  color: #333;
  padding: 0px 20px;
  border: solid 2px #333;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all .2s ease-in-out;
}

.example .button:hover {
  background-color: #333;
  color: #FFF;
}

.example .button i {
  margin-right: 5px;
}

@media(max-width: 550px) {
  .example {
    width: 100%;
    height: 362px;
  }

  .example h1 {
    font-size: 2.5em;
  }

  .example p {
    margin-bottom: 25px;
  }

  .example .buttons {
    width: 100%;
    margin-top: 25px;
    text-align: center;
    display: block;
  }

  .example .buttons p,
  .example .buttons a {
    float: none;
    margin: 0 auto;
  }

  .example .buttons p {
    padding-right: 0px;
  }

  .example .buttons a {
    display: inline-block;
  }
}
