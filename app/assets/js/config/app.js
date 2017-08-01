'use strict';

var directives = angular.module('directives', []);
var services = angular.module('services', []);
var pageControllers = angular.module('pageControllers', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.carousel']);

var businessSite = angular.module('BusinessSite', ['ngMaterial','ngAnimate','directives','services','pageControllers']);
