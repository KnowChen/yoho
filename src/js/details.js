//放大镜
var oBox  	   = document.getElementsByClassName('box')[0];
var oSmallBox  = document.getElementsByClassName('small-box')[0];
var aSmallImg  = Array.from(oSmallBox.children);
var oMiddleBox = document.getElementsByClassName('middle-box')[0];
var oMiddleImg = document.getElementsByClassName('middle-img')[0];
var oLargeBox  = document.getElementsByClassName('large-box')[0];
var oLargeImg  = document.getElementsByClassName('large-img')[0];
var oShadow    = document.getElementsByClassName('shadow')[0];


// 给缩略图添加鼠标进入事件
aSmallImg.forEach( v => {
	v.onmouseover = function () {
		// 先去掉所有的class名
		aSmallImg.forEach(v => v.className = '');

		// 当前img添加class
		this.className = 'active';

		// 改变中型图片的地址
		oMiddleImg.src = this.src;

		// 改变大型图片的地址
		oLargeImg.src = this.src;
	};
});

// 遮罩层最大的left和top值
var maxL = 0;
var maxT = 0;
// 大图片最大的left和top值
var maxLargeImgL  = 0;
var maxLargeImgT  = 0;

// 鼠标进入middle-box
oMiddleBox.onmouseover = function () {
	// 显示遮罩层
	oShadow.style.display = 'block';
	// 显示右侧的盒子
	oLargeBox.style.display = 'block';

	// 获取最大的left和top值
	maxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
	maxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
};

// 鼠标离开middle-box
oMiddleBox.onmouseout = function () {
	// 显示遮罩层
	oShadow.style.display = 'none';
	// 显示右侧的盒子
	oLargeBox.style.display = 'none';
};

// 给middle-box添加移动事件
oMiddleBox.onmousemove = function (ev) {
	var e = ev || window.event;
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	var iL = e.clientX - oShadow.offsetWidth / 2 - oMiddleBox.offsetLeft - oBox.offsetLeft;
	var iT = e.clientY - oShadow.offsetHeight / 2 - oMiddleBox.offsetTop - oBox.offsetTop + sTop;


	// 限定左侧
	if(iL < 0) {
		iL = 0;
	}

	// 限定上侧
	if(iT < 0) {
		iT = 0;
	}

	// 限定右侧
	if(iL > maxL) {
		iL = maxL;
	}

	// 限定下侧
	if(iT > maxT) {
		iT = maxT;
	}
	oShadow.style.left = iL + 'px';
	oShadow.style.top  = iT + 'px';

	// 让大图移动
	oLargeImg.style.left  = - iL * maxLargeImgL / maxL + 'px';
	oLargeImg.style.top   = - iT * maxLargeImgT / maxT + 'px';
};
//点击尺码换颜色
(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var aMenuLi = tab.find('.menu li');
		aMenuLi.click(function () {
			var index = $(this).index();
		// 切换菜单
		aMenuLi.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);
	$('.pull_shop_car_bottom_size').tab();
//点击加减号
$(".minus_plus").click(function() {  
    var t = $(this).parent().find('input[class*=num]');  
    t.val(parseInt(t.val()) + 1)   
}) 
$(".minus").click(function() {  
    var t = $(this).parent().find('input[class*=num]');    
    t.val(parseInt(t.val()) - 1);
    if(parseInt(t.val()) <= 1) {  
        t.val(1);  
    }    
}) 
//提交咨询
$('.submit_consult').click(function(){
	var s = $(this).parent().find('textarea[class*=question_input]');
	if(s.val = ' '){
		s.css('border','1px solid #d0021b');
	}
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