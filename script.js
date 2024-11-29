const sections = [
  "education",
  "address-hobbies",
  "skills",
  "internship",
  "thank-you"
];

let currentSectionIndex = 0;

document.getElementById("next-button").addEventListener("click", () => {
  if (currentSectionIndex > 0) {
      document.getElementById(sections[currentSectionIndex - 1]).classList.add("hidden");
  }

  if (currentSectionIndex < sections.length) {
      document.getElementById(sections[currentSectionIndex]).classList.remove("hidden");
      currentSectionIndex++;
  }

  if (currentSectionIndex === sections.length) {
      document.getElementById("next-button").style.display = "none";
  }
});
