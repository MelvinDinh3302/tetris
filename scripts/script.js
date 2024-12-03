document.addEventListener("DOMContentLoaded", () => {
  // Get all the nav items and links
  const navItems = document.querySelectorAll("nav ul li");
  const links = document.querySelectorAll(".links a");

  // Add click event to each nav item
  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      // Remove the glow class from all links
      links.forEach((link) => link.classList.remove("highlight"));

      // Add the glow class to the corresponding link
      if (links[index]) {
        links[index].classList.add("highlight");
      }
    });
  });
});

