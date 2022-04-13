/*
* Dark Mode enabler
*/
const toggle = document.getElementById('toggle');
const theme = window.localStorage.getItem("theme");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the main body */
if (theme === "dark") document.getElementById("main").classList.add("dark");

// event listener stops when the change theme button is clicked
toggle.addEventListener("change", () => {
    document.getElementById("main").classList.toggle("dark-mode");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
});