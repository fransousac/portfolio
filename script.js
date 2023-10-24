document.getElementById("sobre-link").addEventListener("click", function() {
    scrollToSection("sobre");
});

document.getElementById("formacao-link").addEventListener("click", function() {
    scrollToSection("formacao");
});

document.getElementById("portfolio-link").addEventListener("click", function() {
    scrollToSection("portfolio");
});

document.getElementById("contato-link").addEventListener("click", function() {
    scrollToSection("contato");
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}