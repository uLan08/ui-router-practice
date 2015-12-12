app.factory('Book', function($resource){
    return $resource('api/books/:bookId', {bookId: '@id'},{
        'update': {method:'PUT'}
    })
})
