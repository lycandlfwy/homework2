// 页面加载完成之后执行
window.onload=function(){
	// 搜索区块的颜色变化
	search();
	// 轮播图
	banner();
	
};
// 搜索区块的颜色变化
function search(){
	// alert("127");
	/*1.颜色随着页面滚动逐渐加深
	2.当我们超过轮播图的时候，颜色保持不变*/
	// 获取搜索盒子
	var searchBox = document.querySelector('.mt_header_box');
	// 获取banner盒子
	var bannerBox = document.querySelector('.mt3');
	// 获取高度
	var h = bannerBox.offsetHeight;
	// 监听window的滚动事件
	window.onscroll = function(){
		//不断的获取离顶部的距离
		//为了解决兼容性的问题，直接拼接一起
		// var top = document.body.scrollTop + documentElement.scrollTop;
		// 如果body就换documentElement，这个是兼容性的问题
		// var top = document.documentElement.scrollTop;
		var top = document.body.scrollTop;
		var opacity = 0;
		if(top<h){
			// 1.颜色随着页面的滚动逐渐加深
			opacity = top / h * 0.85;
			// alert("127");
		}else{
			// 2.当超过轮播图的时候，颜色保持不变
			opacity = 0.85;
		}
		// 把透明度设置上去
		searchBox.style.background = "rgba(225,225,210,"+opacity+")";
	}
}

function banner(){
	// 获取DOM
	var banner = document.querySelector(".mt_banner1"); 
	// 不同设备banner图的宽度offsetWidth
	// 如果你切换设备，需要刷新，才能获取实时的宽度，要不然宽度跟不上
	var bannerWidth = banner.offsetWidth;
	// console.log(bannerWidth);
	// 图片盒子
	var imageBox = banner.querySelector('ul:first-child');
	var imageLi = imageBox.querySelectorAll('li');
	// 点盒子
	var pointBox = banner.querySelector('ul:last-child');
	// 所有点盒子
	var points = pointBox.querySelectorAll('li');
	var bannerWidth = banner.offsetWidth;
	// console.log(imageLi);
	var index = 1;
	var now = 0;
	var timer = "";
	autoPlay();
	// 绑定transitionEnd()事件 
	itcast.transitionEnd(imageBox,function(){
		// console.log(112);
		if(index >= imageLi.length -1){
			index = 1;
			setTranslate(now);
		}else if(index <= 0){
			index = 5;
			
		}
			removeTransition();
			setTranslate(-index * bannerWidth);
			setPoint();
		// removeTransition();
		// console.log(index);
		
		// clearInterval(timer);
		// 
	});
	var startX =0;
	var moveX =0;
	var distanceX =0;
	var ismove =false;
	imageBox.addEventListener("touchstart",function(e){
		clearInterval(timer);
		startX = e.touches[0].clientX;
		console.log("开始触摸点" + startX);
	});
	//获取实时触摸点
	imageBox.addEventListener("touchmove",function(e){
		 ismove =true;
		moveX = e.touches[0].clientX;
		distanceX =moveX -startX;
		console.log("移动距离差" + distanceX);
		var currentX= -index * bannerWidth +distanceX;
		addTransition();
		setTranslate(currentX);
	});
	//触摸结束
		imageBox.addEventListener("touchend",function(e){
			//绝对值：Math.abs
			if(ismove &&(Math.abs(distanceX)> bannerWidth /3)){
				if(distanceX >0) {
					index--;
				}else {
					index++;
				}
			}
			addTransition();
			setTranslate(-index * bannerWidth);
			 startX =0;
			 moveX =0;
			distanceX =0;
			 ismove =false;
			autoPlay();
		});
	// 声明添加过渡
	function addTransition(){
		imageBox.style.webkitTransition = "all .2s";
		imageBox.style.transition = "all .2s";
	}
	function setTranslate(now){
		imageBox.style.webikTransform = "translateX(" + now + "px)";
		imageBox.style.transform = "translateX(" + now + "px)";
	}
	// 声明li点对应li的图片
	function setPoint(){
		// console.log(points.length);
		for(var i = 0; i < points.length; i++){
			// 所有的li设置类为空
			points[i].className = "";
		}
	// 	var index = 1;
	// var now = 0;
		// 设置当前匹配li的背景颜色
		points[index -1].className ="now";
	}
	// 声明删除过渡
	function removeTransition(){
		imageBox.style.webkitTransition = "none";
		imageBox.style.transition = "none";
	}
	//如果报错，把now放进所有的setTranslate（）里面，如setTranslate（now）
	// 改变定位
	function autoPlay(){
		timer = setInterval(function(){
			index++;
			console.log(index);
			now =-index * bannerWidth;
			addTransition();
			setTranslate(now);
		},2500);
	}

}


