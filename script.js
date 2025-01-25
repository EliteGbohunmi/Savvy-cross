function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
  document.querySelector("ul").classList.toggle("yh");
}

ScrollReveal().reveal(".full", {
  delay: 50,
  origin: "top",
  distance: "100px",
});
ScrollReveal().reveal(".coloredg", {
  delay: 100,
  origin: "top",
  distance: "100px",
});
ScrollReveal().reveal(".coloredo", {
  delay: 400,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".slide", {
  delay: 200,
  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(".first_slide", {
  delay: 400,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".one", {
  delay: 100,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".two", {
  delay: 200,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".three", {
  delay: 300,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".card", {
  delay: 700,
  origin: "bottom",
  distance: "100px",
});
