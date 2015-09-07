package rest.practice

import grails.converters.*

class BookController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]


    def index() {
        render Book.list() as JSON
    }

    def show(){
        render Book.get(params.id) as JSON
    }

    def save(){
        def newBook = Book(request.JSON)
        newBook.save()
        render {['inserted': true]} as JSON
    }
}
