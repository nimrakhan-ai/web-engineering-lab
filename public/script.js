
// Move aria-current="location" to the nav link whose section is in view.
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section[id]");
 
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" } // "in view" = near the middle of the screen
);
 
sections.forEach((section) => observer.observe(section));