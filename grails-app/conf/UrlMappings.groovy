class UrlMappings {

	static mappings = {

        "/api/books"(controller: "book", action: "index")
        "/api/books/$id"(controller: "book", action: "show")

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
