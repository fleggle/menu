const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Show the initial section
sections[0].classList.add('active');

// Add event listeners to navigation links
navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Remove the active class from all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    // Add the active class to the clicked section
    sections[index].classList.add('active');
  });
});
function toggleActiveClass(clickedLink) {
    // Remove the "active" class from all navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Add the "active" class to the clicked link
    clickedLink.classList.add('active');
  }
  
  function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
  
    // Show the selected section
    const selectedSection = document.querySelector(`#${section}`);
    selectedSection.classList.add('active');
  }
  