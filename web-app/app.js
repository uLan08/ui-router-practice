var app = angular.module('restprac', ['ngResource', 'ui.router'])

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider.state("books", {
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