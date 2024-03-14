$(function(){
    const $btn = $('.skill__btn' [data-filter]),
    $list = $('.skill__list' [data-experience]);

    $btn.on('click', function(){
        let $click_cat = $(this).attr('data-filter');
        $list.removeClass('is-active');
        if($click_cat === 'all'){
            $list.show().addClass('is-active');
        } else {
            $list.hide().removeClass('is-active').filter('[data-experience = "' + $click_cat + '"]').show().addClass('is-active');
        }
    });
});