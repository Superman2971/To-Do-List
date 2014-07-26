var ToDoList_App = angular.module("ToDoList", ["ui.bootstrap", "firebase"]);

ToDoList_App.controller("ToDoList_Controller", function($scope, $firebase){

  // THE LIST OF ITEMS --> some starter items here
  $scope.list = [];

  // ADD AN ITEM FUNCTION
  $scope.adding = function(key, value){
    if (key.keyCode == 13){
      if (value){
        $scope.list.splice(0, 0, {done: false, text: value});
        $scope.Text = null;
      }
    }
  };

  // REMOVE COMPLETED ITEMS FUNCTION
  $scope.removing = function(){
    var x = $scope.list.length ;
    $scope.list2 = []
    for (var i = 0; i < x; i++){
      if ($scope.list[i].done == false){
        $scope.list2.push($scope.list[i]);
      }    
    } $scope.list = $scope.list2;
  };

  // CHANGE ARRAY TO OBJECT FOR FIREBASE
  $scope.object_list = {
    list_object: $scope.list
  };

  // FIREBASE
  var Fire_items = new Firebase("https://to-do-list-practice.firebaseio.com/" + "ToDo_items");
  $scope.remote_list = $firebase(Fire_items);

  $scope.remote_list.$bind($scope, "object_list");
  $scope.$watch("list", function(){
    return false;
  });

});