//划过MY有货
$('.my_have_buy').mouseenter(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
$('.my_have_buy').mouseleave(function(){
	$(this).find('.my_have_buy_hover').slideToggle();
})
//点击×关闭
$('.close').click(function(){
	$('.shop_car_top_word').css('display','none');
})
//勾选的图片切换
$('.every_all_chose').click(function(){
	var $this = $(this);
	if($this.hasClass('every_all_chose')){
		$this.removeClass('every_all_chose').addClass('img_hover');
	}else if($this.hasClass('img_hover')){
		$this.removeClass('img_hover').addClass('every_all_chose');
	}

})
//划过购物列表时
$('.detail_shop_car').mouseenter(function(){
	$('.car_color').css({'border':'1px dashed #e0e0e0','background-image':'url(../img/car_color_icon_hover.png)','background-repeat':'no-repeat','background-position':'183px center'});
})
$('.detail_shop_car').mouseleave(function(){
	$('.car_color').css({'border':'1px dashed #f5f5f5','background':'none'});
})
$('.car_color').mouseenter(function(){
	$(this).css({'border':'1px dashed #d0021b','background-image':'url(../img/car_color_icon.png)','background-repeat':'no-repeat','background-position':'183px center'})
})
$('.car_color').mouseleave(function(){
	$(this).css({'border':'1px dashed #f5f5f5','background':'none'});
})

//总价和数量的增加和减少
$(function(){
	//获得文本框对象
	var t = $(".add_text");
	//数量增加操作
	$('.add').click(function(){
		t.val(parseInt(t.val())+1) 
    	setTotal(); 
	})
	//数量减少操作
	$(".minus").click(function(){
		t.val(parseInt(t.val())-1) 
	    if(parseInt(t.val())<=1){ 
	      t.val(1); 
	    } 
	    setTotal(); 
	})
计算操作
function setTotal(){
	var s = 0;
	 $(".minus_and_add").each(function(){ 
		  s+=parseInt($(this).find('input[class*=add_text]').val())
		  *parseFloat($(this).find('p[class*=black_num]').text()); 
	}); 
	   $(".red_num").html(s.toFixed(2)); 
	  } 
	  setTotal();
})
//换一换的轮播图
class Carousel {
	constructor({el, timeout = 3000}) {
		this.el = el;
		this.timeout = timeout;
		// 复制carousel-list的第一个LI到最后
		let carouselOneList = this.el.getElementsByClassName('goods_chose_brand_carousel_one_list')[0];
		let firstLi = carouselOneList.children[0];
		this.liWidth = firstLi.offsetWidth;    // 每张图片的宽度
		
		carouselOneList.innerHTML += firstLi.outerHTML; // 复制第一张图片
		this.imgLen = carouselOneList.children.length; // 图片的个数

		// 设置最新的UL宽度
		carouselOneList.style.width = this.imgLen * this.liWidth + 'px';

		this.carouselOneList = carouselOneList;

		// 添加LI的下标
		this.liIndex = 0;

		for(let i = 0; i < this.dotLen; i++) {
			this.dots.children[i].onmouseover = () => {
				this.liIndex = i;

				// 让UL运动
				bufferMove(this.carouselOneList, {left: - this.liIndex * this.liWidth});
			}
		}
		// 给右侧按钮添加点击事件
		let next = this.el.getElementsByClassName('change_one_change')[0];
		next.onclick = () => {
			this.rightMove();
		}
	}

	rightMove() {
		// 图片运动
		this.liIndex++;

		if(this.liIndex >= this.imgLen) {
			this.carouselOneList.style.left = 0
			this.liIndex = 1
		}
		bufferMove(this.carouselOneList, {left: - this.liIndex * this.liWidth});
	}
}