define([
  'jquery',
  'jqueryui',
  'knockout'
], function ($, $ui, ko) {
  ko.bindingHandlers.koAccordion = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      $(element).accordion(valueAccessor());
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever the associated observable changes value.
        // Update the DOM element based on the supplied values here.
    }
  };
});