app.controller('BookController', ['$scope', 'books',function($scope, books){
    console.log("haha")

    //$scope.book = Book.get({bookId: $scope.id})

    $scope.books = books

    console.log($scope.books.length)

}])
