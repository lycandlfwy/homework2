$(document).ready(function() {
	//导航条
	$(".cc").hover(function() {
		$(".c2").show();
	},function() {
	 	$(".c2").hide();
     });

	//文字自动轮播
	 note();

	//div welcome图片文字
	$(".dianj1").bind("mouseenter",function(){
		$(".show1").show();
	}).bind("mouseleave",function(){
	 	$(".show1").hide();
     });
	$(".dianj2").bind("mouseenter",function(){
		$(".show2").show();
	}).bind("mouseleave",function(){
	 	$(".show2").hide();
     });

	//div welcome图片放大
	 $(".dianj1").bind("mouseenter",function(){
		$(".img1").attr("class","img3")
	}).bind("mouseleave",function(){
	 	$(".img3").attr("class","img1");
     });
	$(".dianj2").bind("mouseenter",function(){
		$(".img2").attr("class","img3")
	}).bind("mouseleave",function(){
	 	$(".img3").attr("class","img2");
     });

    //div services 放大，背色变
    $(".b1").bind("mouseout",function(){
		$(".b1").attr("class","b2")
	}).bind("mouseover",function(){
	 	$(".b2").attr("class","b1");
     });
	$(".b3").bind("mouseout",function(){
		$(".b3").attr("class","b4")
	}).bind("mouseover",function(){
	 	$(".b4").attr("class","b3");
     });
	$(".b5").bind("mouseout",function(){
		$(".b5").attr("class","b6")
	}).bind("mouseover",function(){
	 	$(".b6").attr("class","b5");
     });
	$(".b7").bind("mouseout",function(){
		$(".b7").attr("class","b8")
	}).bind("mouseover",function(){
	 	$(".b8").attr("class","b7");
     });
	$(".b9").bind("mouseout",function(){
		$(".b9").attr("class","b10")
	}).bind("mouseover",function(){
	 	$(".b10").attr("class","b9");
     });
	$(".b11").bind("mouseout",function(){
		$(".b11").attr("class","b12")
	}).bind("mouseover",function(){
	 	$(".b12").attr("class","b11");
     });

	//div services点击显示隐藏
	$(".bt1").click(function(){
    $(".p1-1").toggle();
     });
	$(".bt2").click(function(){
    $(".p2").toggle();
     });
	$(".bt3").click(function(){
    $(".p3").toggle();
     });
    $(".bt4").click(function(){
    $(".p4").toggle();
     });
    $(".bt5").click(function(){
    $(".p5").toggle();
     });
    $(".bt6").click(function(){
    $(".p6").toggle();
     });


    //
    $(".note2").bind("mouseenter",function(){
		$(".note5").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".note5").fadeOut("slow");
     });
	$(".note3").bind("mouseenter",function(){
		$(".note5").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".note5").fadeOut("slow");
     });
	$(".note4").bind("mouseenter",function(){
		$(".note5").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".note5").fadeOut("slow");
     });



 	//jq ： div ga12要放在div g1里面，不然会出错；
 	//淡入淡出
 	$(".g2").bind("mouseenter",function(){
		$(".g1-2").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-2").fadeOut("slow");
     });
	$(".g3").bind("mouseenter",function(){
		$(".g1-3").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-3").fadeOut("slow");
     });
	$(".g4").bind("mouseenter",function(){
		$(".g1-4").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-4").fadeOut("slow");
     });
	$(".g5").bind("mouseenter",function(){
		$(".g1-5").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-5").fadeOut("slow");
     });
	$(".g6").bind("mouseenter",function(){
		$(".g1-6").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-6").fadeOut("slow");
     });
	$(".g7").bind("mouseenter",function(){
		$(".g1-7").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-7").fadeOut("slow");
     });
	$(".g8").bind("mouseenter",function(){
		$(".g1-8").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-8").fadeOut("slow");
     });
	$(".g9").bind("mouseenter",function(){
		$(".g1-9").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-9").fadeOut("slow");
     });
	$(".g10").bind("mouseenter",function(){
		$(".g1-10").fadeIn("slow");
	}).bind("mouseleave",function(){
	 	$(".g1-10").fadeOut("slow");
     });


	$(".container8-1").bind("mouseenter",function(){
		$(".container8-1").attr("class","container8-2")
	}).bind("mouseleave",function(){
	 	$(".container8-2").attr("class","container8-1");
     });


	//滑动
	$(".ctr3").bind("mouseenter",function(){
		$(".show3").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".show3").slideUp("slow");
     });
	$(".ctr4").bind("mouseenter",function(){
		$(".show4").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".show4").slideUp("slow");
     });
	$(".ctr5").bind("mouseenter",function(){
		$(".show5").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".show5").slideUp("slow");
     });
	$(".ctr6").bind("mouseenter",function(){
		$(".show6").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".show6").slideUp("slow");
     });


	//
	$(".container9-3").bind("mouseenter",function(){
		$(".ccon3").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".ccon3").slideUp("slow");
     });
	$(".container9-4").bind("mouseenter",function(){
		$(".ccon4").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".ccon4").slideUp("slow");
     });
	$(".container9-5").bind("mouseenter",function(){
		$(".ccon5").slideDown("slow");
	}).bind("mouseleave",function(){
		$(".ccon5").slideUp("slow");
     });


 	
 	$(".container10").hover(function() {
		$(".container10-1").show();
	},function() {
	 	$(".container10-1").hide();
     });

	/*图片轮播的基本原理*/
	//$("ul").animate({"marginLeft":-800},1000);
	/*给ul添加样式，设置两个变量*/
	var len = $(".focus ul li").length;  //获取焦点图的个数
	//console.log(len); //5
	var sWidth = $(".focus").width();  //获取.focus div 的宽度
	//console.log(sWidth); //800
	//给ul设置宽度，动态获取
	$(".ful").css("width",sWidth * (len));
	var aa = $(".ful").width(); //计算ul的宽度
	//console.log(aa);
	//根据index值计算ul元素的left值
	var index = 0;
	//左边的按钮
	$(".pre").click(function() {
		//index = index - 1;
		index -= 1;
		if(index == -1){
			index = len -1;
		}
		showPic(index);
	});
	//右边的按钮
	$(".next").click(function() {
		//index = index + 1;
		index += 1;
		//判断的条件必须是全等于号
		if(index == len){
			index = 0;
		}
		showPic(index);
	});
	/*显示图片的函数*/
	function showPic(index) {
		 nowleft = -index * sWidth;
		$(".ful").stop().animate({"marginLeft":nowleft},300);
		//当前的数字块切换到选中的效果
		$(".span1 span").stop().animate({"opacity":0.4},300).eq(index).stop().animate({"opacity":1},300);
	}
	
	//定义一个清除样式的变量stopPic
	var stopPic = null;
	//hover事件包括mouseenter和mouseleave两个函数，第一个代表mouseenter，
	//第一个函数代表mouseleave
	$(".focus").hover(function() {
		clearInterval (stopPic);
	},function() {
		stopPic = setInterval(function(){
		//顺序播放
		showPic(index);
		index++;
		if(index == len){
			index = 0;
		}
		},1000);
	}).trigger("mouseleave");
	//.trigger("mouseleave")的作用 ：初始化执行mouseleave
	//添加透明的上下页按钮
	$(".page").css("opacity",0.2);
	//鼠标滑过上下按钮的透明度减低
	$(".page").hover(function() {
		$(this).css("opacity",0.5);
	},function() {
		$(this).stop().animate({"opacity":0.2},300);
	})
	//添加半透明的背景条
	$(".btnBg").css("opacity",0.2);
	//获取和 li 同数量的span标签
	var btn = "<div class='span1'>";
	for(var i = 0; i < len; i++){
		 btn += "<span></span>";
	}
	btn += "</div>"
	//在span1 的 div中添加span标签
	$(".focus").append(btn);
	//为小按钮添加鼠标滑入事件
	$(".span1 span").css("opacity",0.4).mouseover(function() {
		index = $(".span1 span").index(this);
		showPic(index);
	}).eq(0).trigger("mouseover");


   	
     


 });
	//标题滚动
	var titleWorld = "欢迎来到猫咪俱乐部-(>^ω^<)喵";
		var titleChange = " " + titleWorld;
		function titleScroll() {
			if(titleChange.length < titleWorld.length){
				titleChange += titleWorld;
			}
			titleChange=titleChange.substring(1,titleChange.length);
			//console.log(titleChange.length);
			document.title = titleChange.substring(0,titleWorld.length);
		 t = setTimeout('titleScroll()',300);
			
		}
		titleScroll();
	
//文字自动轮播
function note() {
	function up() {
		$(".notelist>ul").stop().animate({marginTop: "-200px"},1000,
		function() {
			$(".notelist>ul>li:lt(2)").appendTo($(".notelist>ul"));
			$(".notelist>ul").css("marginTop",0);
		});
	}
	

	var autoUp = null;
	$(".notelist").mouseover(function() {
		clearInterval(autoUp);
		autoUp = null;
	});

	function autoPlay() {
		autoUp = setInterval(function(){
			up();
		},1500);
	}
	$(".notelist").mouseout(function() {
		autoPlay();
	});
	autoPlay();
}


