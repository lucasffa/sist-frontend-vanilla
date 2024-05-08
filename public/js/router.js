// public/js/router.js
// Este roteamento é básico, e é bastante difícil de ser manutenido.
// A utilização de bibliotecas seria a melhor solução.
// A Vercel realiza o roteamento, e já deixei isso configurado em ROOT/vercel.json
document.addEventListener("DOMContentLoaded", () => {
    const routes = {
        "/": "/index.html",
        "/login": "/pages/login/index.html",
        "/triage": "/pages/triage/index.html"
    };

    const navigateTo = (path) => {
        window.history.pushState({}, path, window.location.origin + path);
        window.location.href = routes[path];
    };

    document.querySelectorAll("a[data-route]").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const path = this.getAttribute("data-route");
            navigateTo(path);
        });
    });

    const path = window.location.pathname;
    if (routes[path]) {
        navigateTo(path);
    }
});

