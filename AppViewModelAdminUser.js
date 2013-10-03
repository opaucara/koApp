define(['ko', 'viewModels/templateManager', 'applicationManager/AppViewModelRegularUser'], function (ko, templateManager, AppViewModelRegularUser) {
  var AppViewModelAdmin = function(){

    AppViewModelRegularUser.call(this);
    /*var params = 0;
    this.regions = {
      headerTemplate: templateManager.getVMTemplateManager({
        templateUrl: DR.constants.appUrl + 'Default'
      }),
      mainContentTemplate: templateManager.getVMTemplateManager({
        templateUrl: DR.constants.appUrl + 'Default'
      })
    };*/

    this.regions.headerTemplate.viewModules = templateManager.getVMTemplate([
      {
        name: 'HeaderArea',
        view: 'HeaderAdminArea',
        module: 'viewmodels/HeaderArea',
        onModuleLoaded: function (resolveData, module) {
          resolveData(new module());
        }
      }
    ]);
    this.regions.mainContentTemplate.viewModules = templateManager.getVMTemplate([
      {
        name: 'DisasterSelectionListArea',
        view: 'DisasterSelectionListAdminArea',
        module: 'viewmodels/disasterSelectionListAdminArea',
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
        view: '_FinancialForm.cshtml',
        module: 'viewmodels/financialForm/FinancialForm',
        onModuleLoaded: _.bind(function (resolveData, Module) {
          resolveData(new Module({disasterItem: this.params}));
        },this)
      }
    ]);
    
    this.initialize = function(){
      this.loadViewModule('HeaderArea');
      this.loadViewModule('DisasterSelectionListArea');
      // Temporal forced load
      //this.loadViewModule('FinancialForm');
    };
   
    Object.create(AppViewModelRegularUser.prototype);
  };

  return AppViewModelAdmin;
});