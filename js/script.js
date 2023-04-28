

var splash_text = $.cookie('accessdate'); 
var myD = new Date();
var myYear = String(myD.getFullYear());
var myMonth = String(myD.getMonth() + 1);
var myDate = String(myD.getDate());
    
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
	$("#splash").css("display", "block");//１回目はローディングを表示
	setTimeout(function () {
		$("#splash").fadeOut(1500, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
		var myD = new Date();
		var myYear = String(myD.getFullYear());
		var myMonth = String(myD.getMonth() + 1);
		var myDate = String(myD.getDate());
		$.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
	});
}, 1000);
}else {
$("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}  





$(window).on('load',function(){	

		//＝＝＝Muuriギャラリープラグイン設定
		var grid = new Muuri('.grid', {
		
		//アイテムの表示速度
		showDuration: 600,
		showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		hideDuration: 600,
		hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
			
		// アイテムの表示/非表示状態のスタイル
		  visibleStyles: {
			opacity: '1',
			transform: 'scale(1)'
		  },
		  hiddenStyles: {
			opacity: '0',
			transform: 'scale(0.5)'
		  }    
		});
	
	
		$('.sort-btn li').on('click',function(){			
			$(".sort-btn .active").removeClass("active");	
			var className = $(this).attr("class");			
			className = className.split(' ');				
			$("."+className[0]).addClass("active");			
			if(className[0] == "sort00"){					
				 grid.show('');								
			}else{											
				grid.filter("."+className[0]); 				
			}
		});
		


			
});
