const projectsToggle = document.querySelector('#projects-toggle');
const projects = document.querySelector('#projects');
const buttonLabel = projectsToggle.querySelector('.button-label');

projectsToggle.addEventListener('click', () => {
	const isExpanded = projectsToggle.getAttribute('aria-expanded') === 'true';

	projectsToggle.setAttribute('aria-expanded', String(!isExpanded));
	projectsToggle.classList.toggle('is-expanded', !isExpanded);
	projects.hidden = isExpanded;
	buttonLabel.textContent = isExpanded ? 'Voir mes projets' : 'Masquer mes projets';
});
