'use strict';
(function(){ 
	// Variables
	var modals = document.querySelectorAll('.modal');
	var modalLinks = document.querySelectorAll('.show-modal');
	var closeButtons = document.querySelectorAll('.modal .close');

	// Functions
	var showModal = function(event){
		var hrefToId = this.getAttribute("href").slice(1);
		event.preventDefault();
		actionOnModals (modals, disableModals);
		document.getElementById(hrefToId).classList.add('show');
		document.querySelector('#modal-overlay').classList.add('show');
	};

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};

	var actionOnModals = function(modals, callback) {
		var modalsLength = modals.length;
		for (var i = 0; i < modalsLength; i++) {
			callback(modals, i);
		}
	}

	var disableModals = function(modals, i) {
		modals[i].classList.remove('show');
	}
	
	var fixModalClosing = function(modals, i) {
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}

	// Event listeners
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
		closeButtons[i].addEventListener('click', hideModal);
	}

	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

	actionOnModals (modals, fixModalClosing);
})();      	