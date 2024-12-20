document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    const transitionTypes = {
        fade: (event) => {
            event.preventDefault();
            document.body.classList.add("transition-fade");
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 500); // Wait for transition to finish
        },
        slideLeft: (event) => {
            event.preventDefault();
            document.body.classList.add("transition-slide-left");
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 500); // Wait for transition to finish
        },
        slideRight: (event) => {
            event.preventDefault();
            document.body.classList.add("transition-slide-right");
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 500); // Wait for transition to finish
        },
        scale: (event) => {
            event.preventDefault();
            document.body.classList.add("transition-scale");
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 500); // Wait for transition to finish
        }
    };

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const transitionType = e.target.getAttribute("data-transition") || "fade"; // Default to fade
            transitionTypes[transitionType](e); // Apply selected transition
        });
    });
});