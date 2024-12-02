jQuery(document).ready(function ($) {
  "use strict";
  // MENU CLICK TO OVERLAY AND SIDE MENU ACTIVE JS START
  let contributor_sidebar = document.querySelector(".contributor_sidebar");
  let menuIcon = document.querySelector(".menu_icon");
  let lines = Array.from(menuIcon.children);

  const main_navigation = document.querySelector(".contributor_sidebar");
  const overlay = document.querySelector(".overlay");
  const menus = document.querySelectorAll(".sidebar_menu li a");

  const handleClassName = {
    toggleClass: (selector, className) => selector.classList.toggle(className),
    addClass: (selector, className) => selector.classList.add(className),
    removeClass: (selector, className) => selector.classList.remove(className),
  };

  function toggleMenu() {
    lines.forEach((line) => {
      menuIcon.classList.toggle("active");
      line.classList.toggle("active");
      line.classList.toggle("no-animation");
    });
  }

  menuIcon.addEventListener("click", function () {
    handleClassName.toggleClass(main_navigation, "active");
    handleClassName.toggleClass(overlay, "active");
    toggleMenu();
  });
  overlay.addEventListener("click", function () {
    handleClassName.toggleClass(main_navigation, "active");
    handleClassName.toggleClass(overlay, "active");
    toggleMenu();
  });

  menus.forEach((item) => {
    item.addEventListener("click", function () {
      handleClassName.toggleClass(main_navigation, "active");
      handleClassName.removeClass(overlay, "active");
      toggleMenu();
    });
  });

    // SUBMENU ACTIVE START
    $(window).load(function() {
        $("#templyStockMenu li.active").prevAll().css("border-left", "1px solid #2D78FA");
        $("#creatiyaMenu li.active").prevAll().css("border-left", "1px solid #2D78FA");
    })
    // SUBMENU ACTIVE END
}); //JQuarry END===
