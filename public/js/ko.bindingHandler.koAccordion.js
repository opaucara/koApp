define([
  'jquery',
  'jqueryui',
  'knockout'
], function ($, $ui, ko) {
  ko.bindingHandlers.koAccordion = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var newValue = ko.computed(function() {
        var value = ko.unwrap(valueAccessor());
        value.afterRender = function(renderedElement, loopEntryObject) {
          if ( loopEntryObject == value.data()[value.data().length - 1] ) {
            if ($(element).data('accordion')) {
              $(element).accordion('destroy');
            }
            $(element).accordion(value);
          }
        };
        return value;
      });
      return ko.bindingHandlers.foreach.init(element, newValue, allBindingsAccessor, viewModel, bindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      return ko.bindingHandlers.foreach.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
    //Alternative solution
    /*init: function (element, valueAccessor) {
      var options = valueAccessor(),
          accordianOptions = options.options;
      $(element).accordion(accordianOptions);
    },
    update: function (element, valueAccessor) {
      var options = valueAccessor(),
          accordianOptions = options.options;
      var dependency = ko.utils.unwrapObservable(options.updateOn);
          
      $(element).accordion('destroy').accordion(accordianOptions);
    }
  
    <!--ul class="question-list" data-bind="
            foreach: faqList,
            koAccordion: {
            updateOn: faqList,
            options:{
              active: false,
              autoHeight: false, 
              collapsible: true}
            }"-->

    */
  };
});