define([
	'jquery',
  'viewModels/Faqs',
  'knockout'
], function ($, FaqsVM, ko) {
	var app = function(){
		init = function(){
      ko.applyBindings(new FaqsVM());
		};
		return {
			init: init
		};
	}();
	return app;
});