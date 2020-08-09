$(document).ready(function () {
  $("a.scroll").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });

  $(window).scroll(function () {
    if (this.scrollY > this.innerHeight / 2) {
      $(".scroll-to-top").css("display", "block");
    } else {
      $(".scroll-to-top").css("display", "none");
    }
  });

  //   Nav
  $(".menu-btn").on("click", function () {
    $(".main-small").toggleClass("show");
  });
});

$("#show").on("click", function () {
  $("#show-more, #dot").toggleClass("more");
});
