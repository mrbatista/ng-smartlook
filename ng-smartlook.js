(function(angular) {

  'use strict';

  angular.module("ng-smartlook", []);

  angular.module("ng-smartlook").provider('Smartlook', SmartlookProvider);

  function SmartlookProvider() {
    var applicationStart;

    this.init = function(config) {
      if (!config || !config.apiKey) {
        throw new Error("no apiKey index");
      } else if (typeof config.apiKey !== "string") {
        throw new Error("apiKey must be a string");
      } else {
        window.smartlook || (function(d) {
          var o = window.smartlook = function() {
            o.api.push(arguments);
          };
          var h = document.getElementsByTagName('head')[0];
          var c = document.createElement('script');
          o.api = [];
          c.async = true;
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.src = 'https://rec.smartlook.com/recorder.js';
          h.appendChild(c);
        })(document);
      }

      smartlook('init', config.apiKey);
      applicationStart = new Date();
    };

    this.$get = ['$window', function($window) {
      function startToNow() {
        return new Date(new Date() - applicationStart).getUTCSeconds();
      }

      return {
        smartlook: $window.smartlook,
        startToNow: startToNow
      }
    }];
  }
})(angular);
