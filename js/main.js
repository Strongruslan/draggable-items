$(document).ready(function(){


	var $grid = $(".grid").isotope({
		itemSelector: '.items-wrapper',
		stagger: 30,

		masonry:{
			columnWidth: '.grid-sizer'
		},

		hiddenStyle: {
			opacity: 0,
			transform: 'scale(.1)'
		},

		visibleStyle: {
			opacity: 1,
			transform: 'scale(1)'
		}

	});


	$('.buttons').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
// use filterFn if matches value
$(".grid").isotope({ filter: filterValue });
});

	$(".btn-all").toggleClass('is-checked');

	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

	

// initialize Packery
$grid.packery({

});

// make all grid-items draggable
$grid.find('.items-wrapper').each( function( i, gridItem ) {
	var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});


});
