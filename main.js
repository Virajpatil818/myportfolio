// Get all project buttons
const projectButtons = document.querySelectorAll('.project-button');

// Add a click event listener to each button
projectButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the project element that the button belongs to
    const project = event.target.parentElement;

    // Toggle the 'expanded' class on the project element
    project.classList.toggle('expanded');
  });
});