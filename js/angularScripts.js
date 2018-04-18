//Angular Scripts, Data binfing and controllers written by James Warner

//module with no dependencies
var app = angular.module("appModule", ['ngRoute']);

 app.config(
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'homePageNavigation'
      }).  
        when('/contactForm', {
        templateUrl: 'pages/contactForm.html',
        controller: 'homePageNavigation'
      }).        
        when('/external doors', {
        templateUrl: 'pages/external doors.html',
        controller: 'homePageNavigation'
      }).
        when('/fitting', {
        templateUrl: 'pages/fitting.html',
        controller: 'homePageNavigation'
      }).
        when('/frames', {
        templateUrl: 'pages/frames.html',
        controller: 'homePageNavigation'
      }).
        when('/gallery', {
        templateUrl: 'pages/gallery.html',
        controller: 'homePageNavigation'
      }).
        when('/garage doors', {
        templateUrl: 'pages/garage doors.html',
        controller: 'homePageNavigation'
      }).
        when('/information', {
        templateUrl: 'pages/information.html',
        controller: 'homePageNavigation'
      }).
        when('/internal doors', {
        templateUrl: 'pages/internal doors.html',
        controller: 'homePageNavigation'
      }).
        when('/place an order', {
        templateUrl: 'pages/place an order.html',
        controller: 'homePageNavigation'
      }).
        when('/quotes', {
        templateUrl: 'pages/quotes.html',
        controller: 'homePageNavigation'
      }).
        when('/shop', {
        templateUrl: 'pages/shop.html',
        controller: 'homePageNavigation'
      }).       
      when('/products & services', {
        templateUrl: 'pages/products & services.html',
        controller: 'homePageNavigation'
      }).
    
            when('/windows', {
            templateUrl: 'pages/windows.html',
            controller: 'homePageNavigation'
          }).
            when('/doors', {
            templateUrl: 'pages/doors.html',
            controller: 'homePageNavigation'
          }).
            when('/conservatories', {
            templateUrl: 'pages/conservatories.html',
            controller: 'homePageNavigation'
          }). 
            when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'homePageNavigation'
          }). 
            when('/custom', {
            templateUrl: 'pages/custom.html',
            controller: 'homePageNavigation'
          }).
    
      when('/about us', {
        templateUrl: 'pages/about us.html',
        controller: 'homePageNavigation'
      }).
      when('/faq', {
        templateUrl: 'pages/faq.html',
        controller: 'homePageNavigation'
      }).
      when('/contact us', {
        templateUrl: 'pages/contact us.html',
        controller: 'homePageNavigation'
      }).
          otherwise({
            redirectTo: '/home'
          });
 });


     //Controllers
     app.controller("homePageNavigation", function($scope, $http) {  

        $scope.pages = 
         [   
          {"index": 1, "page": "Products & Services", "Title": "Products & Services", "href": "#/products & services"},
          {"index": 2, "page": "About Us", "Title": "About Us", "href": "#/about us"},
        //{"index": 3, "page": "Shop", "Title": "Shop", "href": "#/shop"}, 
          {"index": 4, "page": "Gallery", "Title": "Gallery", "href": "#/gallery"},
          {"index": 5, "page": "FAQ", "Title": "FAQ", "href": "#/faq"},
          {"index": 6, "page": "Contact Us", "Title": "Contact Us", "href": "#/contact us"}       
         ]

         $scope.productsAndServices =
         [
            {"index": 1, "page": "Windows", "Title": "Windows", "href": "#/windows", "imgSrc": "resources/icon_windows.png"},
            {"index": 2, "page": "Doors", "Title": "Doors", "href": "#/doors", "imgSrc": "resources/icon_doors.png"},
            {"index": 3, "page": "Conservatories", "Title": "Conservatories", "href": "#/conservatories", "imgSrc": "resources/icon_conservatories.png"},
            {"index": 4, "page": "Services", "Title": "Services", "href": "#/services", "imgSrc": "resources/icon_services.png"},
            {"index": 5, "page": "Custom", "Title": "Custom", "href": "#/custom", "imgSrc": "resources/icon_custom.png"}        
         ]

         $scope.services = 
         [
          {"index": 1, "service": "Fitting", "description": "Paste Stakeholder description here", "href": "#/fitting"},
          {"index": 2, "service": "Quotes", "description": "Paste Stakeholder description here", "href": "#/quotes"},
          {"index": 3, "service": "Custom", "description": "Paste Stakeholder description here", "href": "#/custom"}
         ] 

         $scope.products = 
         [
          {"index": 7, "product": "Doors", "description": "Doors", "href": "#/doors"},
    //      {"index": 1, "product": "Internal Doors", "description": "Paste Stakeholder description here", "href": "#/internal doors"},
    //      {"index": 2, "product": "External Doors", "description": "Paste Stakeholder description here", "href": "#/external doors"},
    //      {"index": 3, "product": "Garage Doors", "description": "Paste Stakeholder description here", "href": "#/garage doors"},
          {"index": 4, "product": "Windows", "description": "Paste Stakeholder description here", "href": "#/windows"},
          {"index": 5, "product": "Conservatories", "description": "Paste Stakeholder description here", "href": "#/conservatories"},
          {"index": 6, "product": "Frames & Fixings", "description": "Paste Stakeholder description here", "href": "#/frames"},
         ]

         $scope.contactForm = 
         [
            {"index": 1, "page": "Contact Form", "Title": "Contact Form", "href": "#/contactForm"}   
         ]
     });


//Form

    app.controller("formController", function($scope, $http)
    {  
        $scope.insert = {};
        $scope.insertData = function(){
            $http({
                method:"POST",
                url:"http://127.0.0.1:55129/php/insert.php",
                data:$scope.insert,                
            }).success(function(data){
                if(data.error)
                    {
                        $scope.errorCustomerName = data.error.customerName;
                        $scope.errorCustomerNumber = data.error.customerNumber;
                        $scope.errorCustomerEmailAddress = data.error.customerEmailAddress;
                        $scope.errorCustomerMessage = data.error.customerMessage;
                    }
                    else
                    {
                       $scope.insert = null; 
                       $scope.errorCustomerName = null;
                       $scope.errorCustomerNumber = null;
                       $scope.errorCustomerEmailAddress = null;
                       $scope.errorCustomerMessage = null;                    
                    }
                
            })
        }

     });








