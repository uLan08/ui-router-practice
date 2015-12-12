class UrlMappings {

	static mappings = {
        "/api/books"(resources:'book')
		"/books"(view:'index')
		"/modal"(view:'index')
		"/"(view:'index')
	}
}
