var ToDoList_App = angular.module("ToDoList", []);

ToDoList_App.controller("ToDoList_Controller", function($scope){
  $scope.list = [
    {done: false, text:"First"},
    {done: false, text:"Second"},
    {done: false, text:"Third"}
    ];

  $scope.push = function(value){
    $scope.list.splice(0, 0, {done: false, text: value});
  };
});

$scope.remove = function(){
  alert("yep");
  // for (var i = 0; i < $scope.list.length; i++){
  //   if ($scope.list[i].done == true){
  //     $scope.list.splice(i,1);
  //   }    
  // }
};