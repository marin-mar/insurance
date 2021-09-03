/* test for support webp-background in css */
document.addEventListener("DOMContentLoaded", function () {
  testWebP(document.body);
});

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

  webP.onload = webP.onerror = function () {
    if (webP.height === 2) {
      elem.classList.add("webp");
    }
  };
}
/* burger menu */


const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    document.body.classList.toggle("--locked");
    menuIcon.classList.toggle("menu__icon--active");
    menuBody.classList.toggle("menu__body--active");
  });
}
/* smooth scroll */


const menulinks = document.querySelectorAll("[data-scrollTo]");

if (menulinks.length > 0) {
  menulinks.forEach(menuLink => {
    menuLink.addEventListener("click", function (e) {
      const scrollTo = e.target.dataset.scrollto;
      const scrollToBlock = document.querySelector(scrollTo);
      const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

      if (scrollTo && scrollToBlock) {
        e.preventDefault();
        window.scrollTo({
          top: scrollToBlockValue,
          behavior: "smooth"
        });
      }

      if (menuIcon.classList.contains("menu__icon--active")) {
        document.body.classList.remove("--locked");
        menuIcon.classList.remove("menu__icon--active");
        menuBody.classList.remove("menu__body--active");
      }
    });
  });
}
/* sticky header on scroll*/


const header = document.querySelector(".header");
const sticky = header.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};
/* star-rating on click */


const stars = document.querySelectorAll(".stars__star");
stars.forEach(star => {
  star.addEventListener("click", function (e) {
    const fillColor = e.target.getAttribute("fill");

    if (fillColor == "#666666") {
      e.target.setAttribute("fill", "#f3cd03");
    } else {
      e.target.setAttribute("fill", "#666666");
    }
  });
});
/* popup 404 for nonexistent links */

const nonexistentLinks = document.querySelectorAll('a[href="#"]');
const popupBg = document.querySelector(".popup404");
const popup = document.querySelector(".popup404__body");
const closePopupButton = document.querySelector(".popup404__close");
nonexistentLinks.forEach(nonexistentLink => {
  nonexistentLink.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.add("--locked");
    popupBg.classList.add("--active");
    popup.classList.add("--active");
  });
});
closePopupButton.addEventListener("click", () => {
  document.body.classList.remove("--locked");
  popupBg.classList.remove("--active");
  popup.classList.remove("--active");
});
document.addEventListener("click", e => {
  if (e.target === popupBg) {
    document.body.classList.remove("--locked");
    popupBg.classList.remove("--active");
    popup.classList.remove("--active");
  }
});