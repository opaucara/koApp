require.config({
  paths: {
    jquery: 'vendor/jquery-1.7.2.min',
    jqueryui: 'vendor/jquery-ui.min',
    knockout: 'vendor/knockout-2.3.0',
    knockoutMin: 'vendor/knockout-2.3.0.debug',
    underscore: 'vendor/underscore-min'
    //bbloader: 'libs/backbone.loader',
  }
});

require([
  'deloitteApp',
  'ko.bindingHandler.koAccordion'
], function(deloitteApp) {
  deloitteApp.init();
});