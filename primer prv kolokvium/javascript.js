$(document).ready(function () {
    $("input").hide();
    $(".proizvodi div h2").mouseenter(function () {
       $(this).next().show();
       $(this).next().next().show()
    });
    $(".proizvodi div").mouseleave(function () {
            $("input").hide();
            $("input").hide()
    });
    $(".accordion").accordion({
        collapse:false,
        active:true,
        multiple:true,
    });
    $(".accordion .ui-accordion-header").click(function () {
        $(this).next().slideToggle;
    })
});