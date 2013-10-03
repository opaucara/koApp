//define(['ko', 'applicationManager/AppViewModelRegularUser', 'applicationManager/AppViewModelAdminUser'], function (ko, AppViewModelRegularUser, AppViewModelAdminUser) {
  //circular dependance? "requirejs dependency undefined"
define(['ko', 'applicationManager/AppViewModelRegularUser', 'applicationManager/AppViewModelAdminUser','viewModels/templateManager'], 
  function (ko, AppViewModelRegularUser, AppViewModelAdminUser, templateManager) {
  var RegionGrid = function(data) {
    var regionMapper = {};
    this.addRegion = function(region) {
      this[region.regionName] = templateManager.getVMTemplateManager({
        templateUrl: region.templateUrl
      });
      this[region.regionName]['viewModules'] = templateManager.getVMTemplate(region.data);
      //Final should be:
      //regionMapper[region.regionName] = _.pluck(region.data, 'view');
      regionMapper[region.regionName] = _.map(region.data, function(a,key){
        return {
          name: a.view.substring(1, a.view.indexOf('.')),
          key:key
        }
      })
      
      this.getRegionNameByViewName = function(view){
        var regionName = '', foundModuleRef = null;
        _.every(regionMapper, function(region,key){
          //_.findWhere([{a:1}, {a:2},{a:2}], {a:2}); Underscore 1.4.4
          foundModuleRef = _.find(region, function(a){
            return a.name == view;
          });
          return foundModuleRef? (regionName =key,false):true;
        });
        foundModuleRef.regionName = regionName;
        return foundModuleRef;
      };
    };
  };
  return RegionGrid;
});