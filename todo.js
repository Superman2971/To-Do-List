var ToDoList_App = angular.module("ToDoList", ["ui.bootstrap"]);

ToDoList_App.controller("ToDoList_Controller", function($scope){
  $scope.list = [
    {done: false, text:"First"},
    {done: false, text:"Second"},
    {done: false, text:"Third"}
    ];

  $scope.adding = function(value){
    if (value){
      $scope.list.splice(0, 0, {done: false, text: value});
      $scope.Text = null;
    }
  };

  $scope.removing = function(){
    var x = $scope.list.length ;
    $scope.list2 = []
    for (var i = 0; i < x; i++){
      if ($scope.list[i].done == false){
        $scope.list2.push($scope.list[i]);
      }    
    } $scope.list = $scope.list2;
  };

  $scope.updating = function(index){
    $scope.list.splice($scope.list[index],1);
    $scope.Test = $scope.list[index].text; 

    console.log($scope.list[index].text);
  };

  // Inserting UI Bootstrap for Tooltips

  var TooltipDemoCtrl = function ($scope) {
  $scope.done_tip = 'Completed?';
  $scope.update_tip = 'Click to Update';
};

});