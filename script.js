document.addEventListener("DOMContentLoaded", () => {
  /* =========================
       MUSIC PLAYER
    ========================= */

  const music = document.getElementById("music");
  const musicButton = document.getElementById("musicButton");

  if (music && musicButton) {
    musicButton.addEventListener("click", () => {
      if (music.paused) {
        music
          .play()
          .then(() => {
            musicButton.classList.add("playing");
          })
          .catch(() => {
            console.log("Musik tidak dapat diputar.");
          });
      } else {
        music.pause();
        musicButton.classList.remove("playing");
      }
    });

    music.addEventListener("play", () => {
      musicButton.classList.add("playing");
    });

    music.addEventListener("pause", () => {
      musicButton.classList.remove("playing");
    });
  }

  /* =========================
       SMOOTH SCROLL
    ========================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* =========================
       SCROLL REVEAL
    ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("active");
    });
  }

  /* =========================
       TIMELINE ANIMATION
    ========================= */

  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
  });

  /* =========================
       HEART EFFECT
    ========================= */

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.addEventListener("click", (event) => {
      if (event.target.closest("a") || event.target.closest("button")) {
        return;
      }

      const heart = document.createElement("span");

      heart.className = "click-heart";

      heart.textContent = "♡";

      heart.style.left = `${event.clientX}px`;

      heart.style.top = `${event.clientY}px`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1200);
    });
  }

  /* =========================
       WEBSITE LOADED
    ========================= */

  document.body.classList.add("loaded");
});
