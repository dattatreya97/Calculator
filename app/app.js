'use strict';
angular.module('myApp', [])
    .controller('Calccontroller',['$scope',function ($scope) {
            $scope.arr = "0";
            $scope.calculated = false;
            $scope.buttonrow1=["AC"];
            $scope.buttonrow5=["(",")"];
            $scope.del = "del";
            $scope.buttonrow2=[9,8,7,"/"];
            $scope.buttonrow3=[6,5,4,"*"];
            $scope.buttonrow4=[3,2,1,"-"];
            $scope.zero = 0;
            $scope.equal = "=";
            $scope.dot = ".";
            $scope.plus = "+";
            $scope.append = function (x) {
                if($scope.calculated){
                    if(!isNaN(x)){
                            $scope.arr = "";
                            $scope.arr = x;
                            $scope.calculated = false;
                    }
                    else{
                        $scope.arr = $scope.arr + '' + x;
                        $scope.calculated = false;
                    }
                }
                else if($scope.arr=="0"){
                    if(x=='/' || x=='*'){

                    }
                    else{
                        $scope.arr = x;
                    }
                }
                else {
                    $scope.arr = $scope.arr + '' + x;
                }
            };
            $scope.validparenthesis = function(){
                var count = 0;
                for(var i in $scope.arr){
                    if($scope.arr[i]==='('){
                        count++;
                    }
                    else if($scope.arr[i]===')'){
                        count--;
                    }
                }
                console.log(count);
                if(count==0)
                    return true;
                else
                    return false;
            };
            $scope.checkdecimal = function(){
                if($scope.arr.slice(-1)=='.'){
                    return false;
                }
                return true;
            }
            $scope.deletelast = function () {
                $scope.arr= $scope.arr.slice(0, -1);
            };
            $scope.clear = function () {
                    $scope.arr = 0;
                    $scope.calculated = false;
            };

            $scope.calculate=function () {
                $scope.calculated = true;
                var checkpar = $scope.validparenthesis();
                var checkdot = $scope.checkdecimal();
                if(checkpar && checkdot){
                    $scope.arr = eval($scope.arr);
                }
                else if(!checkpar){
                    $scope.clear();
                    $scope.arr = "Invalid parenthesis";
                }
                else if(!checkdot){
                    $scope.clear();
                    $scope.arr = "Invalid decimal point";
                }

            };

        }]
    );
