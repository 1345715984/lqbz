function startMove(obj,json,hanshu){//完美运动框架

		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var bstop=true;//假设都已经执行完
			for(var attr in json){//循环

				var num=0;
				if(attr=='opacity'){
					num=Math.round(parseFloat(getStyle(obj,attr)*100));//0到1之间不行,四舍五入保证文本框的数字正确
				}else{
					num=parseInt(getStyle(obj,attr));
				}
				
				var speed=(json[attr]-num)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);

				if(num!=json[attr]) bstop=false;
				
		
				if(attr=='opacity'){
					obj.style[attr]=(num+speed)/100;
				}else{
				obj.style[attr]=num+speed+'px';
				}
			}
			if(bstop){
				clearInterval(obj.timer);
				if(hanshu) hanshu();
			}
				
		},30);
	}
	function getStyle(obj,name){//获取非行间样式，解决offset问题
		if(obj.currentStyle){
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,false)[name];
		}
	}

	function getByClass(oParent, sClass){//获取类名框架
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		
		for(var i=0;i<aEle.length;i++)
		{
			if(aEle[i].className==sClass)
			{
				aResult.push(aEle[i]);
			}
		}
		
		return aResult;
	}