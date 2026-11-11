const burgerBtn = document.getElementById("burgerBtn");
      const navLinks = document.getElementById("navLinks");
      burgerBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        burgerBtn.textContent = isOpen ? "✕" : "☰";
        burgerBtn.setAttribute("aria-expanded", isOpen);
      });
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          burgerBtn.textContent = "☰";
          burgerBtn.setAttribute("aria-expanded", "false");
        });
      });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.12 }
      );
      document
        .querySelectorAll("#programmes, #about, #evenements, #videos, #admissions, #contacts")
        .forEach((section) => {
          section.classList.add("reveal");
          observer.observe(section);
        });
      document.querySelectorAll("[data-marquee]").forEach((marquee) => {
        const track = marquee.querySelector(".marquee-track");
        marquee.addEventListener("touchstart", () => {
          track.style.animationPlayState = "paused";
        });
        marquee.addEventListener("touchend", () => {
          setTimeout(() => (track.style.animationPlayState = "running"), 1500);
        });
      });