let mainMenu = document.getElementById("mainMenu");
let nav = document.getElementById("nav");
let menuBtn = document.getElementById("menuBtn");

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle("active");
    nav.classList.toggle("active");

    if (mainMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "menu"
    }
});

const projects = [
    {
        name: "Week 1 Project",
        info: "My favorite city",
        image: "images/wdd130/week01/favourite-city.webp",
        link: "https://meekymareal.github.io/wdd130/week01/favorite-city.html",
        course: "wdd130",
        week: 1,
    },
    {
        name: "Week 1 Project",
        info: "File path activity",
        image: "images/wdd130/week01/file-path.webp",
        link: "https://meekymareal.github.io/wdd130/week01/file-paths.html",
        course: "wdd130",
        week: 1,
    },
    {
        name: "Week 1 Project",
        info: "My first page",
        image: "images/wdd130/week01/my-first-page.webp",
        link: "https://meekymareal.github.io/wdd130/week01/first-page.html",
        course: "wdd130",
        week: 1,
    },
    {
        name: "Week 1 Project",
        info: "Image resolution",
        image: "images/wdd130/week01/image-resolution.webp",
        link: "https://meekymareal.github.io/wdd130/week01/images.html",
        course: "wdd130",
        week: 1,
    },
    {
        name: "Week 2 Project",
        info: "Basic Html structure",
        image: "images/wdd130/week02/basic-html-structure.webp",
        link: "https://meekymareal.github.io/wdd130/week02/basic-layout.html",
        course: "wdd130",
        week: 2,
    },
    {
        name: "Week 2 Project",
        info: "Block vs Inline",
        image: "images/wdd130/week02/block-vs-inline.webp",
        link: "https://meekymareal.github.io/wdd130/week02/block-vs-inline.html",
        course: "wdd130",
        week: 2,
    },
    {
        name: "Week 2 Project",
        info: "Box Model styling",
        image: "images/wdd130/week02/box-model.webp",
        link: "https://meekymareal.github.io/wdd130/week02/box-model-solution.html",
        course: "wdd130",
        week: 2,
    },
    {
        name: "Week 2 Project",
        info: "Temple basic cards structure",
        image: "images/wdd130/week02/temple.webp",
        link: "https://meekymareal.github.io/wdd130/week02/temple.html",
        course: "wdd130",
        week: 2,
    },
    {
        name: "Week 3 Project",
        info: "Float image css style",
        image: "images/wdd130/week03/float.webp",
        link: "https://meekymareal.github.io/wdd130/week03/float.html",
        course: "wdd130",
        week: 3,
    },
    {
        name: "Week 3 Project",
        info: "Overlay css practice",
        image: "images/wdd130/week03/overlay.webp",
        link: "https://meekymareal.github.io/wdd130/week03/overlay.html",
        course: "wdd130",
        week: 3,
    },
    {
        name: "Week 5 Project",
        info: "A simple poll form structure",
        image: "images/wdd130/week05/poll-form.webp",
        link: "https://meekymareal.github.io/wdd130/week05/poll-form.html",
        course: "wdd130",
        week: 5,
    },
    {
        name: "Week 5 Project",
        info: "A simple quiz html structure",
        image: "images/wdd130/week05/quiz-html.webp",
        link: "https://meekymareal.github.io/wdd130/week05/quiz.html",
        course: "wdd130",
        week: 5,
    },
    {
        name: "Week 6 Project",
        info: "First web homepage",
        image: "images/wdd130/week06/homepage.webp",
        link: "https://meekymareal.github.io/wdd130/wwr/index.html",
        course: "wdd130",
        week: 6,
    },
    {
        name: "Week 6 Project",
        info: "Contact of first web homepage",
        image: "images/wdd130/week06/contact.webp",
        link: "https://meekymareal.github.io/wdd130/wwr/contact.html",
        course: "wdd130",
        week: 6,
    },
    {
        name: "Week 6 Project",
        info: "About of first web homepage",
        image: "images/wdd130/week06/about.webp",
        link: "https://meekymareal.github.io/wdd130/wwr/about.html",
        course: "wdd130",
        week: 6,
    },
    {
        name: "Week 6 Project",
        info: "Trips of first web homepage",
        image: "images/wdd130/week06/trips.webp",
        link: "https://meekymareal.github.io/wdd130/wwr/trips.html",
        course: "wdd130",
        week: 6,
    },
    {
        name: "Week 7 Project",
        info: "Introductory index page",
        image: "images/wdd130/week07/index.webp",
        link: "https://meekymareal.github.io/wdd130/index.html",
        course: "wdd130",
        week: 7,
    },

    {
        name: "Week 1 Project",
        info: "Intro to basic layout.",
        image: "images/wdd131/week01/basic-layout.webp",
        link: "https://meekymareal.github.io/wdd131/week01/basic-layout.html",
        course: "wdd131",
        week: 1,
    },
    {
        name: "Week 2 Project",
        info: "CSS media query practice.",
        image: "images/wdd131/week02/media-query.webp",
        link: "https://meekymareal.github.io/wdd131/week02/media-query.html",
        course: "wdd131",
        week: 2,
    },
    {
        name: "Week 3 Project",
        info: "Good design principles",
        image: "images/wdd131/week03/design-principles.webp",
        link: "https://meekymareal.github.io/wdd131/week03/design.html",
        course: "wdd131",
        week: 3,
    },
    {
        name: "Week 4 Project",
        info: "Lazy Loading",
        image: "images/wdd131/week04/lazy-loading.webp",
        link: "https://meekymareal.github.io/wdd131/week04/lazyload.html",
        course: "wdd131",
        week: 4,
    },
    {
        name: "Week 4 Project",
        info: "Proficiency in html table",
        image: "images/wdd131/week04/table.webp",
        link: "https://meekymareal.github.io/wdd131/week04/table.html",
        course: "wdd131",
        week: 4,
    },
    {
        name: "Week 5 Project",
        info: "Proficiency in html forms",
        image: "images/wdd131/week05/forms.webp",
        link: "https://meekymareal.github.io/wdd131/week05/form-start/Form-start/index.html",
        course: "wdd131",
        week: 5,
    },
    {
        name: "Week 6 Project",
        info: "Introductory index page",
        image: "images/wdd131/week06/index.webp",
        link: "https://meekymareal.github.io/wdd131/index.html",
        course: "wdd131",
        week: 6,
    },
    {
        name: "Week 6 Project",
        info: "Media query proficiency",
        image: "images/wdd131/week06/place.webp",
        link: "https://meekymareal.github.io/wdd131/place.html",
        course: "wdd131",
        week: 6,
    },
    {
        name: "Week 6 Project",
        info: "Javascript arrays proficiency",
        image: "images/wdd131/week06/temple-sorting.webp",
        link: "https://meekymareal.github.io/wdd131/temples.html",
        course: "wdd131",
        week: 6,
    },
];

const list = document.getElementById("project-list");
const searchBox = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-button");

let currentCourse = localStorage.getItem("lastFilter") || "all";

filterButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.course === currentCourse);
});

const sorted = [...projects].sort((a, b) => b.week - a.week);

function showProjects() {
  const text = searchBox.value.toLowerCase();

  const filtered = sorted.filter((p) => {
    const matchesCourse =
      currentCourse === "all" || p.course === currentCourse;

    const matchesSearch =
      p.name.toLowerCase().includes(text) ||
      p.info.toLowerCase().includes(text) ||
      p.course.toLowerCase().includes(text) ||
      String(p.week).includes(text);

    return matchesCourse && matchesSearch;
  });

  if (filtered.length === 0) {
    list.innerHTML = "<p>No projects found.</p>";
    return;
  }

  list.innerHTML = filtered
    .map(
      (p) => `
      <a href="${p.link}" class="card" target="_blank">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="card-info">
          <h3>${p.name}</h3>
          <p>${p.info}</p>
          <span class="card-tag">${p.course.toUpperCase()} - Week ${p.week}</span>
        </div>
      </a>
    `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    
    currentCourse = button.dataset.course;
    localStorage.setItem("lastFilter", currentCourse);

    showProjects();
  });
});

searchBox.addEventListener("input", showProjects);

showProjects();

const visitText = document.getElementById("visit-text");

const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const days = Math.floor((Date.now() - Number(lastVisit)) / 86400000);
  if (days === 0) {
    visitText.textContent = "Welcome back, you last visited today!";
  } else {
    visitText.textContent = `Welcome back, you last visited ${days} day(s) ago.`;
  }
}

localStorage.setItem("lastVisit", Date.now());


function updateFooterYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

updateFooterYear();