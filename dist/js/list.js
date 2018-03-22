//菜单
$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });
});
//价格
$('.clothes_four_input1,.clothes_four_input1').keyup(function(){
    $('.clothes_color_true').css('display','block');
    if($(this).val().length == 0){
         $('.clothes_color_true').css('display','none');
    }
})
//更多
var show_height = 80;
var obj = document.getElementsByClassName('clothes_color_six')[0];
var total_height = obj.scrollHeight;
   if(total_height > show_height){
        $('.size_more').click(function(){
            obj.style.height = total_height + 20 +'px';
            $(this).text('收起');
        })
   }

$('.style').hover(function(){
    $('.hover_none').css('display','none');
    $(this).css('font-weight','600');
    $('.style_xian,.clothes_color_seven_hover2,.style_more').css('display','block');
},function(){
    $('.hover_none').css('display','display');
    $(this).css('font-weight','500');
    $('.style_xian,.clothes_color_seven_hover2,.style_more').css('display','none');
})
$('.banxing').hover(function(){
    $('.hover_none2').css('display','none');
    $(this).css('font-weight','600');
    $('.style_xian2,.clothes_color_seven_hover,.style_more2').css('display','block');
},function(){
    $('.hover_none2').css('display','display');
    $(this).css('font-weight','500');
    $('.style_xian2,.clothes_color_seven_hover,.style_more2').css('display','none');
})
$('.houdu').hover(function(){
    $('.hover_none3').css('display','none');
    $(this).css('font-weight','600');
    $('.style_xian3,.clothes_color_seven_hover3,.style_more3').css('display','block');
},function(){
    $('.hover_none3').css('display','display');
    $(this).css('font-weight','500');
    $('.style_xian3,.clothes_color_seven_hover3,.style_more3').css('display','none');
})

$('.center_imgs_one').mouseenter(function(){
    $(this).find('.imgs_hover').stop(true).css('display','block');
})
$('.center_imgs_one').mouseleave(function(){
    $(this).find('.imgs_hover').stop(true).css('display','none');
})