function hamburgerFunction() {
    const links = document.getElementById("myLinks");
    const toggle = document.querySelector(".topnav button");
    const expanded = toggle.getAttribute("aria-expanded") === "true";

    links.style.display = expanded ? "none" : "block";
    toggle.setAttribute("aria-expanded", String(!expanded));
}
