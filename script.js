// Add animations using JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    const features = document.querySelectorAll(".feature");

    // Add animation to CTA button
    ctaButton.addEventListener("mouseover", function () {
        this.classList.add("cta-button-hover");
    });

    // Add animation to features on scroll
    window.addEventListener("scroll", function () {
        features.forEach((feature) => {
            const position = feature.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                feature.classList.add("feature-animate");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        easing: "ease-in-out", // Easing for animation
        once: true, // Only animate elements once
    });
});
