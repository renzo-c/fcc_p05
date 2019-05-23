/* ---- Start particles.js  ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#969494"
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#969494",
      opacity: 0.4,
      width: 1
    }
  }
});
/* ---- End particles.js  ---- */

$(document).ready(function() {
  var viewportHeight = $(window).height();
  var viewportWidth = $(window).width();
  $("header").css({ height: viewportHeight });

  /* changing AOS effect to avoid extra margin in small screens */
  if (viewportWidth >= 715) {
    $(".about-details").attr("data-aos", "fade-right");
    $(".experience-bar").attr("data-aos", "fade-left");
  }

  /* hold navbar to the top */
  $(window).scroll(function() {
    console.log("viewportHeight", viewportHeight);
    console.log("$(window).scrollTop()", $(window).scrollTop());
    if ($(window).scrollTop() + 3 > viewportHeight && viewportWidth > 715) {
      $("nav#navbar").removeAttr("id");
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").attr("id", "navbar");
      $("nav").removeClass("sticky-nav");
    }
  });
  /* ---- End nav fixing  ---- */

  /* ---- Start Scroll to Top  ---- */

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2
    );
  });
  /* ---- End Scroll to Top  ---- */

  /* START MENU TOGGLING */
  $(".menu").on("click", function() {
    $(".modal-container").css({ display: "none" });
    $(this).toggleClass("active");
    $(".overlay").toggleClass("menu-open");
  });
  /* END MENU TOGGLING */

  /* START MENU FOR MOBILE */
  $("nav a").on("click", function() {
    $(".menu").removeClass("active");
    $(".overlay").removeClass("menu-open");
  });
  /* END MENU FOR MOBILE */

  /* START MODAL */
  var project = "";
  $(".link-mod").on("click", function() {
    var project = $(this).attr("id");
    const backdropHeight = $(document).height();

    /* Shade and froze background */
    $("#backdrop").css("height", backdropHeight);
    $("#backdrop").fadeIn(500);

    /*  open modal */
    project = `#modal-p0${project.substr(project.length - 1)}`;
    $(project)
      .css({ display: "initial" })
      .hide()
      .fadeIn();

    /* Carousel Slide  - Variables*/
    const carouselSlide = document.querySelector(`${project} .carousel-slide`);
    const carouselImages = document.querySelectorAll(
      `${project} .carousel-slide img`
    );

    const nextBtn = document.querySelector(`${project} .next-btn`);
    const prevBtn = document.querySelector(`${project} .prev-btn`);

    /* Carousel Slide  - First image shift*/
    let counter = 1;
    const size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    /* Carousel Slide  - Button Listeners*/
    nextBtn.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
    carouselSlide.addEventListener("transitionend", () => {
      if (carouselImages[counter].className === "last-clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }
      if (carouselImages[counter].className === "first-clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }
    });
    /* Close modal by ESC button */
    $(document).on("keydown", function(e) {
      if (e.keyCode === 27) {
        $(`${project}`).fadeOut(500);
        $("body").css({ overflow: "visible" });
        $(`#backdrop`).fadeOut("slow");
      }
    });

    /* Close modal by X button */
    $(".modal-close").on("click", function() {
      $(`${project}`).fadeOut(500);
      $("body").css({ overflow: "visible" });
      $(`#backdrop`).fadeOut("slow");
    });

    /* Close modal by clicking anywhere but the modal */
    $(document).on("click", function(event) {
      if (!$(event.target).closest(".modal-container,.link-mod").length) {
        $(`${project}`).fadeOut(500);
        $("body").css({ overflow: "visible" });
        $(`#backdrop`).fadeOut("slow");
      }
    });
  });
  /* END MODAL */

  /* SCROLLING ANIMATION */
  AOS.init({
    easing: "ease",
    duration: 1800
  });
});
