var ToDoList_App = angular.module("ToDoList", ["ui.bootstrap", "firebase"]);

ToDoList_App.controller("ToDoList_Controller", function($scope, $firebase, $http){

  // Accessing the object list of items on Firebase
  $scope.list_url = "https://to-do-list-practice.firebaseio.com/ToDo_items.json";
  $scope.myJson = "";
  $http.get($scope.list_url).then(function(result) {
    $scope.myJson = result.data;
  });

  // The List of items --> the object of items is pulled down from Firebase and stored locally
  $scope.list = $scope.myJson;

  // ADD AN ITEM FUNCTION
  $scope.adding = function(key, value){
    if (key.keyCode == 13){
      if (value){
        $scope.list.list.splice(0, 0, {done: false, text: value});
        $scope.Text = null;
      }
    }
    console.log($scope.list);
  };

  // REMOVE COMPLETED ITEMS FUNCTION
  $scope.removing = function(){
    var x = $scope.list.list.length;
    $scope.list2 = [];
    for (var i = 0; i < x; i++){
      if ($scope.list.list[i].done == false){
        $scope.list2.push($scope.list.list[i]);
      }
    } $scope.list.list = $scope.list2;
  };

  // FIREBASE
  $scope.remote_list = $firebase(new Firebase("https://to-do-list-practice.firebaseio.com/" + "ToDo_items"));

  $scope.remote_list.$bind($scope, "list");
  $scope.$watch("list", function(){
    return false;
  });

});