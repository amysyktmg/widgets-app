'use strict';

angular
  .module('components.version')

  .filter('interpolate', ['version', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
