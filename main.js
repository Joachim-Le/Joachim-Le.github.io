document.addEventListener("DOMContentLoaded", function() {
    const introTitle = document.querySelector(".big-title");
    if (introTitle) {
        introTitle.style.opacity = 0;
        setTimeout(() => {
            introTitle.style.transition = "opacity 1s ease-in-out";
            introTitle.style.opacity = 1;
        }, 500);
    }
    
    const aboutMe = document.querySelector(".about-me");
    if (aboutMe) {
        aboutMe.style.opacity = 0;
        setTimeout(() => {
            aboutMe.style.transition = "opacity 1s ease-in-out";
            aboutMe.style.opacity = 1;
        }, 800);
    }
    
    const introText = document.querySelector(".intro-text");
    if (introText) {
        introText.style.opacity = 0;
        setTimeout(() => {
            introText.style.transition = "opacity 1s ease-in-out";
            introText.style.opacity = 1;
        }, 1000);
    }

    const projets = document.querySelector(".lesprojets");
    if (projets) {
        projets.style.opacity = 0;
        setTimeout(() => {
            projets.style.transition = "opacity 1s ease-in-out";
            projets.style.opacity = 1;
        }, 1400);
    }

    const projetsTitre = document.querySelector(".projet-title");
    if (projetsTitre) {
        projetsTitre.style.opacity = 0;
        setTimeout(() => {
            projetsTitre.style.transition = "opacity 1s ease-in-out";
            projetsTitre.style.opacity = 1;
        }, 300);
    }
    
    const projetsVideoDesc = document.querySelector(".projet-video-description");
    if (projetsVideoDesc) {
        projetsVideoDesc.style.opacity = 0;
        setTimeout(() => {
            projetsVideoDesc.style.transition = "opacity 1s ease-in-out";
            projetsVideoDesc.style.opacity = 1;
        }, 500);
    }
    
    const projetsContribution = document.querySelector(".contributions");
    if (projetsContribution) {
        projetsContribution.style.opacity = 0;
        setTimeout(() => {
            projetsContribution.style.transition = "opacity 1s ease-in-out";
            projetsContribution.style.opacity = 1;
        }, 700);
    }
});