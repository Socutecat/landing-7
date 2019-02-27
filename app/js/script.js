

$(document).ready(function(){
	$(".member-navigation").on("click", "a", function(e){
	e.preventDefault()
    $(".member-navigation a").removeClass("active"); //удаляем класс во всех вкладках
    $(this).addClass("active"); //добавляем класс текущей (нажатой)
})
});


function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items: 4,
		nav: true,
		loop: true,
		dots: false,
		responsiveClass: true,
		responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        769:{
          items: 4
        }
    }
	});
}

function carousel_init() {
	$(".slide-one").owlCarousel({
		items: 4,
		nav: true,
		loop: true,
		dots: false,
		responsiveClass: true,
		responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        769:{
          items: 4
        }
    }
	});
}
function carousel_init_2() {
	$(".slide-two").owlCarousel({
		items: 1,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 1
        }
    }
	});
}

function isotope_init(){
var $grid = $('.grid').isotope({
	// options
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
  });


$('.filter-button-group').on('click', 'button', function(){
	$('.is-checked')[0].classList.remove('is-checked');
	$(this)[0].classList.add('is-checked');
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter: filterValue});
})
}

function to_top(){
	var btn = $ ('.totop-button');
		$(window).scroll (function(){
			if ($(window).scrollTop() > 300){
				btn.addClass('show');
			}
			else{
				btn.removeClass('show');
			}
		});

		btn.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop:0}, '300');
		});
}

$(document).ready(function(){
	carousel_init();
	carousel_init_2();
	isotope_init();
	to_top();
});
