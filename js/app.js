var app = angular.module('nbaRoutes', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    // routing configuration code
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'js/home/homeTmpl.html',
        // views: {
        //   'utahjazz': {
        //     templateUrl: 'js/teams/teamTmpl.html',
        //     controller: 'teamCtrl',
        //     resolve: {teamData:
        //        function(teamService) {return teamService.getTeamData("utahjazz");}}
        //   },
        //   'losangeleslakers': {
        //     templateUrl: 'js/teams/teamTmpl.html',
        //     controller: 'teamCtrl',
        //     resolve: {teamData:
        //        function(teamService) {return teamService.getTeamData("losangeleslakers");}}
        //   },
        //   'miamiheat': {
        //     templateUrl: 'js/teams/teamTmpl.html',
        //     controller: 'teamCtrl',
        //     resolve: {teamData:
        //        function(teamService) {return teamService.getTeamData("miamiheat");}}
        //   }
        // }
      })
      .state('teams', {
        url: '/teams/:team',
        controller: 'teamCtrl',
        templateUrl: 'js/teams/teamTmpl.html',
        resolve: {
          teamData: function(teamService, $stateParams){
            return teamService.getTeamData($stateParams.team);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
});

