console.log("EXCSELSO’26 Aquatic Website Loaded Successfully!");
// Move to Step 2
function nextStep() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

// Generate participant fields
function updateParticipants(checkbox) {

  const eventDiv = document.getElementById(checkbox.value);
  eventDiv.innerHTML = "";

  if (checkbox.checked) {

    let participantCount = 1;

    // Events with 2 participants
    if (
      checkbox.value === "UpsideDown Abyss" ||
      checkbox.value === "Sunken Strategy Quest" ||
      checkbox.value === "The Comeback Arena"
    ) {
      participantCount = 2;
    }

    for (let i = 1; i <= participantCount; i++) {

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.name = `${checkbox.value}_participant${i}_name`;
      nameInput.placeholder = `Participant ${i} Name`;
      nameInput.required = true;

      const phoneInput = document.createElement("input");
      phoneInput.type = "tel";
      phoneInput.name = `${checkbox.value}_participant${i}_phone`;
      phoneInput.placeholder = `Participant ${i} Contact Number`;
      phoneInput.required = true;

      eventDiv.appendChild(nameInput);
      eventDiv.appendChild(phoneInput);
    }
  }
}
