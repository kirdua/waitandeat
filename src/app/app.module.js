(function(){ 
    'use strict';
    
    angular
      .module('app', [
        //Angular Modules,
        'ngRoute',

        //Third Party Modules
        'firebase',
        
        //custom modules
        'app.landing',
        'app.waitList'
        
    ]);
    
})()