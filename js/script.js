

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




var elemTop = [];

function PositionCheck(){

var headerH = $("#header").outerHeight(true);

	
$(".scroll-point").each(function(i) {
elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));
});
}


function ScrollAnime() {
var scroll = Math.round($(window).scrollTop());
var NavElem = $("#navi li");
$("#navi li").removeClass('current');
if(scroll >= 0 && scroll < elemTop[1]) {
$(NavElem[0]).addClass('current');
}
else if(scroll >= elemTop[1] && scroll < elemTop[2]) {
$(NavElem[1]).addClass('current');
} 
else if(scroll >= elemTop[2]) {
$(NavElem[2]).addClass('current');
} 
}




$('#navi a').click(function () {
var elmHash = $(this).attr('href'); 
var headerH = $("#header").outerHeight(true);
var pos = Math.round($(elmHash).offset().top-headerH); 
$('body,html').animate({scrollTop: pos}, 700);
return false;
});


$(window).scroll(function () {
PositionCheck();
ScrollAnime();
});


$(window).on('load', function () {
PositionCheck();
ScrollAnime();
});

$(window).resize(function() {
PositionCheck()
});





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
