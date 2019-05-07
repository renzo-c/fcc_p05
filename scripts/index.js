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
  /* ---- Start nav fixing  ---- */
  var viewportHeight = "";
  if (jQuery("window").width() > 1100) {
    viewportHeight = jQuery("window").height();
  } else {
    viewportHeight = jQuery("canvas").height();
  }
  $(window).scroll(function() {
    if ($(window).scrollTop() > viewportHeight) {
      $("nav#navbar").removeAttr("id");
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").attr("id", "navbar");
      $("nav").removeClass("sticky-nav");
    }
  });
  /* ---- End nav fixing  ---- */

  /* ---- Start ScrollTop  ---- */

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2
    );
  });
  /* ---- End ScrollTop  ---- */
});
