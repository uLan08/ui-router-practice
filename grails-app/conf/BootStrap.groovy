import rest.practice.Book

class BootStrap {

    def init = { servletContext ->
        def book1 = new Book(title: "A Game of Thrones",  author: "George RR Martin")
        def book2 = new Book(title: "The Shining", author: "Stephen King")
        book1.save()
        book2.save()
    }
    def destroy = {
    }
}
