var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
   
    .when("/home", {
        templateUrl : "home.html",
        controller : "homeCtrl"
    })

    .when("/aboutme",{
        templateUrl:"aboutme.html",
        controller:"aboutCtrl"
    })

    .when("/education", {
        templateUrl : "education.html",
        controller : "eduCtrl"
    })

    .when("/interest",{
        templateUrl:"interest.html",
        controller:"interestCtrl"
    })

    .when("/gallery",{
        templateUrl:"gallery.html",
        controller:"galleryCtrl"
    })
    
    .when("/contact", {
        templateUrl : "contact.html",
        controller : "contactCtrl"
    })

    .when("/form",{
        templateUrl : "form.html",
        controller : "formCtrl"
    });

});


app.controller("homeCtrl", function ($scope) {
    $scope.msg = "Welcome to homepage";
});

app.controller("aboutCtrl", function ($scope) {
    $scope.msg = "About me";
});


app.controller("eduCtrl", function ($scope) {
    $scope.msg = "Hi Academics";
});

app.controller("interestCtrl", function ($scope) {
    $scope.msg = "My interests";
});

app.controller("galleryCtrl",function($scope){
    $scope.msg="My photos";
})
app.controller("contactCtrl", function ($scope) {
    $scope.msg = "Contact me";
});

app.controller("formCtrl", function ($scope,$http) {
    $scope.msg = "Feedback form";
    $scope.postData=function(){
     
        var request=$http({

            method:'post',
            url:'http://localhost:9000/bootstrap_learning/kar.php',
            data:{
                firstname:$scope.myInput1,
                secondname:$scope.myInput2,
                email:$scope.myInput3,
                gender:$scope.myInput4,
                survey:$scope.myVar
               
            },

            headers:{'enctype':'multipart/form-data'}
        });
    }
});

app.directive('photodirective',function(httpPostFactory){
     
    return{

        restrict:'A',
        link:function(scope,element,attribute){
        
             element.bind('change',function(){

                 var formdata=new FormData();
                 formdata.append('file',element[0].files[0]);
                 httpPostFactory('kar2.php',formdata,function(){
                    console.log('callback');
                 });
             });
        }
    };

});


app.factory('httpPostFactory',function($http){
    return function(file,data,callback){
    $http({
        url:file,
        method:"post",
        data:data,
        headers:{'Content-Type':undefined}
    })
    };
});