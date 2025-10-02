document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            name: "Films Going",
            link: "projects/FilmsGoing/main.html",
            desc:""
        },
        {
            name: "OnLib",
            link: "projects/OneLib/main.html",
            desc:""
        },
        {
            name: "OnlineMath",
            link: "projects/OnlineMath/main.html",
            desc:""
        },
        {
            name: "TripPlanner",
            link: "projects/TripPlanner/main.html",
            desc:""
        },
        {
            name: "Your Beauty",
            link: "projects/Your Beauty/main.html",
            desc:""
        },
        {
            name: "Витрина проектов",
            link: "projects/showcase_of_projects/main.html",
            desc:""
        },
        {
            name: "YapApp",
            link: "projects/YapApp/main.html",
            desc:""
        },
        {
            name: "CRM",
            link: "projects/CRM/main.html",
            desc:""
        }

        
    ];

    // сортировка по алфавиту
    projects.sort((a, b) => a.name.localeCompare(b.name));

    const container = document.getElementById("projects-list");

    // вывод проектов в список
    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card"; // класс берём из твоего стиля
        card.innerHTML = `
            <h2>${p.name}</h2>
            <p>${p.desc}</p>
            <a href="${p.link}">Открыть</a>
        `;
        container.appendChild(card);
    });

    // ==========================
    // ПОИСК ПРОЕКТА
    // ==========================
    const searchBtn = document.getElementById("searchBtn");
    const searchDialog = document.getElementById("searchDialog");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // открыть диалог поиска
    searchBtn.addEventListener("click", () => {
        searchDialog.showModal();
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchInput.focus();
    });

    // поиск при вводе
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.length > 0) {
            const filtered = projects.filter(p => p.name.toLowerCase().includes(query));

            if (filtered.length > 0) {
                filtered.forEach(p => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="${p.link}">${p.name}</a>`;
                    searchResults.appendChild(li);
                });
            } else {
                searchResults.innerHTML = "<li>Ничего не найдено</li>";
            }
        }
    });
});
