const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
});

const skillBars = document.querySelectorAll(".skill-progress");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress + "%";
  });
};

const skillsSection = document.querySelector(".skills");

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

const revealElements = document.querySelectorAll(
  ".about-content, .skill-card, .project-card, .contact-content",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  revealObserver.observe(el);
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất có thể. 🙏");
    contactForm.reset();
  });
}
