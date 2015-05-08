angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
        console.log("INside app controller")
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SigninCtrl', function($scope,$state) {
        console.log("Inside Sign in controller")
        $scope.signin={};
  $scope.new_page = function(){
        alert("Hello");
      $state.go('app.token',{},{reload: true})

  }
})
    .controller('TokenCtrl',function($scope,$state){
        $scope.project_list = function(){
            $state.go('app.projects',{},{reload: true})

        }
    })
    .controller('ProjectCtrl',function($scope,$state){
        $scope.get_organization = function(){
            $state.go('app.organization',{},{reload: true})

        }
//        $scope.get_project_detail = function(){
//            $state.go('app.project_detail',{},{reload: true})
//
//        }
        $scope.project_add = function(){

            $state.go('app.add_project',{},{reload: true})


        }
        $scope.groups = [];
        for (var i=0; i<5; i++) {
            $scope.groups[i] = {
                name: i,
                items: []
            };
            for (var j=0; j<3; j++) {
                $scope.groups[i].items.push(i + '-' + j);
            }
        }

        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function(group) {


            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };

    })
.controller('AddProjectCtrl',function(){

    })
.controller('OrganizationCtrl',function($scope,$state){
        $scope.get_contact = function(){

            $state.go('app.contact',{},{reload: true})


        }


        $scope.organization_add = function(){

            $state.go('app.add_organization',{},{reload: true})


        }


        $scope.groups = [];
        for (var i=0; i<5; i++) {
            $scope.groups[i] = {
                name: i,
                items: []
            };
            for (var j=0; j<3; j++) {
                $scope.groups[i].items.push(i + '-' + j);
            }
        }

        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };
    })
    .controller('AddOrganizationCtrl',function(){

    })

.controller('ContactCtrl',function($scope,$state){

        $scope.contact_add = function(){

            $state.go('app.add_contact',{},{reload: true})


        }
})
.controller('AddOrganizationCtrl',function(){

})
.controller('AddContactCtrl',function(){

    });