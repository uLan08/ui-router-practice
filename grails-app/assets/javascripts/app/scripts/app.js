var app = angular.module('restprac', ['ngResource', 'ui.router', 'ui.bootstrap'])

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state("books", {
            url: "/books",
            templateUrl: "assets/app/partials/template.html",
            resolve: {
                Book: 'Book',
                books: ['Book', function(Book){
                    return Book.query().$promise
                }]
            },
            controller: 'BookController'
         })
        .state("modal", {
            url: "/modal",
            onEnter: function($stateParams, $state, $uibModal){
                $uibModal.open({
                    templateUrl: "assets/app/partials/modal.html",
                    controller: "ModalController"
                }).result.finally(function(){
                        $state.go('^')
                    })
            }

        })
}])




//
//app.controller('ModalInstanceController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
//    $scope.ok = function(){
//        $uibModalInstance.close()
//    }
//
//    $scope.cancel = function(){
//        $uibModalInstance.dismiss('cancel')
//    }
//}])