'use strict';

var directives = angular.module('directives', []);
var services = angular.module('services', []);
var pageControllers = angular.module('pageControllers', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.carousel']);

var businessSite = angular.module('BusinessSite', ['ngMaterial','ngAnimate','directives','services','pageControllers']);

"use strict";

pageControllers.controller('ClientsPage', [function(){
      var ctrl = this;
      ctrl.title = "Clients";

      ctrl.slides = [          
          {'img':'images/logos/clients/USPHSEmblemColor.png', 'title':'U.S. Department of Health and Human Services', 'url':'https://www.usphs.gov/'},
          {'img':'images/logos/clients/USDA_FNS.png', 'title':'U.S. Department of Agriculture', 'url':'https://www.usda.gov/'},
          {'img':'images/logos/clients/cncs_small.png', 'title':'Corporation for National and Community Service', 'url':'https://www.nationalservice.gov/'},
          {'img':'images/logos/clients/ACCTScreen Scrap.PNG', 'title':'American College of Commerce and Technology', 'url':'http://acct.edu/'},
          {'img':'images/logos/clients/orionria.png', 'title':'ORION Investment Advisors', 'url':'http://www.orionria.com/'},
          {'img':'images/logos/clients/wcps_large.png', 'title':'Wicomico County Public Schools', 'url':'http://www.wcboe.org/'},
          {'img':'images/logos/clients/patriot.PNG', 'title':'Patriot Development Corporation', 'url':'http://www.patriotdevelopmentcorporation.com/'},
          {'img':'images/logos/clients/Marjen_Screen_Scrap.png', 'title':'Marjen IT', 'url':'http://marjenit.com/'},
          {'img':'images/logos/clients/bailey-systems-logo.png', 'title':'Bailey Systems', 'url':'http://www.baileysystems.net/'},
          {'img':'images/logos/clients/IBS_Logo.jpg', 'title':'Interim Business Solutions, LLC', 'url':'http://www.ibs-llc.us/'},
          {'img':'images/logos/clients/Centricity-Logo-web1.jpg', 'title':'Centricity Technology Partners', 'url':'http://centricity-us.com/'}
      ];      

      ctrl.getNumber = function(num) {
          return new Array(num);
      }  
      

}]);
"use strict";

pageControllers.controller('HomePage', [function(){
      var ctrl = this;
      ctrl.title = "Home";

      ctrl.slides = [
          {'img':'images/cyber-network.jpg', 'title':'Who We Are', 'text':'Providing Information Technology and Management Consulting services to federal, state, and local governments as well as private sector companies.'},
          {'img':'images/washington-dc3.jpg', 'title':'Where We Are', 'text':'With our growing local and government clients we are based out of the Washington D.C. / Northern Virgina Areas.'},
          {'img':'images/computer-color.jpg', 'title':'What We Do', 'text':'We leverage information technology so our customers can focus on their missions.'}
      ];

      ctrl.services = [
          {'icon':'card_membership', 'title':'Advisory', 'url':'capabilities.html#advisory', 'text':'Our advisory services provide an independent and objective examination of an organization’s records and activities.'},
          {'icon':'important_devices', 'title':'Cybersecurity', 'url':'capabilities.html#cyber', 'text':'Our cybersecurity services are based on the NIST Risk Management Framework (NIST SP 800-37) for federal, state and local customers. '},
          {'icon':'backup', 'title':'Software Development', 'url':'capabilities.html#software', 'text':'Our experts support multiple software development methodologies (Agile, Waterfall, Spiral, Scrum, Kanban, DevOps, etc.) to meet the differing needs of our customers.'}
      ];

      ctrl.latestNews = [
          {'date':new Date("2015-08-01 00:00:00"), 'text':'Our founder started exploring his business idea for Cyber Smart Pros.'},
          {'date':new Date("2015-11-26 00:00:00"), 'text':'Cyber Smart Pros has officially become a Virginia Limited Liability Company (LLC).'},
          {'date':new Date("2017-08-09 00:00:00"), 'text':'We have partnered with DWJ Production to deploy a new website focused at capturing the company ideals and display our ever growing web presence.'}          
      ];
      ctrl.dividerImg = 'images/cityview-above.jpg';

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