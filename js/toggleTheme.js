function toggleTheme() {
	const body = document.body;
	const themeToggle = document.getElementById("theme-toggle");

	if (themeToggle.checked) {
		body.classList.add("light-mode");
		body.classList.remove("dark-mode");
		localStorage.setItem("theme", "light");
	} else {
		body.classList.add("dark-mode");
		body.classList.remove("light-mode");
		localStorage.setItem("theme", "dark");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme");
	const themeToggle = document.getElementById("theme-toggle");
	if (savedTheme === "light") {
		document.body.classList.add("light-mode");
		themeToggle.checked = true;
	} else {
		document.body.classList.add("dark-mode");
	}
});
