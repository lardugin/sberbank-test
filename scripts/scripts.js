$(document).ready(function(){

	//open widget setings
	$('.widget__settings-toggle').on('click', function(){
		$(this).closest('.widget__headline').find('.widget__settings-list').toggleClass('visible');
	})

	//hide widget-body
	$('.widget__icon_minimize').on('click', function(){
		$(this).toggleClass('active');
		$(this).closest('.widget').find('.widget__body').slideToggle();
		// $(this).closest('.widget').find('.widget__body').toggleClass('hide');
	})

	//flipper
	$('.widget__icon_catalog, .widget__settings-toggle_close-flipp').on('click', function(){
		$(this).closest('.flip-container').toggleClass('goFlip');
	})


	var itemTabRates = $('.rates-widget__tabs_item');
	var itemContRates = $('.rates-widget__cont_item');

	itemTabRates.click(function(){
		var coutn = itemTabRates.index($(this));
		
		itemTabRates.removeClass('active');
		$(this).addClass('active');

		itemContRates.removeClass('active');
		itemContRates.eq(coutn).addClass('active');
	});	



	var itemTabCurrency = $('.rates-widget__table_tbody a');

	itemTabCurrency.click(function(){
		var self = $(this);
		var container = self.closest('.rates-widget__cont_item');
		var itemContCurrency = container.find('.graph-container');

		var coutn = container.find('a').index($(this));

		container.find('tr').removeClass('active');
		$(this).closest('tr').addClass('active');

		itemContCurrency.removeClass('active');
		itemContCurrency.eq(coutn).addClass('active');
	});




	if ($('.fake-select').length){
	  $('.fake-select').selectbox(); 
	}




	var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	if( !mobile ) {
		var byId = function (id) { return document.getElementById(id); };

		Sortable.create(byId('sortable'), {
			animation: 150,
			forceFallback: true,
			draggable: '.widgets-list__item',
			filter: '.widget__settings-toggle, .widget__settings-list, widget__title_flipper',
			handle: '.widget__headline'
		});
	}

	
});

