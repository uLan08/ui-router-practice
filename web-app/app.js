var app = angular.module('restprac', ['ngResource', 'ui.router'])

app.config(['$stateProvider', function($stateProvider){
    $stateProvider.state("allBooks", {
        url: "/books",
        templateUrl: "/template.html",
        resolve: {
            Book: 'Book',
            books: ['Book', function(Book){
                return Book.query()
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


    //$scope.book = Book.get({bookId: $scope.id})

    $scope.books = books

    console.log($scope.books.length)



}])