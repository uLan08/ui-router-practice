class UrlMappings {

	static mappings = {
        "/api/books"(resources:'book')
		"/books"(uri: 'index.html')
		"/modal"(uri: 'index.html')
	}
}
