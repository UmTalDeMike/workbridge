document.addEventListener("DOMContentLoaded", function() {
    // Highlight active navigation link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        // Handle index.html specifically
        if ((currentPage === "" || currentPage === "index.html") && linkPage === "index.html") {
            link.classList.add("active");
        } else if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // --- Basic Interactivity --- 

    // Simulation Buttons (simulacoes.html)
    const simulationButtons = document.querySelectorAll(".simulation-start-btn");
    simulationButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Funcionalidade de simulação em desenvolvimento (Protótipo).");
        });
    });

    // Mentorship Buttons (mentoria.html)
    const mentorSearchBtn = document.querySelector(".mentorship-options .card:nth-child(1) button");
    if (mentorSearchBtn) {
        mentorSearchBtn.addEventListener("click", function() {
            alert("Funcionalidade de busca de mentores em desenvolvimento (Protótipo).");
        });
    }
    const offerMentorshipBtn = document.querySelector(".mentorship-options .card:nth-child(2) button");
    if (offerMentorshipBtn) {
        offerMentorshipBtn.addEventListener("click", function() {
            alert("Funcionalidade de cadastro de mentores em desenvolvimento (Protótipo).");
        });
    }

    // Certificate Buttons (certificados.html)
    const certificateDetailButtons = document.querySelectorAll(".certificates-list .button-primary");
    certificateDetailButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Visualização de detalhes do certificado em desenvolvimento (Protótipo).");
        });
    });

    // Shadowing Buttons (shadowing.html)
    const shadowingScheduleButtons = document.querySelectorAll(".shadowing-sessions .button-primary");
    shadowingScheduleButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Agendamento de sessão de shadowing em desenvolvimento (Protótipo).");
        });
    });

    // Ritual Buttons (rituais.html)
    const ritualDetailButtons = document.querySelectorAll(".rituals-list .button-primary");
    ritualDetailButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Visualização de detalhes do ritual em desenvolvimento (Protótipo).");
        });
    });
    const addRitualBtn = document.querySelector(".add-ritual-btn");
     if (addRitualBtn) {
        addRitualBtn.addEventListener("click", function() {
            alert("Funcionalidade de adicionar novo ritual em desenvolvimento (Protótipo).");
        });
    }

    // Profile Buttons (perfis.html)
    const editProfileBtn = document.querySelector(".my-profile .button-secondary");
    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", function() {
            alert("Funcionalidade de edição de perfil em desenvolvimento (Protótipo).");
        });
    }
    const searchMembersForm = document.querySelector(".find-members .search-form");
    if (searchMembersForm) {
        searchMembersForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent actual form submission
            alert("Funcionalidade de busca de membros em desenvolvimento (Protótipo).");
        });
    }

    console.log("WorkBridge script loaded and basic interactivity added.");
});

