document.addEventListener("DOMContentLoaded", () => {
	const repositories = JSON.parse(localStorage.getItem("repositories")) || [];
	displayRepositories(repositories);
});

function displayRepositories(repos) {
	const reposList = document.getElementById("repos-list");
	reposList.innerHTML = "";

	repos.forEach((repo) => {
		const repoElement = document.createElement("div");
		repoElement.classList.add("repo-item");

		let repoHTML = `
			<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
			<p>${repo.description || "No description provided"}</p>
			<p><strong>Stars:</strong> ${repo.stargazers_count}</p>
		`;

		if (repo.archived) {
			repoHTML += `<span class="archived-tag">Archived</span>`;
		}

		repoElement.innerHTML = repoHTML;
		reposList.appendChild(repoElement);
	});
}

function filterRepositories() {
	const searchTerm = document.getElementById("search-bar").value.toLowerCase();
	const showArchived = document.getElementById("archived-filter").checked;
	const repositories = JSON.parse(localStorage.getItem("repositories"));

	const filteredRepos = repositories.filter((repo) => {
		const matchesSearch = repo.name.toLowerCase().includes(searchTerm);
		const matchesArchived = showArchived ? repo.archived === true : !repo.archived;

		return matchesSearch && matchesArchived;
	});

	displayRepositories(filteredRepos);
}

function sortRepositories() {
	const sortOption = document.getElementById("sort-options").value;
	let repositories = JSON.parse(localStorage.getItem("repositories"));

	repositories.sort((a, b) => {
		if (sortOption === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortOption === "stars") {
			return b.stargazers_count - a.stargazers_count;
		} else if (sortOption === "updated") {
			return new Date(b.updated_at) - new Date(a.updated_at);
		}
	});

	displayRepositories(repositories);
}

function goBack() {
	window.history.back();
}
