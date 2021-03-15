$(document).ready(function () {
    //header bottom-menu-item hover시 메뉴 슬라이드
    $(".bottom-menu__item").hover(
        function () {
            $(".bottom-sub-menu").stop().slideDown(500);
        },
        function () {
            $(".bottom-sub-menu").stop().slideUp(500);
        }
    );
    //
    //
    //

    //section1 : main 이미지 슬라이드
    $(window).resize(function () {
        slideWidth = $(".slide__item").width();
    });

    function mainSlide(index) {
        //main image slide
        slideWidth = $(".slide__item").width();
        $(".slide__item").css({
            left: -slideWidth,
            opacity: 0,
        });
        $(".slide__item").eq(index).stop().animate({
                left: 0,
                opacity: 1,
            },
            800
        );

        //circle 메뉴 클릭 시 오른쪽 이미지 변경
        $(".circle__img").eq(index).animate({
                right: 0,
                opacity: 1,
            },
            800
        );

        $(".circle__img").css({
            right: -390,
            opacity: 0,
        });

        //circle btn 클릭 시 색깔 변경
        $(".circle__dot").removeClass("circle__dot--selected");
        $(".circle__name").removeClass("circle__name--selected");

        $(".circle__dot").eq(index).addClass("circle__dot--selected");
        $(".circle__name").eq(index).addClass("circle__name--selected");
    }

    //main slide circle btn click event
    $(".circle")
        .each(function (index) {
            $(this).attr("data-index", index);
        })
        .click(function () {
            i = $(this).attr("data-index");
            mainSlide(i);
        });

    //main slide loop(infinite)
    mainClick = 1;
    setInterval(function () {
        if (mainClick > 3) {
            mainClick = 0;
        }
        mainSlide(mainClick);
        mainClick++;
    }, 4000);

    //
    //
    //

    //section2: 베이비밀 바른원칙 slide show
    function ruleSlide(imgIndex) {
        $(".rule__img-desc").fadeOut(700);
        $(".rule__img-desc").eq(imgIndex).fadeIn(700);

        $(".rule__dot").removeClass("dot--active", 5000);
        $(".rule__dot").eq(imgIndex).addClass("dot--active", 5000);

        $(".rule__desc").removeClass("desc--active");
        $(".rule__desc").eq(imgIndex).addClass("desc--active");
    }

    //first image always showing at first
    $(".img-desc--showing").css({
        display: "block",
    });

    $(".rule__img-desc").each(function (index) {
        $(this).attr("data-index", index);
    });

    //rule btn click event
    $(".rule")
        .each(function (index) {
            $(this).attr("data-index", index);
        })
        .click(function () {
            imgIndex = $(this).attr("data-index");
            ruleSlide(imgIndex);
        });

    //rule slide loop(infinite)
    var ruleClick = 0;
    setInterval(function () {
        ruleClick++;
        if (ruleClick > 4) {
            ruleClick = 0;
        }
        ruleSlide(ruleClick);
    }, 2500);
    //
    //
    //

    // section3 : 베이비밀 event & service swiper
    var swiper = new Swiper(".event-swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        loop: true,
        centeredSlides: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        breakpoints: {
            1920: {
                slidesPerView: 4.5,
                spaceBetween: 30,
            },
            1680: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
            960: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            680: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // evnet swiper slide hover시 이미지 크기 커짐
    $(".event-swiper-slide").hover(
        function () {
            $(this).transition({
                    scale: 1.05,
                },
                500
            );
        },
        function () {
            $(this).transition({
                    scale: 1,
                },
                500
            );
        }
    );
    //
    //
    //

    //section4: 베이비밀 shop - small shop menu slide
    $(window).resize(function(){
        shopWidth = $(".shop__box-small").width();
    });

    $(".shop__right").click(function () {
        shopWidth = $(".shop__box-small").width();
        $(".shop__img-slides").css({
            top: 0,
        });

        $(".shop__img-slides")
            .stop()
            .animate({
                top: -shopWidth,
            })
            .find(".shop__box-small:first")
            .appendTo(".shop__img-slides");
    });

    //shop-right container slide loop(infinite)
    setInterval(function () {
        $(".shop__right").trigger("click");
    }, 4000);
    //
    //
    //

    //fixed btn(top-btn & evnet pop-up)
    //fixed btn resize시 position지정
    $(window).resize(function () {
        ww = $(window).width();
        if (ww >= 1440) {
            $("#fixed-btn").css({
                bottom: 50,
                right: 50,
            });
        } else if (ww >= 760) {
            $("#fixed-btn").css({
                bottom: 30,
                right: 30,
            });
        } else if (0 <= ww <= 759) {
            $("#fixed-btn").css({
                bottom: 8,
                right: 10,
            });
        }
    });

    //top btn up to main
    $("#top-btn").click(function () {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });

    //top버튼 클릭 시 scroll up & 사라짐
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var headerHeight = $("header").height();

        if (scrollTop < headerHeight) {
            $("#fixed-btn").css({
                opacity: 0,
            });
        } else {
            $("#fixed-btn").css({
                opacity: 1,
            });
        }
    });

    //plus btn클릭시 미니 팝업창 나타남
    $("#event-btn__plus").click(function () {
        $(".event-popup").css({
            visibility: "visible",
            opacity: 1,
        });
        $("#fixed-btn").animate({
            right: 0,
        });
        $(".event-popup").animate({
                right: 0,
            },
            500
        );
    });

    //미니 팝업창 close
    $("#popup__close-btn").click(function () {
        ww = $(window).width();
        if (ww >= 1440) {
            $("#fixed-btn").animate({
                right: 50,
            });
        } else if (ww >= 760) {
            $("#fixed-btn").animate({
                right: 30,
            });
        } else if (0 <= ww <= 759) {
            $("#fixed-btn").animate({
                right: 10,
            });
        }
        
        $(".event-popup").animate({
                right: -293,
            },
            500
        );
        $(".event-popup").css({
            visibility: "hidden",
            opacity: 0,
        });
    });
}); //end
