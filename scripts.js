$(function(){$('a[href^="#"]').click(function(){var elementClick=$(this).attr("href");var destination=$(elementClick).offset().top;jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop:destination},800);return false;});$('.slider').slick({slidesToShow:1,slidesToScroll:1,arrows:true,autoplay:false,autoplaySpeed:2000,prevArrow:'<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',nextArrow:'<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',});$('.slide-vk').slick({slidesToShow:1,slidesToScroll:1,fade:true,arrows:false,autoplay:true,dots:true,speed:1500,autoplaySpeed:2500,});});