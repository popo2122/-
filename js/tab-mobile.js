$(function () {
  //header menu slide down(toggle btn)
  $("#mobile__toggle").click(function () {
    $(".mobile__bottom-menu").stop().slideDown(500);
    $("#mobile__toggle").css({
      display: "none",
    });
    $("#mobile__close").css({
      display: "block",
    });
    $("header").css({
      backgroundColor: "#f0eee9",
    });
    $(".mobile__top-menu").css({
      display: "flex",
    });
  });

  //header menu slide up(close btn)
  $("#mobile__close").click(function () {
    var ww = $(window).width();
    $(".mobile__bottom-menu").stop().slideUp(500);
    $("#mobile__close").css({
      display: "none",
    });
    $("#mobile__toggle").css({
      display: "block",
    });
    $("header").css({
      backgroundColor: "#ffffff",
    });
    $(".mobile__top-menu").css({
      display: "none",
    });
  });
  //
  //
  //

  //main image swiper
  var mainSwiper = new Swiper(".main-swiper-container", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  //
  //
  //

  // section2 rules swiper
  var rulesMenu = [
    "고온스팀공법",
    "바른입맛",
    "식재료엄선",
    "월령별맞춤",
    "신선일일배송",
  ];
  var rulesSwiper = new Swiper(".rules-swiper-container", {
    pagination: {
      el: ".rules-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + rulesMenu[index] + "</span>"
        );
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  //
  //
  //

  //section4 : shop box slide down
  $(".mobile__shop-box").each(function (index) {
    $(this).attr("data-index", index);
  });
  var shopboxIndex = $(".mobile__shop-box").attr("data-index");

  //slide down click the plus btn
  $(".shop__plus-btn")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .click(function () {
      var index = $(this).attr("data-index");
      $(".mobile__shop-box").removeClass("shop-box--open");
      $(".shop__img-desc-box").removeClass("shop__img-desc--visible");
      $(".shop__first-btn").removeClass("btn--invisible");
      $(".shop__plus-btn").css({
        display: "block",
      });
      $(".shop__minus-btn").css({
        display: "none",
      });

      $(".mobile__shop-box").eq(index).addClass("shop-box--open");
      $(".shop__img-desc-box").eq(index).addClass("shop__img-desc--visible");
      $(".shop__first-btn").eq(index).addClass("btn--invisible");

      $(".shop__minus-btn").eq(index).css({
        display: "block",
      });

      $(".shop__plus-btn").eq(index).css({
        display: "none",
      });
    });

  //slide up click the minus btn
  $(".shop__minus-btn")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .click(function () {
      var index = $(this).attr("data-index");
      $(".mobile__shop-box").eq(index).removeClass("shop-box--open");
      $(".shop__img-desc-box").eq(index).removeClass("shop__img-desc--visible");
      $(".shop__first-btn").eq(index).removeClass("btn--invisible");

      $(".shop__minus-btn").eq(index).css({
        display: "none",
      });
      $(".shop__plus-btn").eq(index).css({
        display: "block",
      });
    });
}); //end
