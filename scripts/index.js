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
  var viewportHeight = jQuery("canvas").height();
  var viewportWidth = $(window).width();

  $(window).scroll(function() {
    if ($(window).scrollTop() > viewportHeight && viewportWidth > 715) {
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
  var prj = "";
  $(".link-mod").on("click", function() {
    /************** test ***************/
    var prj = $(this).attr("id");
    const backdropHeight = $(document).height();

    /* Shade and froze background */
    $("body").css({ overflow: "hidden" });
    $("#backdrop").css("height", backdropHeight);
    $("#backdrop").fadeIn(500);

    /*  open modal */
    prj = `#mod-p0${prj.substr(prj.length - 1)}`;
    $(prj).css({ display: "initial" });

    /************** test ***************/

    // project = $(this).attr("id");
    // project = project.substr(project.length - 1);
    // const backdropHeight = $(document).height();

    /* start open modal */
    // $(`div[class='modal-container'][id='modal-p0${project}']`).css({
    //   display: "initial"
    // });
    // $("body").css({ overflow: "hidden" });
    // $("#backdrop").css("height", backdropHeight);
    // $("#backdrop").fadeIn(100);

    /* start slider */
    // const carouselSlide = document.querySelector(
    //   `#modal-p0${project} .carousel-slide`
    // );
    // const carouselImages = document.querySelectorAll(
    //   `#modal-p0${project} .carousel-slide img`
    // );
    /* end slider */

    /*Buttons */
    // const nextBtn = document.querySelector(`#modal-p0${project} #next-btn`);
    // const prevBtn = document.querySelector(`#modal-p0${project} #prev-btn`);
    /*Counter */
    // let counter = 1;
    // const size = carouselImages[0].clientWidth;

    // carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    /* Button listeners */
    //   nextBtn.addEventListener("click", () => {
    //     if (counter >= carouselImages.length - 1) return;
    //     carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter++;
    //     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //   });
    //   prevBtn.addEventListener("click", () => {
    //     if (counter <= 0) return;
    //     carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter--;
    //     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //   });
    //   carouselSlide.addEventListener("transitionend", () => {
    //     if (carouselImages[counter].id === "last-clone") {
    //       carouselSlide.style.transition = "none";
    //       counter = carouselImages.length - 2;
    //       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //     }
    //     if (carouselImages[counter].id === "first-clone") {
    //       carouselSlide.style.transition = "none";
    //       counter = carouselImages.length - counter;
    //       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //     }
    //   });

    //   $(document).on("keydown", function(e) {
    //     if (e.keyCode === 27) {
    //       $(`#modal-p0${project}`).fadeOut(500);
    //       $("body").css({ overflow: "visible" });
    //       $(`#backdrop`).fadeOut("slow");
    //     }
    //   });
    // });
    /* end open modal */

    /* start close modal through X */
    // $(".modal-close").on("click", function() {
    //   $(`#modal-p0${project}`).fadeOut(500);
    //   $("body").css({ overflow: "visible" });
    //   $(`#backdrop`).fadeOut("slow");
    // });
    /* end close modal through X */

    /* start close modal through click everywhere */
    // $(document).on("click", function(event) {
    //   if (!$(event.target).closest(".modal-container,.link-mod").length) {
    //     $(`#modal-p0${project}`).fadeOut(500);
    //     $("body").css({ overflow: "visible" });
    //     $(`#backdrop`).fadeOut("slow");
    //   }
    // });
    /* end close modal through click everywhere */
    /* END MODAL */
  });

  /* START SLIDER */
  // $(document).ready(function() {
  //   $(".link-mod").on("click", function() {
  //     const carouselSlide = document.querySelector(".carousel-slide");
  //     const carouselImages = document.querySelectorAll(".carousel-slide img");

  //     /*Buttons */
  //     const nextBtn = document.querySelector("#next-btn");
  //     const prevBtn = document.querySelector("#prev-btn");
  //     /*Counter */
  //     let counter = 1;
  //     const size = carouselImages[0].clientWidth;

  //     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  //     /* Button listeners */
  //     nextBtn.addEventListener("click", () => {
  //       if (counter >= carouselImages.length - 1) return;
  //       carouselSlide.style.transition = "transform 0.4s ease-in-out";
  //       counter++;
  //       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  //     });
  //     prevBtn.addEventListener("click", () => {
  //       if (counter <= 0) return;
  //       carouselSlide.style.transition = "transform 0.4s ease-in-out";
  //       counter--;
  //       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  //     });
  //     carouselSlide.addEventListener("transitionend", () => {
  //       if (carouselImages[counter].id === "last-clone") {
  //         carouselSlide.style.transition = "none";
  //         counter = carouselImages.length - 2;
  //         carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  //       }
  //       if (carouselImages[counter].id === "first-clone") {
  //         carouselSlide.style.transition = "none";
  //         counter = carouselImages.length - counter;
  //         carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  //       }
  //     });
  //   });
});

/* END SLIDER */
