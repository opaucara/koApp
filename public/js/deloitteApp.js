define([
	'jquery',
  'viewModels/Faqs',
  'knockout'
], function ($, FaqsVM, ko) {
	var app = function(){
		var init = function(){
      ko.applyBindings(new FaqsVM());
		};
		return {
			init: init
		};
	}();
	return app;
});