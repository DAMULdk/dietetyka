$(document).ready(function () {
    // Lists
    $("ul, ol").not(".normal").addClass("mx-auto list-group border-secondary mb-3");
    $("ul, ol").not(".normal").children().addClass("list-group-item border-secondary");
    $("ul.list-secondary, ol.list-secondary").children("li").addClass("list-group-item-secondary");
    $("ul.list-dark, ol.list-dark").children("li").addClass("list-group-item-dark");
    $("ul, ol").not(".normal").find("div").addClass("list-group");
    $(".list-small").find("li").css({"height": "30px", "padding": "5px 15px"});
    $(".list-medium").find(".li").css({"height": "40px", "padding": "10px 15px"});
    
    // Lines
    $(".line").addClass("my-4 mx-5 border-top border-light");
    $(".line-dark").addClass("my-4 mx-5 border-top border-secondary");
    $(".separator").addClass("my-4 w-100 border-top");
    $(".spacer-small").addClass("my-2").css("border", "none");
    $(".spacer").addClass("my-4").css("border", "none");
    $(".spacer-big").css({"border": "none", "margin": "50px 0px"});
    $(".vline").addClass("my-2 col-auto border-left border-light p-0");
    $(".vline-dark").addClass("my-2 col-auto border-left border-secondary p-0");

    // Toggle mechanism
    $(".toggle-header").on("click", function () {
        $(this).next(".toggle-content").slideToggle();
    });

    // Top menu hiding and showing
    let lastScrollTop = 0; // Scroll position
    const topMenu = document.getElementById("top-menu");

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            topMenu.style.transform = "translateY(-100%)";
        } else {
            topMenu.style.transform = "translateY(0)";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
