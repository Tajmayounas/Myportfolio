// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
const revealElements = document.querySelectorAll(".section, .hero-layout");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==============================
// NAVBAR ACTIVE LINK
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
// ===============================
// 3D TILT EFFECT (PREMIUM)
// ===============================
document.querySelectorAll(".tilt-3d").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `
            perspective(800px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(800px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });
});
