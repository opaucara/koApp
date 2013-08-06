define([
	'jquery',
  'knockout'
], function ($, ko) {
	var Faqs = function(){
    var that = this;
    this.faqList = ko.observableArray();
    $.ajax({
      url: 'getFaqs'
    }).done(function( data ) {
      ko.utils.arrayPushAll(that.faqList(), data);
      that.faqList.valueHasMutated();
    });

		
	};
	return Faqs;
});