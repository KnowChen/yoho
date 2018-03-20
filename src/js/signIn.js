//划过MY有货
$('.my_have_buy').mouseenter(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
$('.my_have_buy').mouseleave(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
//点击中国选项
$('.vip_sign_right_span').click(function(){
	// var text = $('.vip_sign_right_uls').text();
	$(this).next('.vip_sign_right_uls').slideToggle();
});

//正则验证
//账户名
$('.phone_and_email').blur(function() {
	if($('.phone_and_email').val() == "") {
		$(".confirmMsg").text("请输入账户名").css('display', 'block'); 
		$(this).css('border','1px solid red');
		return false;
	}
	var reg = /(1[3-9]\d{9}$)/;
	if (!reg.test($('.phone_and_email').val())){
	    $(".confirmMsg").text("邮箱格式不正确,请重新输入").css('display', 'block');
		$(this).css('border','1px solid red');
	    
	    return false;
	} 
});
// 密码
$('.pass_word').blur(function() {
	if($('.pass_word').val() == "") {
		$(".confirmPass").text("请输入密码").css('display', 'block'); 
		$(this).css('border','1px solid red');
		return false;
	}
	// /^[0-9a-zA-Z_]{6,15}$/
	var reg = /^[0-9a-zA-Z_]{6,15}$/;
	if (!reg.test($('.pass_word').val())){
	    $(".confirmPass").text("请输入长度为6-20字符的").css('display', 'block');
		$(this).css('border','1px solid red');
	    
	    return false;
	} 
});
