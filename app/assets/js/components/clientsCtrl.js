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