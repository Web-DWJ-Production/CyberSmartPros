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