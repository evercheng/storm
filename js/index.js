$("body>*").bind("click",function(){});
$(function(){
   $(window).on('scroll', function(){
	  if($(window).scrollTop() > 0){
		 $('.page-header').addClass('roll');
	  } else {
		 $('.page-header').removeClass('roll');
	  }
   });
});
$(function(){
	$(".nav-show").click(function(){
		$(".page-nav").slideToggle(200);
		$(this).toggleClass("close");
	})
});
$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$(".page-gotop").fadeIn(200);	
	}
	else{
		$(".page-gotop").hide(0);
	}
});
$(".page-gotop").click(function(event) {
		$("html,body").animate({
		scrollTop:"0px"},
		666
		)
	});
});
