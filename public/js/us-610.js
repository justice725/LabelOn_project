$(function(){
    $(".text_count_box").find("textarea").keyup(function(e) {
        let content = $(this).val();

        if(content.length == 0 || content == '') {
            $(this).siblings(".length_box").find(".text_count").text('(0');
        } else {
            $(this).siblings(".length_box").find(".text_count").text('('+content.length);
        }
    })
});