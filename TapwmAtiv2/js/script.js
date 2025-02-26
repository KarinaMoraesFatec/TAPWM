document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "🌙 Modo Escuro";
    toggleThemeBtn.id = "toggle-theme";
    document.body.appendChild(toggleThemeBtn);

    // Função para rolagem suave ao clicar nos links do menu
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste para compensar o menu fixo
                behavior: "smooth"
            });
        });
    });

    // Função para destacar o menu conforme a rolagem
    function highlightMenu() {
        let scrollPosition = window.scrollY + 100; // Ajuste para compensar o menu fixo

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                links.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);

    // Função para alternar entre modo escuro e claro
    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.textContent = "☀️ Modo Claro";
        } else {
            toggleThemeBtn.textContent = "🌙 Modo Escuro";
        }
    });
});
