document
  .querySelectorAll(".skill-logos-container i, .learning-logos-container i")
  .forEach((logo) => {
    logo.addEventListener("mouseover", () => {
      logo.className = logo.className + " colored";
    });

    logo.addEventListener("mouseout", () => {
      logo.className = logo.className.split(" ")[0];
    });
  });
