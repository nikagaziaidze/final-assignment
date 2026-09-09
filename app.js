// HERO IMAGE SLIDER //

const heroImages = ["./images/profile1.jpeg", "./images/profile2.jpeg"];
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

// PROJECT FILTER

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    projectCards.forEach(function (project) {
      const projectCategory = project.dataset.category;

      if (selectedCategory === "all" || selectedCategory === projectCategory) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// TESTIMONIAL SLIDER

const testimonialSlides = document.querySelectorAll(".testimonial-slide");

const testimonialButtons = document.querySelectorAll(".testimonial-button");

function showTestimonial(index) {
  testimonialSlides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  testimonialButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  testimonialSlides[index].classList.add("active");

  testimonialButtons[index].classList.add("active");
}

testimonialButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const slideIndex = Number(button.dataset.slide);

    showTestimonial(slideIndex);
  });
});
// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const successModal = document.getElementById("successModal");

const modalClose = document.getElementById("modalClose");

const modalButton = document.getElementById("modalButton");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const data = {
    name: formData.get("name"),

    email: formData.get("email"),

    website: formData.get("website"),

    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const result = await response.json();

    console.log("Successfully sent:", result);

    contactForm.reset();

    successModal.classList.add("show");
  } catch (error) {
    console.error("Error:", error);

    alert("Something went wrong. Please try again.");
  }
});

// MODAL CLOSE

modalClose.addEventListener("click", function () {
  successModal.classList.remove("show");
});

modalButton.addEventListener("click", function () {
  successModal.classList.remove("show");
});

// მოდალის გარეთ დაჭერაც ხურავს

successModal.addEventListener("click", function (event) {
  if (event.target === successModal) {
    successModal.classList.remove("show");
  }
});
