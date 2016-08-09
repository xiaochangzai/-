// JavaScript Document
var index = 8;
var next = 0;
var timer;
var goodsindex = 0;
var scrollvalue = 0;
var canexpand = true;
var iscloseadv = true;
var menubgs = new Array(
	{id:0,h:466},
	{id:1,h:472},
	{id:2,h:472},
	{id:3,h:496},
	{id:4,h:466},
	{id:0,h:466},
	{id:1,h:472},
	{id:2,h:472},
	{id:3,h:496},
	{id:4,h:466},
	{id:0,h:466},
	{id:1,h:472},
	{id:2,h:472},
	{id:3,h:496},
	{id:4,h:466}
	);
	
var tabs = new Array("img/tab1.gif","img/tab2.gif","img/tab3.gif","img/tab4.gif");
var goods = new Array("img/goods1.gif","img/goods01.gif","img/goods02.gif","img/goods03.gif");	
var floors = new Array("服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","服务");
//var banners = new Array("");
window.onload = function(){
	$("#main .ul li").css({"height":"31px",width:"200px",paddingLeft:"13px"});
	
	//alert($("#banner").position());
	init();
	$("#expand").click(showBigadv);
	//左侧菜单部分
	$("#main .ul li").hover(function(){
		var c = $("#main .ul li").index(this);
		$($("#main .ul li")[c]).addClass("libg1");
		$($("#main .ul li a")[c]).addClass("libg2");
		$("#" + c + " a").addClass("libg3");
		
		$("#menusbg").attr("src","img/menubg" + menubgs[c].id + ".gif");
		$("#menusbg").css("display","block");
		$("#menusbg").height(menubgs[c].width + "px");
	},hover2);
	$("#menusbg").hover(function(){
			//alert("saas");
			$("#menusbg").css("display","block");
		},hover2);
	//滚轮事件	

/**
 * @author 孙畅
 * @description 滚动事件
 */

$(window).scroll(function(){
	scrollvalue = $(window).scrollTop();
		if(scrollvalue >= 1137){
		$("#leftmenu").css("display","block");
			for(var i = 0; i < floors.length; i++){
				$("#leftmenu li a:eq("+ i +")").html((i+1) + "F");
				$("#leftmenu li a:eq("+ i +")").css("color","#625351");
			}
			changefloor(1137,2278,0,"服饰");
			changefloor(2278,3082,1,"美妆");
			changefloor(3082,3752,2,"手机");
			changefloor(3752,4317,3,"家电");
			changefloor(4317,5044,4,"数码");
			changefloor(5044,5664,5,"运动");
			changefloor(5664,6261,6,"居家");
		
	}else{
		$("#leftmenu").css("display","none");
	}
});
/**
 * banner 鼠标进入
 * 
 */
	$("#bannerpic").hover(function(){
		$("#banner .pre").css("display","block");
		$("#banner .next").css("display","block");
		clearInterval(timer);
	},function(){
		init();
		$("#banner .pre").css("display","none");
		$("#banner .next").css("display","none");
	});
	/**
	 * selector  
	 */
	$("#selectors li").hover(function(){
		clearInterval(timer);
		index = $("#selectors li").index(this);
		showPic(index);
	},init);
	$("#banner .pre").click(function(){
		index --;
		if(index < 0){
			index = 7;
		}
		showPic(index);
//		alert(index);
	});
	$("#banner .next").click(function(){
		index ++;
		if(index > 7){
			index = 0;
		}
		showPic(index);
//		alert(index);
	});
	$("#more").click(function(){
		goodsindex++; 
		//alert(goodsindex);
		if(goodsindex >= goods.length){
			goodsindex = 0;
			}
		
		$("#goods1 img").attr("src",goods[goodsindex]);
		});
	$("#tabpage ul li").hover(function(){
		var tabid = $("#tabpage ul li").index(this);
				tabhover(tabid);
		
	});
	//右侧菜单
	$("#rightmenu li").hover(function(){
		var i = $("#rightmenu li").index(this);
		$("#rightmenu li img:eq(" + i + ")").attr("src","img/rightmenu0" + (i + 1) + ".gif");
		$($("#rightmenu li span")[i]).stop().animate({
			width:100,
			right:15
		},200);
	},function(){
		var i = $("#rightmenu li").index(this);
		$($("#rightmenu li span")[i]).stop().animate({
			width:0,
			right:0
		},200,function(){
			$("#rightmenu li img:eq(" + i + ")").attr("src","img/rightmenu" + (i + 1) + ".gif");
		});
		

	});

	$("#life01 a").mouseover(function(){
		var i = $("#life01 a").index(this);
		
		tabhover(i);
		if(i == 3){
			if(canexpand == true){
				$("#tabpage").animate({
			top:71
		},100).delay(30).animate({
			top:0
		},50,function(){
			
		});
			}
		}else{
			$("#tabpage").animate({
			top:71
		},100).delay(30).animate({
			top:0
		},50);
		}
		
	});
	$("#leftmenu li").click(function(){
		var i = $("#leftmenu li").index(this);
		$("html,body").animate({
			scrollTop:$("#m" + (i+1)).offset().top 
			},500);
		});
		//楼层分类功能
	$("#leftmenu li").hover(function(){
		var i = $("#leftmenu li").index(this);
		$("#leftmenu li a:eq("+ i +")").html(floors[i]);
	},function(){
		//....................
		
		var i = $("#leftmenu li").index(this);
		$("#leftmenu li a:eq("+ i +")").html((i+1) + "F");
		$("#leftmenu li a:eq("+ i +")").css("color","#625351");
			changefloor(1137,2278,0,"服饰");
			changefloor(2278,3082,1,"美妆");
			changefloor(3082,3752,2,"手机");
			changefloor(3752,4317,3,"家电");
			changefloor(4317,5044,4,"数码");
			changefloor(5044,5664,5,"运动");
			changefloor(5664,6261,6,"居家");
	});
	$("#tabimg .close").click(function(){
		canexpand = false;
		$("#tabpage").animate({
			top:71
		},100).delay(30).animate({
			top:210
		},50,function(){
			setTimeout(function(){
				canexpand = true;
			},1000);
		});
	});

	showBigadv();
//	setTimeout(showBigadv,11000);
	}

function init(){
	timer = setInterval(function(){
		index ++;
		if(index > 7){
			index = 0;	
		}
		if(index < 0){
			index = 7;
		}
		showPic(index);
		
	},2000);
}
/**
 * @author 孙畅
 * @description function hover2鼠标移出事件
 */
function hover2(){
	var c = $("#main .ul li").index(this);
	$($("#main .ul li")[c]).removeClass("libg1");
	$($("#main .ul li a")[c]).removeClass("libg2");
	$("#" + c + " a").removeClass("libg3");
	$("#menusbg").css("display","none");
}
function showPic(index){

	$("#bannerpic ul").animate({
			left:(-index * 730) + "px",
		},500,function(){
			$("#selectors li").removeClass("bg11");
			$($("#selectors li")[index]).addClass("bg11");
		});

}
function showBigadv(){
//	alert(iscloseadv);
	if(iscloseadv == true){
		expendbigadv();
	}
	if(iscloseadv == false){
		closebigadv();
	}
	setTimeout(function(){
		if(iscloseadv == false){
		closebigadv();
	}
	},10000);
}
function expendbigadv(){
	$("#bigadv").delay(200).animate({
		height:600
		},500,function(){
			iscloseadv = false;
			
		})
	
}
function closebigadv(){
	$("#bigadv").animate({
		height:0	
			},500,function(){
				iscloseadv = true;	
			});
		
}
function tabhover(tabid){
	$("#tabimg img").attr("src",tabs[tabid]);
	$("#tabpage ul li").removeClass("tababg");
	if(tabid == 3){
		if(canexpand == true){
			$("#tabpage ul li:eq("+ tabid +")").addClass("tababg");
		}
	}else{
	$("#tabpage ul li:eq("+ tabid +")").addClass("tababg");
	}
	
}

function changefloor(min,max,s,image){
	if(scrollvalue < max && scrollvalue >= min){
		$("#leftmenu li a:eq("+ s +")").html(image);
		$("#leftmenu li a:eq("+ s +")").css("color","#c81623");
	}
		
}
