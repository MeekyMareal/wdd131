const currentYear = new Date().getFullYear();

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Atlanta Georgia Temple",
        location: "Sandy Springs, Georgia, United States",
        dedicated: "1983, June 4",
        area: 4283,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
    },
    {
        templeName: "Winchester Virginia Temple",
        location: "Winchester, Virginia, United States",
        dedicated: "2025, August, 9",
        area: 22601,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/winchester-virginia-temple/winchester-virginia-temple-56021-main.jpg"
    },
    {
        templeName: "Lagos Nigeria Temple",
        location: "Ikoyi, Lagos, Nigeria",
        dedicated: "2025, May, 10",
        area: 101233,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577-main.jpg"
    },
];

function getYear(dateString) {
    const match = dateString.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
}

function createTempleCard(filteredTemples) {
    const parent = document.querySelector(".figure");
    if (!parent) return;
    parent.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `Location: ${temple.location}`;
        dedication.innerHTML = `Dedicated: ${temple.dedicated}`;
        area.innerHTML = `Size: ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        parent.appendChild(card); 
    });
}

createTempleCard(temples);

document.querySelector("#home")?.addEventListener("click", () => {
    createTempleCard(temples);
});

document.querySelector("#old")?.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

document.querySelector("#new")?.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => getYear(temple.dedicated) > 2000));
});

document.querySelector("#large")?.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

document.querySelector("#small")?.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;