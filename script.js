particlesJS("particles-js", {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#8b5cf6"   // Purple tone
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.35,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#a855f7",
      opacity: 0.35,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,       // Calm motion
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"    // Elegant hover
      },
      onclick: {
        enable: false
      }
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  },
  retina_detect: true
});


















const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
  
  
  
  
  
  document.getElementById("copyText").addEventListener("click", function () {
    const text = this.innerText;

    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Text copied!");
      })
      .catch(err => {
        console.error("Failed to copy", err);
      });
  });