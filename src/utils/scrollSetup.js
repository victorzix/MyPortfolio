import ScrollReveal from "scrollreveal";

export function scrollSetup() {
    const sr = ScrollReveal();
  
    sr.reveal(".reveal", {
      duration: 1000,
      distance: "20px",
      origin: "bottom",
      opacity: 0,
      scale: 1,
      easing: "ease-out",
    });
  
    sr.reveal(".reveal", {
      reset: true,
      viewOffset: {
        left: 30,
      },
    });
  }