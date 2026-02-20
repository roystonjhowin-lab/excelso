const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextBtn = document.getElementById("nextBtn");
const form = document.getElementById("resendForm");
const message = document.getElementById("message");
const eventSelect = document.getElementById("eventSelect");
const participantsContainer = document.getElementById("participantsContainer");

// Step 1 → Step 2
nextBtn.addEventListener("click", function() {
    const college = document.getElementById("college").value.trim();
    const faculty = document.getElementById("faculty").value.trim();

    if (college === "" || faculty === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields before proceeding.";
        return;
    }

    message.textContent = "";
    step1.classList.remove("active");
    step2.classList.add("active");
});

// Generate Participants Fields
eventSelect.addEventListener("change", function() {

    participantsContainer.innerHTML = "";
    const count = parseInt(this.value);

    if (!count) return;

    for (let i = 1; i <= count; i++) {
        participantsContainer.innerHTML += `
            <div class="participant-box">
                <h4>Participant ${i}</h4>

                <div class="input-group">
                    <label>Name</label>
                    <input type="text" required>
                </div>

                <div class="input-group">
                    <label>Contact Number</label>
                    <input type="tel" required>
                </div>

                <div class="input-group">
                    <label>Email</label>
                    <input type="email" required>
                </div>
            </div>
        `;
    }
});

// Submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (eventSelect.value === "") {
        message.style.color = "red";
        message.textContent = "Please select an event.";
        return;
    }

    message.style.color = "#00f5ff";
    message.textContent = "Confirmation resent successfully! 🎉";

    form.reset();
    participantsContainer.innerHTML = "";
    step2.classList.remove("active");
    step1.classList.add("active");
});
