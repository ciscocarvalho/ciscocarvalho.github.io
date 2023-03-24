const skillLogosContainers = document.getElementsByClassName(
  "skill-logos-container"
);

const learningLogosContainers = document.getElementsByClassName(
  "learning-logos-container"
);

[...skillLogosContainers, ...learningLogosContainers].forEach((container) => {
  console.log(container);
  container.childNodes.forEach((logo) => {
    logo.addEventListener("mouseover", () => {
      logo.className = logo.className + " colored";
    });

    logo.addEventListener("mouseout", () => {
      logo.className = logo.className.split(" ")[0];
    });
  });
});
