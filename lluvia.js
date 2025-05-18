function startSunflowerRain() {
    const rainContainer = document.getElementById("rainContainer");
    const MAX_ELEMENTS = 12; // Ajusta este número según necesites

    function createSunflower() {
        // Verifica la cantidad actual de elementos
        if (rainContainer.children.length >= MAX_ELEMENTS) {
            return;
        }

        const sunflower = document.createElement("div");
        sunflower.className = "sunflower";
        sunflower.style.left = `${Math.random() * 100}vw`;
        sunflower.style.animationDuration = `${Math.random() * 2 + 3}s`;
        sunflower.style.opacity = Math.random() * 0.8 + 0.2;
        rainContainer.appendChild(sunflower);

        sunflower.addEventListener("animationend", () => {
            sunflower.remove();
        });
    }

    setInterval(createSunflower, 500);
}

// Inicia la lluvia de anillos al cargar la página
startSunflowerRain();
