function calculateDuration(startDate, endDate = new Date()) {
	const start = new Date(startDate);
	const end = new Date(endDate);

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() + 1 - start.getMonth(); // +1 because we have to count the current month

	if (months < 0) {
		years--;
		months += 12;
	}

	return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".date").forEach((element) => {
		const startDate = element.getAttribute("data-start");
		const endDate = element.getAttribute("data-end") || new Date().toISOString().split("T")[0];

		const formattedStartDate = new Date(startDate).toLocaleString("default", { month: "short", year: "numeric" });
		const formattedEndDate = new Date(endDate) > new Date() ? "Present" : new Date(endDate).toLocaleString("default", { month: "short", year: "numeric" });

		const duration = calculateDuration(startDate, endDate);

		element.textContent = `${formattedStartDate} - ${formattedEndDate} · ${duration}`;
	});
});

function toggleMenu() {
	const nav = document.querySelector(".nav");
	const hamburgerIcon = document.querySelector(".hamburger i");

	nav.classList.toggle("show");

	if (nav.classList.contains("show")) {
		hamburgerIcon.classList.replace("fa-bars", "fa-times");
	} else {
		hamburgerIcon.classList.replace("fa-times", "fa-bars");
	}
}



document.addEventListener("DOMContentLoaded", () => {
	const fetchButton = document.getElementById("fetch-github-repos");

	if (fetchButton) {
		fetchButton.addEventListener("click", function () {
			fetch("https://api.github.com/users/toliveir4/repos")
				.then((response) => response.json())
				.then((repositories) => {
					localStorage.setItem("repositories", JSON.stringify(repositories));
					window.location.href = "repos.html";
				})
				.catch((error) => {
					console.error("Error fetching GitHub repositories:", error);
					alert("Failed to fetch repositories. Please try again later.");
				});
		});
	}
});
