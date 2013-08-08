define([
  'jquery',
  'jqueryui',
  'knockout'
], function ($, $ui, ko) {
  ko.bindingHandlers.koAccordion = {
   init: function (element, valueAccessor) {
            var options = valueAccessor(),
                accordianOptions = options.options;
            $(element).accordion(accordianOptions);
        },
        update: function (element, valueAccessor) {
            var options = valueAccessor(),
                accordianOptions = options.options
                ;
            var dependency = ko.utils.unwrapObservable(options.updateOn);
                
            $(element).accordion('destroy').accordion(accordianOptions);
        }
  };
});