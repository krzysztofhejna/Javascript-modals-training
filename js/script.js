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
        disableModals();
        document.getElementById(hrefToId).classList.add('show');
		document.querySelector('#modal-overlay').classList.add('show');
	};

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
       
    var disableModals = function() {
        for (var i = 0; i < modals.length; i++){
            modals[i].classList.remove('show');
        }
    }

    // Event listeners
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
		closeButtons[i].addEventListener('click', hideModal);
	}
   
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
		
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})();      