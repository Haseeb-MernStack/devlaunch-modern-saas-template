// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "🌞" : "🌙";
});

// FAQ Accordion
const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// Testimonials Slider
const testimonials = [
    { text: "This template saved us weeks of work!", author: "Raja Faizan" },
    { text: "Clean, modern and easy to customize.", author: "Malik Ali" },
    { text: "Perfect for startups and developers.", author: "Hamza Khan" },
];

let index = 0;

setInterval(() => {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonialText").textContent =
        testimonials[index].text;
    document.getElementById("testimonialAuthor").textContent =
        "- " + testimonials[index].author;
}, 4000);
