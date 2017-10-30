//Have the navbar toggle only when the window has a certain size

$(window).on("load resize", function(){
	if($(window).width() < 760){
	$("nav>div>div>ul>li>a").attr("data-toggle", "collapse");
	$("nav>div>div>ul>li>a").attr("data-target", "#bs-example-navbar-collapse-1");
	} else{
		$("nav>div>div>ul>li>a").removeAttr("data-toggle", "collapse");
		$("nav>div>div>ul>li>a").removeAttr("data-target", "#bs-example-navbar-collapse-1");
	}
});


