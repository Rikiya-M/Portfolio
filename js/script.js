

var splash_text = $.cookie('accessdate'); 
var myD = new Date();
var myYear = String(myD.getFullYear());
var myMonth = String(myD.getMonth() + 1);
var myDate = String(myD.getDate());
    
if (splash_text != myYear + myMonth + myDate) {
	$("#splash").css("display", "block");
	setTimeout(function () {
		$("#splash").fadeOut(1000, function () {
		var myD = new Date();
		var myYear = String(myD.getFullYear());
		var myMonth = String(myD.getMonth() + 1);
		var myDate = String(myD.getDate());
		$.cookie('accessdate', myYear + myMonth + myDate); 
	});
}, 1000);
}else {
$("#splash").css("display", "none");
}  





$(window).on('load',function(){	

		var grid = new Muuri('.grid', {
	
		showDuration: 600,
		showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		hideDuration: 600,
		hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
			

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
