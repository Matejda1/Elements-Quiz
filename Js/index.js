let footerYear = document.getElementById("footer-year");

function loadYear() {
    let year = new Date().getFullYear();

    footerYear.textContent = year;
}

loadYear()