var app = angular.module('restprac', ['ngResource', 'ui.router', 'ui.bootstrap'])

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state("books", {
            url: "/books",
            templateUrl: "template.html",
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
                    templateUrl: "modal.html",
                    controller: "ModalController"
                }).result.then(function(result){
                        if(result){
                            return $state.transitionTo("books")
                        }
                    })
            }

        })
}])


app.factory('Book', function($resource){
    return $resource('api/books/:bookId', {bookId: '@id'},{
        'update': {method:'PUT'}
    })
})

app.controller('BookController', ['$scope', 'books',function($scope, books){
    console.log("haha")

    //$scope.book = Book.get({bookId: $scope.id})

    $scope.books = books

    console.log($scope.books.length)

}])

app.controller('ModalController', ['$scope', '$uibModal', function($scope, $uibModal){
    //$scope.dismiss = function(){
    //    $scope.dismiss()
    //}

    $scope.temp = "walaw"
    $scope.open = function(){
        console.log("nag sulod")
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: "modal.html",
            controller: "ModalInstanceController"
        })

        modalInstance.result.then(function () {
            $scope.temp = "temp variable"
        })
    }
}])

app.controller('ModalInstanceController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
    $scope.ok = function(){
        $uibModalInstance.close()
    }

    $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel')
    }
}])