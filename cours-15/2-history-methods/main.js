(function() {

	/**
	 * history.back()
	 * history.forward()
	 * history.pushState()
	 * history.replaceState()
	 */
	let elsAction = document.querySelectorAll('[data-js-action]'),
		elIpsum = document.querySelector('[data-js-ipsum]');
	

	for (let i = 0, l = elsAction.length; i < l; i++) {

		elsAction[i].addEventListener('click', function(e) {
			
			let action = elsAction[i].dataset.jsAction;
			console.log(action);



			
		});
	}



	/**
	 * history.go();
	 */

	let elSelect = document.querySelector('[data-js-select]');

	elSelect.addEventListener('change', function() {



	});



	/**
	 * Comportements à l'événement 'popstate'
	 */





})();