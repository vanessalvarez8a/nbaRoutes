var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

  $scope.teamData = teamData;
  // console.log($scope.teamData);

  //console.log($scope)

  $scope.newGame = {};
  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function() {
    // $scope.showNewGameForm = !scope.showNewGameForm;
    $scope.showNewGameForm = true;
  }

  if ($stateParams.team === 'utahjazz') {
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if ($stateParams.team === 'losangeleslakers') {
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = 'images/lakers-logo.png';
  } else if ($stateParams.team === 'miamiheat') {
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  }

  $scope.submitGame = function() {
    $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
    teamService.addNewGame = $scope.newGame
    .then(function() {
      teamService.getTeamData($stateParams.team)
    .then(function(response) {
      $scope.teamData = response;
      $scope.newGame = {};
      $scope.showNewGameForm = false;
    })
    })

  }


});
