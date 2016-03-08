var app = angular.module('app', []);

app.controller('IndexController', ['$scope', '$http', function($scope, $http){
  $scope.cat = {};
  $scope.cat = [];

  var fetchCats = function () {
    return $http.get('/cats').then(function(response){
      if(response.status !== 200){

      }

      $scope.cat = {};
      $scope.cats = response.data;
      return response.data;
    }) //Should there be a semi-colon here?
  };

  $scope.add = function(cat){
      return $http.post('/add', cat).then(fetchCats);
  };

  fetchCats();
}]);
