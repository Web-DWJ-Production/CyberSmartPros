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