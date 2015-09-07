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
        def newBook = new Book(request.JSON)
//        if(newBook.hasErrors()){
            def results = newBook.errors.fieldErrors.toList()
            def errors = []
            for (error in results) {
                errors.add([
                        'type'          : 'invalid_entry',
                        'field'         : error.field,
                        'rejected_value': error.rejectedValue,
                        'message'       : error.defaultMessage
                ])
            }

//            render ([error: newBook.errors.fieldErrors] as JSON)
//        }
//        else{
            newBook.save()
//            render (['inserted': true] as JSON)
            render errors as JSON

//        }

    }
}
