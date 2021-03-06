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
          {'img':'images/logos/clients/USPHSEmblemColor.png', 'title':'U.S. Public Health Service', 'url':'https://www.usphs.gov/'},
          {'img':'images/logos/clients/OASH.png', 'title':'Office of the Assistant Secretary for Health (OASH)', 'url':'https://www.hhs.gov/ash'},
          {'img':'images/logos/clients/USDA_FNS.png', 'title':'Food and Nutrition Service', 'url':'https://www.fns.usda.gov/'},
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
          {'img':'images/it-pros.jpg', 'title':'Who We Are', 'text':'Innovative IT professionals committed to your success.'},
          {'img':'images/dc4.jpg', 'title':'Where We Are', 'text':'With a growing number of clients we are based out of the Washington, D.C. area.'},
          {'img':'images/computer-color.jpg', 'title':'What We Do', 'text':'We leverage information technology so our customers can focus on their missions.'}
      ];

      ctrl.services = [
          {'icon':'card_membership', 'title':'Advisory', 'url':'capabilities.html#advisory', 'text':'Our IT audit and assessments help our customers achieve and demonstrate their compliance with laws, standards and regulations.'},
          {'icon':'important_devices', 'title':'Cybersecurity', 'url':'capabilities.html#cyber', 'text':'Our cybersecurity services help our customers protect their information systems and privacy from cyber threats and cyber crime.'},
          {'icon':'backup', 'title':'Software Development', 'url':'capabilities.html#software', 'text':'Our experts apply agile and lean software development methodologies to deliver the software that customers really want.'}
      ];

      ctrl.latestNews = [
          {'date':new Date("2015-08-01 00:00:00"), 'text':'Our founder started exploring his business idea for Cyber Smart Pros'},
          {'date':new Date("2015-11-26 00:00:00"), 'text':'Cyber Smart Pros has officially become a Virginia Limited Liability Company (LLC)'},
          {'date':new Date("2016-06-01 00:00:00"), 'text':'Cyber Smart Pros gets it first customer'},          
          {'date':new Date("2017-05-01 00:00:00"), 'text':'Cyber Smart Pros becomes a verified Service Disabled Veteran Owned Small Business (SDVOSB)'},
          {'date':new Date("2017-06-01 00:00:00"), 'text':'Cyber Smart Pros becomes a certified SWaM and veteran-owned business in the State of Virginia'},        
          {'date':new Date("2017-08-01 00:00:00"), 'text':'Cyber Smart Pros hires it first employee'},
          {'date':new Date("2017-08-18 00:00:00"), 'text':'We have partnered with DWJ Production to deploy a new website focused at capturing the company ideals and display our ever growing web presence'},           
          {'date':new Date("2017-09-01 00:00:00"), 'text':'Cyber Smart Pros opens an office in Leesburg, VA'}
      ];
      ctrl.dividerImg = 'images/cityview-above.jpg';

      ctrl.getNumber = function(num) {
          return new Array(num);
      }  
      

}]);
"use strict";

pageControllers.controller('JoinusPage', [function(){
      var ctrl = this;
      ctrl.title = "Join Our Team";
      
      ctrl.benifits = [
          {"id":"1", "title":"Retirement and Savings Plans", "icon":"account_balance", "content":["401K Contribution Matching – 100% up to 3%; 50% up to 5%", "401K is 100% fully vested after 90 days"]},
          {"id":"2", "title":"Health Related Benefits", "icon":"local_hospital", "content":["Medical, Dental, and Vision Insurance","Personal Accident Insurance", "Life Insurance", "Additional Voluntary Life Insurance", "Short Term Disability Insurance", "Long Term Disability Insurance", "Employee Assistance", "Health and Wellness Program", "Health Club Discount", "Medical and Dependent Care Flexible Spending Accounts"]},
          {"id":"3", "title":"Education and Career Development", "icon":"school", "content":["Reimbursement for qualifying training expenses", "Rewards for obtaining new IT certifications", "Computer-based training library on IT and information security topics and certifications", "Remote access to a virtual lab for testing/learning opportunities"]},
          {"id":"4", "title":"Paid Time Off", "icon":"flight_takeoff", "content":["Comprehensive (Vacation/Sick) Leave (15 paid days a year)", "Federal Holidays (10 paid days a year)", "Paid Maternity/Paternity Leave", "Paid Jury Duty", "Paid Bereavement Leave", "Paid Military Leave"]},
          {"id":"5", "title":"Other Work/Life Benefits", "icon":"work", "content":["Flexible Work Schedules", "Pre-tax Commuter Benefits", "Employee Referral Bonus Program", "Up to $100 per month reimbursed for cell phone", "Up to $50 per month reimbursed for home internet", "Up to $200 every 2 years for a cell phone upgrade"]}
      ];
       

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
directives.directive('scrollMovement', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {     

      var divBody = attrs.scrollcontainer;
      var scrollId = attrs.scrollid;

      element.bind('click', function() {
        var scrollOffset = $("#1")[0].offsetLeft;
        var idLoc = $(scrollId)[0].offsetLeft - scrollOffset;
        $(divBody).animate({ scrollLeft: idLoc}, "slow");
      });
    }
  }
}]);
