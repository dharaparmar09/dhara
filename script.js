document.addEventListener("DOMContentLoaded", () => {
    
    // Header bounce animation
    const title = document.querySelector("header h1");
    title.style.transform = "scale(0.8)";
    title.style.opacity = "0";
    setTimeout(() => {
        title.style.transition = "0.8s ease";
        title.style.transform = "scale(1)";
        title.style.opacity = "1";
    }, 200);

    // Subtitle typing effect
    const text = "Created by Dhara";
    const subtitle = document.querySelector("header p");
    let index = 0;
    subtitle.textContent = "";
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 60);
        }
    }
    type();

    // Scroll animation for sections & skills
    const sections = document.querySelectorAll("section");
    
    function revealOnScroll() {
        sections.forEach((sec, i) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                setTimeout(() => {
                    sec.style.opacity = "1";
                    sec.style.transform = "translateY(0)";
                }, 150 * i);
            }
        });

        // Skill bars animation
        const skillBars = document.querySelectorAll(".skill-bar span");
        skillBars.forEach(bar => {
            const barRect = bar.getBoundingClientRect();
            if (barRect.top < window.innerHeight - 50) {
                bar.style.width = bar.getAttribute("data-width");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

});
