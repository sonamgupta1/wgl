// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.organization', {
    url: "/organization",
    views: {
      'menuContent': {
        templateUrl: "templates/organization.html",
        controller:"OrganizationCtrl"
      }
    }
  })

      .state('app.contact', {
          url: "/contact",
          views: {
              'menuContent': {
                  templateUrl: "templates/contact.html",
                  controller:"ContactCtrl"
              }
          }
      })

  .state('app.token', {
    url: "/token",
    views: {
      'menuContent': {
        templateUrl: "templates/token.html",
          controller:"TokenCtrl"
      }
    }
  })
    .state('app.signin', {
      url: "/signin",
      views: {
        'menuContent': {
          templateUrl: "templates/signin.html",
          controller: 'SigninCtrl'
        }
      }
    })
      .state('app.add_project', {
          url: "/add_project",
          views: {
              'menuContent': {
                  templateUrl: "templates/add_project.html",
                  controller: 'AddProjectCtrl'
              }
          }
      })
      .state('app.project_detail', {
          url: "/project_detail",
          views: {
              'menuContent': {
                  templateUrl: "templates/project_detail.html"

              }
          }
      })

      .state('app.add_organization', {
          url: "/add_organization",
          views: {
              'menuContent': {
                  templateUrl: "templates/add_organization.html",
                  controller: 'AddOrganizationCtrl'
              }
          }
      })
      .state('app.add_contact', {
          url: "/add_contact",
          views: {
              'menuContent': {
                  templateUrl: "templates/add_contact.html",
                  controller: 'AddContactCtrl'
              }
          }
      })


      .state('app.projects', {
    url: "/projects/",
    views: {
      'menuContent': {
        templateUrl: "templates/projects.html",
        controller: 'ProjectCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signin');
});
