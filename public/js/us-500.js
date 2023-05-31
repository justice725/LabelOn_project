$(function() {
    $(".list_rollup_btn").click(function(){
        $(this).toggleClass("icon_change");
        $(this).parent("div").siblings(".roll_box").slideToggle();
    });

    /* $(".list_rollup_btn"). */
});