'use strict';

angular
  .module('components.version')

  .directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }]);
