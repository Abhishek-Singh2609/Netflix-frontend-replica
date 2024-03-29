const faqboxes = document.querySelectorAll(".faqbox");

faqboxes.forEach((faqbox) => {
  faqbox.addEventListener("click", () => {
    faqbox.classList.toggle("active");
  });
});
