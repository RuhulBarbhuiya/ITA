// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Load Projects Dynamically
const projects = [
  { title: "Review Web Application", description: "A review website for all movies and tv shows.", link: "#" },
  { title: "Local Loom", description: "An Ecom App for local goods in Northeast", link: "#" },
];

const projectList = document.getElementById("projectList");
projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><a href="${p.link}" target="_blank">View Project</a>`;
  projectList.appendChild(div);
});

// Show Date/Time
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = `Current Time: ${now.toLocaleString()}`;
}
updateDateTime();
setInterval(updateDateTime, 60000);

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Scroll Navigation Highlight
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};
