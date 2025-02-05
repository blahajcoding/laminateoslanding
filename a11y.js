setTimeout(function() {
    const element = document.querySelector('.centered-div');

    // Hide from screen readers initially
    element.setAttribute('aria-hidden', 'true');

    // Create a separate live region for controlled narration
    const liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "assertive");
    liveRegion.style.position = "absolute";
    liveRegion.style.left = "-9999px";
    document.body.appendChild(liveRegion);

    // Delay before making the element visible (prevents double reading)
    setTimeout(() => {
        element.removeAttribute('aria-hidden'); // Reveal only after page load
        liveRegion.textContent = "LaminateOS. " + element.textContent; // Forces narration
    }, 50);

    // Cleanup live region after narration
    setTimeout(() => liveRegion.remove(), 3000);
}, 1000);
