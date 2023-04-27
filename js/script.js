

$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
});





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
		
		//＝＝＝並び替えボタン設定
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
		
		//＝＝＝ Fancyboxの設定
		$('[data-fancybox]').fancybox({
		 thumbs: {
			autoStart: true, 
		  },	
		});
			
});
