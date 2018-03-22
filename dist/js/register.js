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
//验证密码
$('.lis_pass_word_input').blur(function() {
	if($('.lis_pass_word_input').val() == "") {
		$(".password_cue").text("请输入密码").parent().css("display","block"); 
		$(this).css('border','1px solid red');
		return false;
	}
	var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
	if (!reg1.test($('.lis_pass_word_input').val())){
	    $(".password_cue").text("密码须字母和数字组合").parent().css('display', 'block');
	    // $(".pass_point_one i").css("background-position","-537px -35px").parent().css("color","red");
		// $(".pass_point_one").css("color","red");
		$(this).css('border','1px solid red'); 
	    return false;
	}
	var reg2 = /^(?![^a-zA-Z]+$)(?!\D+$).{8,15}$/;
	if (!reg2.test($('.lis_pass_word_input').val())){
	    $(".password_cue").text("密码只支持6-20位字符").parent().css('display', 'block');
		$(this).css('border','1px solid red'); 
	    return false;
	}
	$(".pass_point").css("display","none");
});
$('.lis_pass_word_input').focus(function() {
	$(".pass_point").css("display","block");
});
$('.lis_pass_word_input').keyup(function() {
	var mediumRegex = /^[0-9A-Za-z]{6,20}$/;
	var enoughRegex = /^(?=.{6,20})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/;
	var strongRegex = /^(?=.{6,20})([0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*){2,}$/;
	if(mediumRegex.test($('.lis_pass_word_input').val()) == false) {
	    $('.low').css({'background':'red', 'color':'#fff'});

	}else if (strongRegex.test($('.lis_pass_word_input').val())) {
	    $('.low,.mid,.high').css({'background':'#3ee392', 'color':'#fff'});

	}else if (mediumRegex.test($('.lis_pass_word_input').val())) {
		$('.low,.mid').css({'background':'yellow', 'color':'#fff'});
	}else {
         $('.low').css({'background':'red', 'color':'#fff'});
    }
	return true; 
});
$('.quick_img').hover(function(){
	$('.quick_img_hover').css('display','block');
},function(){
	$('.quick_img_hover').css('display','none');
})