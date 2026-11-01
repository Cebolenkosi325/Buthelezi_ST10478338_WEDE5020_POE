// script.js
// Small features that are used on every page

// 1. Shows which page the visitor is on, by marking its link in the menu
function highlightCurrentPage() {
    // the file name of the page, for example about.html
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    } else if (!currentPage.includes(".")) {
        currentPage = currentPage + ".html";
    }

    const menuLinks = document.querySelectorAll("nav a");

    for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].getAttribute("href") === currentPage) {
            menuLinks[i].classList.add("current-page");
            menuLinks[i].setAttribute("aria-current", "page");
        }
    }
}

// 2. Shows in the footer whether the bakery is open at this moment
function showOpeningStatus() {
    const footer = document.querySelector("footer");
    if (footer === null) {
        return;
    }

    const now = new Date();
    const day = now.getDay();                          // 0 is Sunday and 6 is Saturday
    const hour = now.getHours() + now.getMinutes() / 60;

    // opening and closing hour for today (the same hours as on the Contact page)
    let opens = 7;
    let closes = 18;

    if (day === 6) {
        closes = 16;
    } else if (day === 0) {
        opens = 8;
        closes = 14;
    }

    let message = "";
    if (hour >= opens && hour < closes) {
        message = "We are open now until " + closes + ":00.";
    } else {
        message = "We are closed now. See our opening hours on the Contact page.";
    }

    footer.innerHTML = footer.innerHTML + '<p id="openStatus">' + message + '</p>';
}

highlightCurrentPage();
showOpeningStatus();
