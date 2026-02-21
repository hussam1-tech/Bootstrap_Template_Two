const tabs = document.querySelectorAll(".portfolio .buttons button");
const imagesCols = document.querySelectorAll(".portfolio .row div");
window.onload = () => {
  const lazyImgs = document.querySelectorAll("img[data-src]");
  lazyImgs.forEach((img) => {
    img.src = img.getAttribute("data-src");
    img.removeAttribute("data-src");
  })
}
const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    })
    e.target.classList.add("active")
  })
})

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    imagesCols.forEach((col) => {
      console.log(tab.dataset.tab);
      console.log(col.dataset.tab);
      console.log(tab.dataset.tab === col.dataset.tab);
      if (tab.dataset.tab === col.dataset.tab || tab.dataset.tab === "all") {
        col.style.display = "block";
      } else {
        col.style.display = "none";
      }
    });
  });
});
const year = new Date().getFullYear();
const timeEl = document.getElementById("year");
timeEl.textContent = year;
timeEl.setAttribute("datetime", year);
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 2000) {
    document.getElementById("back-to-top").classList.add("d-flex");
  } else {
    if (document.getElementById("back-to-top").classList.contains("d-flex")) {
      document.getElementById("back-to-top").classList.remove("d-flex");
    }
  }
});
