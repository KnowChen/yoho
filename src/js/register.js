//划过MY有货
$('.my_have_buy').mouseenter(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
$('.my_have_buy').mouseleave(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
//验证手机号
$('.lis_two_phone_input').blur(function() {
	if($('.lis_two_phone_input').val() == "") {
		$(".phone_cue").text("请输入手机号码").parent().css("display","block"); 
		$(this).css('border','1px solid red');
		return false;
	}
	var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (!reg.test($('.lis_two_phone_input').val())){
	    $(".phone_cue").text("手机号码格式不正确,请重新输入").parent().css('display', 'block');
		$(this).css('border','1px solid red'); 
	    return false;
	} 
});