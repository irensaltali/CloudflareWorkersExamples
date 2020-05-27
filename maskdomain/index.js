addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  var newUrl = new URL("https://irensaltali.com")
  var currentUrl = new URL(request.url)
  newUrl.pathname = currentUrl.pathname
  return fetch(newUrl, request)
}

