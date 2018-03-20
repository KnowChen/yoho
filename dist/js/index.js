//轮播图
var arr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;
var carouselList = document.getElementsByClassName('carousel-list')[0];
var listImgs = carouselList.children;
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
var index = 0; // 记录显示图片的下标
const iPerW = 1150; // 一张图片的宽度
var dotIndex = 0; // 记录当前dot的下标
var lis = document.getElementsByClassName('dots')[0].children;
var lisShadow = document.getElementsByClassName('shadow');
//初始化界面
function initUI(){
	document.getElementsByClassName('dots')[0].children[0].children[1].style.opacity = '0';
	// console.log(lisShadow);
}
//1、自动变换图片
function autoChange(){
	myTimer=setInterval(function(){
			//处理两个数据：一个是要淡出的图片序号，一个是要淡入的图片序号。
			outord = ord;//ord++之前的ord就是要出去的ord			
			//1、改变序号
			ord++;//4
			//2、处理边界
			if(ord>arr.length-1){
				ord=0;
			}			
			//3、改变外观；
			changeUI(outord,ord);
		},5000);
}

//2、停止变换
function stopChange(){
	window.clearInterval(myTimer);
}

//3、跳转到指定的图片上
function goImg(transOrd){//0
	outord = ord;//ord改变之前的ord就是要出去的ord
	//1、改变序号（把当前图片序号ord的值改为跳转的图片序号；）
	ord = transOrd;
	//2、改变外观
	changeUI(outord,ord);
}

//功能：给定出的序号和进的序号，完成两张图片的淡入淡出效果

function changeUI(outord,inord){
	let currOpacity = 1;
	let incOpacity = -0.1;
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currOpacity=currOpacity+incOpacity;//0.1
		//2、数据合法性的判断（边界）
		if(currOpacity<=0){  //
			window.clearInterval(myTimer);
		}
		//3、改变外观
		listImgs[outord].style.opacity = currOpacity;	
		listImgs[inord].style.opacity = 1-currOpacity;			
	},50);
	
	
	//2)、改变dots的图片。
	// //把所有的按钮变成第一张图片（初始）
	for(let i=0;i<lisShadow.length;i++){
		lisShadow[i].style.opacity = "0.2";
	}
	// 把当前的变成当前图片
	lisShadow[inord].style.opacity="0";
}
window.onload = function(){
	//1、初始化界面
	initUI();
	//2、自动变换图片；
	autoChange();
	//鼠标进入盒子的区域，停止变换
	document.getElementsByClassName('carousel')[0].onmouseover = stopChange;
	
	document.getElementsByClassName('carousel')[0].onmouseout = autoChange;

	for(let i=0;i<lis.length;i++){
		//赋值语句。
		lis[i].onclick = function(){//此函数的执行必须点击li。
			goImg(i);
		}
	}
	
}

//划过购物车时
$('.mine_for').mouseover(function(){
	$('.mine_for_hover').css('display','block');
});
$('.mine_for').mouseout(function(){
	$('.mine_for_hover').css('display','none');
});

//划过列表显示菜单
$('.menu_list_cloth_cloth,.menu_list_new_list_famous,.menu_list_new_list_famous_two').mouseover(function(){
	$('.menu_list_cloth').css('display','block');
});
$('.menu_list_cloth_cloth,.menu_list_new_list_famous,.menu_list_new_list_famous_two').mouseout(function(){
	$('.menu_list_cloth').css('display','none');
});

//人气单品
$('.popularity_single_top li,.popularity_single_center li').mouseover(function () {
	$(this).stop(true).children().css('display', 'none').end().stop(true).children().css('display', 'block');
});

$('.popularity_single_top li,.popularity_single_center li').mouseout(function () {
	$(this).children().css('display', 'none');
});

/*---------------------优选品牌------------------第一个轮播*/
class Carousel {
	constructor({el, timeout = 3000}) {
		this.el = el;
		this.timeout = timeout;

		// 鼠标移入移出事件
		let directionBtn = this.el.getElementsByClassName('goods_chose_brand_carousel_one_btn')[0];
		this.el.onmouseover = () => {
			directionBtn.style.display = 'block';
			// 清除定时器
			clearInterval(this.timer);
		}
		this.el.onmouseout = () => {
			directionBtn.style.display = 'none';
			// 再次自动轮播
			this.autoMove();
		}


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

		// 给左侧按钮添加点击事件
		let prev = this.el.getElementsByClassName('goods_chose_brand_carousel_btn_prev')[0];

		prev.onclick = () => {
			this.leftMove();
		}

		// 给右侧按钮添加点击事件
		let next = this.el.getElementsByClassName('goods_chose_brand_carousel_btn_next')[0];

		next.onclick = () => {
			this.rightMove();
		}

		// 自动轮播
		this.autoMove();
	}

	autoMove() {
		this.timer = setInterval(() => {
			this.rightMove();
		}, this.timeout);
	}

	leftMove() {
		this.liIndex--;
		if(this.liIndex < 0) {
			this.carouselOneList.style.left = - (this.imgLen - 1) * this.liWidth + 'px';
			this.liIndex = this.imgLen - 2;
		}
		bufferMove(this.carouselOneList, {left: - this.liIndex * this.liWidth});

		// 按钮切换
		this.dotIndex--;
		this.dotMove();
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

//第二个轮播
	var goodLeftJian = document.getElementsByClassName('good_left_jian')[0];
	var goodRightJian = document.getElementsByClassName('good_right_jian')[0];
	goodRightJian.onclick = function(){
		var currOpacity = 1;
		var incOpacity = -0.1;
		var myTimer = setInterval(function(){
			//1、改变数据
			currOpacity=currOpacity+incOpacity;//0.1
			//2、数据合法性的判断（边界）
			if(currOpacity<=0){  //
				incOpacity = 0.1;
				currOpacity=0;
			}else if(currOpacity>=1){
				incOpacity = -0.1;
				currOpacity=1;
			}
			//3、改变外观		
			//
			document.getElementsByClassName("goods_chose_brand_carousel_two")[0].style.opacity = currOpacity;	
			//因为两张图片的透明度的值之和是1；所以，imgid1的值永远是1-currOpacity。
			//即随着currOpacity的变小，1-currOpacity的结果变大，反之亦然。
			document.getElementsByClassName("goods_chose_brand_carousel_two_two")[0].style.opacity = 1-currOpacity;	
			if(currOpacity>=1){
				clearInterval(myTimer);
			}
		},200);
	}


//潮流上装
$('.fashion_top_clothes_bottom li,.fashion_top_clothes_center_top_images li,.fashion_top_clothes_center_left_images li').mouseenter(function () {
	$(this).children().css('display', 'block');
});

$('.fashion_top_clothes_bottom li,.fashion_top_clothes_center_top_images li,.fashion_top_clothes_center_left_images li').mouseleave(function () {
	$(this).find('div').css('display','none');
});

//新品上架
$('.new_shop_list_center_list_uls li').mouseenter(function(){
	$(this).children().css('display', 'block');
});
$('.new_shop_list_center_list_uls li').mouseleave(function(){
	$(this).find('.new_shop_list_center_list_shadow').css('display', 'none');
});