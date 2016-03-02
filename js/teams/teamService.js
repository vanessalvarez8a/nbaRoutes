var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    this.addNewGame = function(gameObj) { //this gameObj will have 
      // data about each individual game 
      var urlParse = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
      if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
        gameObj.won = true;
      } else {
        gameObj.won = false;
      }
      return $http({
        method: 'POST',
        url: urlParse,
        data: gameObj
      })
    }


    this.getTeamData = function(team) {
      var deferred = $q.defer();
      $http({
        method: "GET",
        url: 'https://api.parse.com/1/classes/' + team
      }).then(function(data) {
        var results = data.data.results;
        var wins = 0;
        var losses = 0;
        for (var i = 0; i < results.length; i++) {
          if(results[i].won === true) {
              wins++;
          } else if (results[i] === false) {
              losses++;
          }
        }
        results.wins = wins;
        results.losses = losses;
        deferred.resolve(results);
        console.log(results)
      })
      return deferred.promise; 

    }





});














