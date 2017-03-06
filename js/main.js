$(document).ready(function(){
    fancybox_js();
    zabiegi_slider();
    form_search();
    
    
    
    $(window).resize(function(){
	
	});	
    
    window.onscroll = function() {
    
	};
    
});

$(window).load(function() {

});

function form_search()
{
    $("#contact-form-search .search-button").click(function(){
		$("#contact-form-search").submit();

	})
}


function fancybox_js()
{
    $(".fancybox").fancybox();
}

function zabiegi_slider()
{
    $('.treatments-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}
