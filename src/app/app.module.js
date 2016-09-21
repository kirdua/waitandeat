(function(){ 
    'use strict';
    
    angular
      .module('app', [
        //Angular Modules,
        'ngRoute',

        //Third Party Modules
        'firebase',
        
        //custom modules
        'app.auth',
        'app.core',
        'app.landing',
        'app.layout',
        'app.waitList'
        
    ]);
    
})()