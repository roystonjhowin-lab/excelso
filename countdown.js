const targetDate = new Date("March 7, 2026 08:30:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        document.querySelector(".cinematic-countdown").innerHTML =
            "🔥🌊 EXCELSO’26 HAS BEGUN! 🌊🔥";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

}, 1000);
