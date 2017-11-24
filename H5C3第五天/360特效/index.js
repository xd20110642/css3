
	//调用全屏的方法  获取最大的盒子 让小盒子全屏  修改每个屏幕的颜色 调用插件如何修改其他的属性
	//$().方法({你要修改的东西})
	$(function(){
	$('.fullpage').fullpage({
		//设置每一屏的颜色
		sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
		//回调函数  滚动到某一屏之后调用
		afterLoad:function(link,index){
			//这里是排他思想  虽有current类  就给谁做属性
			//这个是移除所有屏幕的的current  
			$(".section").removeClass('current');
			//让动画延迟1s执行
			setInterval(function(){
				//给当前的这个屏幕添加current属性 因为这个里面是1 而实际是0
			$(".section").eq(index-1).addClass("current")
			},1000)
			
			
		}
		
		
		
		
		
		
		
		
		
		
	})
		
		
		
		
		
		
	})