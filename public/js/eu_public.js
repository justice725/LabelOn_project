/* textarea 박스 max-length값 확인하는 js */
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
/* textarea 박스 max-length값 확인하는 js */

/* Keypoint modal 목록 슬라이드업, 다운 js */
$(function() {
    $(".list_rollup_btn").click(function(){
        $(this).toggleClass("icon_change");
        $(this).parent("div").siblings(".roll_box").slideToggle();
    });
});
/* Keypoint modal 목록 슬라이드업, 다운 js */

/* 헤더 gnb에 마우스 호버시 서브메뉴 슬라이드 업, 다운 js */
$(function() {
    $(".eu_page_menu_bar > li, .eu_page_bg").hover(function(){
        $(".eu_page_bg,.eu_sub_menu").stop().slideDown();
    }, function() {
        $(".eu_sub_menu, .eu_page_bg").stop().slideUp();
        }
    );
});

/* 헤더 gnb에 마우스 호버시 서브메뉴 슬라이드 업, 다운 js */
