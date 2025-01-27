const coupleImages = [
    "https://raw.githubusercontent.com/vtisa/img/refs/heads/main/img/pareja/1.jpg",
    "https://github.com/vtisa/img/blob/main/img/pareja/2.jpg?raw=true",
    "https://github.com/vtisa/img/blob/main/img/pareja/3.jpg?raw=true",
];

const existingCoupleSlider = document.getElementById("existing-couple-slider");

let coupleIndex = 0;

// Precarga las imágenes
coupleImages.forEach((src) => {
    const img = new Image();
    img.src = src;
});

function updateExistingCoupleSlider() {
    existingCoupleSlider.innerHTML = `
        <img src="${coupleImages[coupleIndex]}" alt="Couple Photo" loading="lazy">
    `;
    coupleIndex = (coupleIndex + 1) % coupleImages.length;
}

setInterval(updateExistingCoupleSlider, 2000);
updateExistingCoupleSlider();

const additionalImages = [
    "https://github.com/vtisa/img/blob/main/img/pareja/4.jpg?raw=true",
    "https://github.com/vtisa/img/blob/main/img/pareja/5.jpg?raw=true",
    "https://github.com/vtisa/img/blob/main/img/pareja/6.jpg?raw=true",
];

const additionalSlider = document.getElementById("additional-slider");

let additionalIndex = 0;

// Precarga las imágenes adicionales
additionalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
});

function updateAdditionalSlider() {
    additionalSlider.innerHTML = `
        <img src="${additionalImages[additionalIndex]}" alt="Additional Photo" loading="lazy">
    `;
    additionalIndex = (additionalIndex + 1) % additionalImages.length;
}

setInterval(updateAdditionalSlider, 2000);
updateAdditionalSlider();

const video = document.getElementById("weddingVideo");
let previewInterval;

function playPreview() {
    video.currentTime = 0;
    video.muted = true;
    video.play();

    previewInterval = setInterval(() => {
        if (video.currentTime >= 10) {
            video.currentTime = 0;
        }
    }, 500);
}

function play() {
    clearInterval(previewInterval);
    video.muted = false;
    video.loop = false;
    video.play();
}

function rewind() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 10;
}

window.addEventListener("load", () => {
    video.loop = false;
    playPreview();
});


const weddingDate = new Date("february 22, 2025 15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("countdownTimer").innerHTML = "¡Es el día!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const envelope = document.querySelector('.envelope');
    const invitation = document.querySelector('.invitation');

    // Evento para hacer desaparecer la pantalla de carga y mostrar la invitación
    envelope.addEventListener('click', () => {
        // Oculta la pantalla de carga
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 2000);
    });
});
