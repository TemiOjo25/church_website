$('.announcement-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: $('.prev-arrow-announcement'),
		nextArrow: $('.next-arrow-announcement')
	});

	$('.events').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: $('.prev-arrow-events'),
		nextArrow: $('.next-arrow-events')
	});
	
	$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});


$('.slidemedia').carousel({
  interval: 0
})


