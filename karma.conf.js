//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './src',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.module.js',
      'app/common/common.module.js',
      'app/components/components.module.js',
      'app/components/version/version.module.js',
      'app/components/version/version.directive.js',
      'app/components/version/interpolate/interpolate.filter.js',
      'app/**/*.test.js',
      'views/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
