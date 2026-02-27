// Get all the sections and sidebar links
const sections = document.querySelectorAll(".profile-section");
const navLinks = document.querySelectorAll(".sidebar-links .nav-link");

// Create an observer that watches which section is on the screen
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If the section is currently in the viewport
      if (entry.isIntersecting) {
        // Remove 'active' class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Find the link that matches this section's ID and make it active
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(
          `.sidebar-links a[href="#${id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    // Triggers the update when the section hits the middle of the screen
    rootMargin: "-20% 0px -40% 0px",
  },
);

// Tell the observer to watch every section
sections.forEach((section) => {
  observer.observe(section);
});
