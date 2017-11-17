$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(".menu").slideToggle();
        $(".icon-bar").toggleClass("icon-bar-close", 1000);
    });
});
