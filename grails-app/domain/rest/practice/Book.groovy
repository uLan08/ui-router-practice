package rest.practice

class Book {

    String title
    String author

    static constraints = {
        title nullable: false, minSize: 6
    }
}
