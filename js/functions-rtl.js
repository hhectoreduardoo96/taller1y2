(function($)
{
	"use strict"
	
	/* Back To Top */
	$('#back-to-top').click(function()
	{
		// When arrow is clicked
		$('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});		
	/* Back To Top /- */
	
	/* Event - Document Ready /- */	
	$(document).ready(function($)
	{
		
		/* Color Switcher */
		$("#default").on("click",function()
		{
			$("#color" ).attr("href", "css/color-schemes/default.css");
			return false;
		});
		$("#green" ).on("click",function()
		{
			$("#color" ).attr("href", "css/color-schemes/green.css");
			return false;
		});
			
		$("#blue" ).on("click",function()
		{
			$("#color" ).attr("href", "css/color-schemes/blue.css");
			return false;
		});

		$("#salmon" ).on("click",function()
		{
			$("#color" ).attr("href", "css/color-schemes/salmon.css");
			return false;
		});

		$("#astral" ).on("click",function()
		{
			$("#color" ).attr("href", "css/color-schemes/astral.css");
			return false;
		});
			
		// picker buttton
		$(".picker_close").on("click",function()
		{
			$("#choose_color").toggleClass("position");
		});
		/* Color Switcher /- */
						
		/* Offcanvas Menu */
		$("#canvas-bar").on("click",function()
		{		
			$(".offcanvas-bars").addClass("offcanvas-bars-show");
			$("#offcanvas").addClass("offcanvas-box-show");
		});
		
		$( "#offcanvas").focusout(function() {
			$(".offcanvas-bars").removeClass("offcanvas-bars-show");
			$("#offcanvas").removeClass("offcanvas-box-show");
		});
		
		/* Our-System */
		$('.our-system').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{
				$('.our-system .service-img').addClass('animated slideInUp');
			});
		});
		
		/* ToolTip Login-Form */
		$(function () {
		 $('[data-toggle="tooltip"]').tooltip()
		})
		/*ToolTip /- */
		
		/* Partners section */
		$('.partners').owlCarousel({
			autoplay:true,
			loop:true,
			nav:false,
			rtl: true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
		/* Partners section /- */
		
		/* Business Partners  */
		$('.business-partners').owlCarousel({
			autoplay:true,
			loop:true,
			nav:false,
			rtl: true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:4
				},
				1000:{
					items:6
				}
			}
		})
		/* Business Partners /- */
		
		/*  Clients Portfolio */
		$('.clients-portfolio-box').owlCarousel({
			loop:true,
			margin: 25,
			nav:true,
			animateIn: true,
			rtl: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				},
				1100:{
					items:4
				}
			}
		})
		/*  Clients Portfolio /- */
	
		
		/*  Widgetkit  */
		$('.widgetkit-carousal').owlCarousel({
			autoplay: true,
			animateOut: 'slideOutRight',
			animateIn: 'flipInX',
			items:1,
			margin:30,
			stagePadding:30,
			smartSpeed:450,
		})
		/*  Widgetkit /- */
			
		/* Our Skill */	
		$('.skill-progress-type1').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type1_item_count = 0;
				var skill_type1_count = 0;					
				skill_type1_item_count = $( "[id*='skill_type1_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar1_count-']" ).length;
				
				for(var i=1; i<=skill_type1_item_count; i++)
				{
					skill_type1_count = $( "[id*='skill_type1_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_type1_count-"+i+"']").animateNumber({ number: skill_type1_count }, 2000);
				}			
					
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_type1_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar1_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
		/* Our Skill /- */	
			
		/* flex-slider */
		$(window).load(function() {
			$('.flexslider').flexslider({
				animation: "fade",
			});
		});
		/* Flex-Slider /- */
		
		

		/* Flex-Slider */
		$('.home-slider').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{
				$('.home-slider .slider-content').addClass('animated fadeIn');
			});
		});
		
		/* Flex-Slider /- */
	
		
		/* Audio Video */
		$('audio,video').mediaelementplayer();
		
		$('audio,video').mediaelementplayer({
			success: function(player, node) {
				$('#' + node.id + '-mode').html('mode: ' + player.pluginType);
			}
		});
		/* Audio Video /- */
		
		/* Lightbox Widget Iframe Video	*/
		$('.link-example').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
			}
		});
		/* Lightbox Widget Iframe Video/- 	*/
		
		/* Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {

				if( data["type"] == "error" ){
					$("#alert-msg").html(data["msg"]);
					$("#alert-msg").removeClass("alert-msg-success");
					$("#alert-msg").addClass("alert-msg-failure");
					$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#name").val("");
						$("#email").val("");
						$("#subject").val("");
						$("#comment").val("");
						$("#alert-msg").show();
					}    
				},
				error: function(xhr, textStatus, errorThrown) {
				//alert(textStatus);
				}
			});
			return false;
		});/* Quick Contact Form /- */
		
		/* ## Dropdown Menu ## */
		$('.responsive-caret').on('click',function() {
			var li = $(this).parent();
			if (li.hasClass('dm-active') || li.find('.dm-active').length !== 0 || li.find('.dropdown-menu').is(':visible') || li.find('.mom_custom_mega').is(':visible') ) {
			li.removeClass('dm-active');
			li.children('.dropdown-menu').slideUp();
			if (li.find('.mom_mega_wrap').length === 0) {
					li.find('.dropdown-menu').slideUp();
			}
			if (li.hasClass('mom_default_menu_item') || li.find('.cats-mega-wrap').length !== 0) {
				li.find('.dropdown-menu').slideUp();
				li.find('.mom-megamenu').slideUp();
				li.find('.sub-mom-megamenu').slideUp();
				li.find('.sub-mom-megamenu2').slideUp();
			}
			li.find('.dm-active').removeClass('dm-active');
			if (li.find('.mom_custom_mega').length !== 0) {
				li.find('.mom_custom_mega').slideUp();
			}
		
			} else {
				$('.device-menu').find('.dm-active').removeClass('dm-active');
				li.addClass('dm-active');
				li.children('.dropdown-menu').slideDown();
				if (li.find('.cats-mega-wrap').length !== 0) {
					li.find('.dropdown-menu').slideDown();
					li.find('.mom-megamenu').slideDown();
					li.find('.sub-mom-megamenu').slideDown();
					li.find('.sub-mom-megamenu2').slideDown();
				}
				if (li.find('.mom_custom_mega').length !== 0) {
					li.find('.mom_custom_mega').slideDown();
				}
			}
		});
		/* Dropdown Menu /- */
		
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		// $(".header").css("height", window_height + "px");
	});	
	/* document.ready /- */	
	
	/* Portfolio */
	var $itemsHolder = $('.portfolio-layout');
	var $itemsClone = $itemsHolder.clone(); 
	var $filterClass = "";
	$('.portfolio-categories li').click(function(e)
	{
		e.preventDefault();
		$filterClass = $(this).attr('data-value');
		if($filterClass == 'all')
		{
			var $filters = $itemsClone.find('div');
		}
		else
		{
			var $filters = $itemsClone.find('div[data-type='+ $filterClass +']');
		}
		$itemsHolder.quicksand(
		$filters,
		{
			duration: 1000
		});
	 });
	/* Portfolio /- */
	
	/* Event - Window Resize /- */
	$(window).resize(function()
	{
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
	});
	/* Event - Window Resize /- */

})(jQuery);