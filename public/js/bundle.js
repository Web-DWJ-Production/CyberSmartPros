'use strict';

var directives = angular.module('directives', []);
var services = angular.module('services', []);
var pageControllers = angular.module('pageControllers', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.carousel']);

var businessSite = angular.module('BusinessSite', ['ngMaterial','ngAnimate','directives','services','pageControllers']);

"use strict";

pageControllers.controller('HomePage', [function(){
      var ctrl = this;
      ctrl.title = "Home";

      ctrl.slides = [
          {'img':'images/demo3.jpg', 'title':'Who We Are', 'text':'Providing Information technology and management consulting services to federal, state, and local governments as well as private sector companies/'},
          {'img':'images/cyber-network.jpg', 'title':'Title 2', 'text':'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          {'img':'images/metro1.jpg', 'title':'Title 3', 'text':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      ];

      ctrl.services = [
          {'icon':'card_membership', 'title':'Advisory', 'text':'Our advisory services provide an independent and objective examination of an organization’s records and activities.'},
          {'icon':'important_devices', 'title':'Cybersecurity', 'text':'Our cybersecurity services are based on the NIST Risk Management Framework (NIST SP 800-37) for federal, state and local customers. '},
          {'icon':'backup', 'title':'Software Development', 'text':'Our experts support multiple software development methodologies (Agile, Waterfall, Spiral, Scrum, Kanban, DevOps, etc.) to meet the differing needs of our customers.'}
      ];

      ctrl.latestNews = [
          {'date':new Date("2016-07-14 00:00:00"), 'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
          {'date':new Date("2017-01-14 00:00:00"), 'text':'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'},
          {'date':new Date("2017-08-09 00:00:00"), 'text':'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'}          
      ];
      ctrl.dividerImg = 'images/demo4.jpg';

      ctrl.getNumber = function(num) {
          return new Array(num);
      }  
      

}]);
directives.directive('backImg', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      var url = attrs.backImg;
      element.css({'background-image': 'url(' + url +')'});
    }
  }
}]);