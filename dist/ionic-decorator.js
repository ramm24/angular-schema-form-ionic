angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/ionic/checkbox.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-checkbox schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div class=\"checkbox checkbox-input-hidden disable-pointer-events\"><input sf-field-model=\"\" type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\"> <i class=\"checkbox-icon\"></i></div><div class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\">{{form.title}}</div></label>");
$templateCache.put("decorators/ionic/default.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <input sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"></label>");
$templateCache.put("decorators/ionic/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\"><button class=\"button {{form.style}} {{form.fieldHtmlClass}}\" type=\"{{form.type}}\" ng-disabled=\"form.readonly\" aria-label=\"{{form.title}}\">{{form.title}}</button></div>");
$templateCache.put("decorators/ionic/textarea.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <textarea sf-field-model=\"\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea></label>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/ionic/';

  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;

  var defaults = [sfField, ngModel, ngModelOptions, condition];
  decoratorsProvider.defineDecorator('ionicDecorator', {
    'textarea': {template: base + 'textarea.html', builder: defaults},
    'checkbox': {template: base + 'checkbox.html', builder: defaults},
    'submit': {template: base + 'submit.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);
