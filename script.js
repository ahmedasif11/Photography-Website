//navbar close functionality
document.getElementById("menuIcon").addEventListener("click", function (event) {
  event.stopPropagation();
  const navbar = document.getElementById("nav-list");
  const currentDisplay = window.getComputedStyle(navbar).display;
  navbar.style.display = currentDisplay === "none" ? "block" : "none";
  console.log("running 1");
});

document.addEventListener("click", function (event) {
  const navbar = document.getElementById("nav-list");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.querySelectorAll("#nav-list a");

  const menuIconVisible = window.getComputedStyle(menuIcon).display !== "none";

  if (
    !navbar.contains(event.target) &&
    event.target !== menuIcon &&
    !Array.from(navLinks).includes(event.target) &&
    menuIconVisible
  ) {
    navbar.style.display = "none";
  }
});

document.querySelectorAll("#nav-list a").forEach(function (link) {
  link.addEventListener("click", function () {
    const navbar = document.getElementById("nav-list");
    const menuIcon = document.getElementById("menuIcon");
    const menuIconVisible =
      window.getComputedStyle(menuIcon).display === "block";

    if (menuIconVisible) {
      navbar.style.display = "none";
    }
  });
});

//Image changing functionality
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "technique-1.jpeg",
  "technique-2.jpeg",
  "technique-3.jpeg",
  "technique-4.jpeg",
  "technique-5.jpeg",
  "technique-6.jpeg",
  "technique-7.jpeg",
  "technique-8.jpeg",
  "technique-9.jpeg",
  "technique-10.jpeg",
  "technique-11.jpeg",
];

const imageElement = document.getElementById("hero-img");

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const newImage = images[randomIndex];

  imageElement.style.transition = "opacity 1s ease-in-out";
  imageElement.style.opacity = 0.2;

  setTimeout(() => {
    imageElement.src = `./assets/${newImage}`;
    imageElement.style.opacity = 1;
  }, 1000);
}

setInterval(changeBackgroundImage, 3000);

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealTop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
