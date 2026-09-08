// HERO IMAGE SLIDER //

const heroImages = [
  "./images/profile1.jpeg",
  "./images/profile2.jpeg",
  "./images/profile3.jpeg",
];
const heroImage = document.getElementById("heroImage");

let currentHeroImage = 0;

function changeHeroImage() {
  currentHeroImage++;

  if (currentHeroImage >= heroImages.length) {
    currentHeroImage = 0;
  }

  heroImage.src = heroImages[currentHeroImage];
}

setInterval(changeHeroImage, 5000);

// MOBILE MENU //

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("show");
});

// მენიუზე დაჭერის შემდეგ მენიუ დაიხუროს //

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("show");
  });
});

// ABOUT - PROGRESS BARS //

const aboutSection = document.getElementById("about");
const progressBars = document.querySelectorAll(".progress-bar");

let progressStarted = false;

function animateProgressBars() {
  const sectionPosition = aboutSection.getBoundingClientRect().top;

  const screenPosition = window.innerHeight * 0.75;

  if (sectionPosition < screenPosition && !progressStarted) {
    progressBars.forEach(function (bar) {
      const width = bar.dataset.width;

      bar.style.width = width + "%";
    });

    progressStarted = true;
  }
}

window.addEventListener("scroll", animateProgressBars);
