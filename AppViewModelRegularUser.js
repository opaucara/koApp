define(['ko', 'viewModels/templateManager', 'applicationManager/RegionGrid','applicationManager/Region'], function (ko, templateManager, RegionGrid, Region) {
  var AppViewModelRegularUser = function(){

    this.params = null;
    /*this.regions = {
      headerTemplate: templateManager.getVMTemplateManager({
        templateUrl: DR.constants.appUrl + 'Default'
      }),
      mainContentTemplate: templateManager.getVMTemplateManager({
        templateUrl: DR.constants.appUrl + 'Default'
      })
    };

    this.regions.headerTemplate.viewModules = templateManager.getVMTemplate([
      {
        name: 'HeaderArea',
        view: 'HeaderArea',
        module: 'viewmodels/HeaderArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      }
    ]);
    this.regions.mainContentTemplate.viewModules = templateManager.getVMTemplate([
      {
        name: 'DisasterSelectionListArea',
        view: 'DisasterSelectionListArea',
        module: 'viewmodels/disasterSelectionListArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'DisasterFormArea',
        view: 'DisasterFormArea',
        module: 'viewmodels/disasterFormArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'ProfileArea',
        view: 'ProfileArea',
        module: 'viewmodels/ProfileArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'MyRequestList',
        view: 'MyRequestList',
        module: 'viewmodels/MyRequestList',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'FinancialForm',
        view: 'FinancialForm',
        module: 'viewmodels/financialForm/FinancialForm',
        onModuleLoaded: _.bind(function (resolveData, Module) {
          resolveData(new Module({disasterItem: this.params}));
        },this)
      }
    ]);*/
    this.regions = new RegionGrid();
    this.regions.addRegion({
      templateUrl: DR.constants.appUrl + 'Views/Default',
      regionName: 'headerTemplate',
      data: [{
        name: 'HeaderArea',
        view: '_HeaderArea.cshtml',
        module: 'viewmodels/HeaderArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      }]
    });

    this.regions.addRegion({
      templateUrl: DR.constants.appUrl + 'Views/Default',
      regionName: 'mainContentTemplate',
      data: [{
        name:'DisasterFormArea',
        view: '_DisasterFormArea.cshtml',
        module: 'viewmodels/disasterFormArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'DisasterSelectionListArea',
        view: '_DisasterSelectionListArea.cshtml',
        module: 'viewmodels/disasterSelectionListArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'FinancialForm',
        view: '_FinancialForm.cshtml',
        module: 'viewmodels/financialForm/FinancialForm',
        onModuleLoaded: _.bind(function (resolveData, Module) {
          resolveData(new Module({disasterItem: this.params}));
        },this)
      },
      {
        name: 'ProfileArea',
        view: '_ProfileArea.cshtml',
        module: 'viewmodels/ProfileArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      },
      {
        name: 'MyRequestList',
        view: '_MyRequestList.cshtml',
        module: 'viewmodels/MyRequestList',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      }]
    }); 
    this.loadViewModule = function(view, param){
      //TODO add error handler
      this.params = param || {};
      var regionName = '', viewModule = null;
      _.every(this.regions, function(region,key){
        viewModule = _.find(region.viewModules, function(vm){
          return vm.name === view;
        });
        return viewModule? (regionName = key,false):true;
      });
      
      this.regions[regionName].loadTemplate(viewModule);
    };

    this.initialize = function(){
      this.loadViewModule('HeaderArea');
      this.loadViewModule('DisasterSelectionListArea');
    };
    
  };

  return AppViewModelRegularUser;
});
/*
Regional manager is the head of a region
under him there could be many area managers 
*/