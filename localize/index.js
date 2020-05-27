addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  const country = request.headers.get('Cf-Ipcountry').toLowerCase()
  var requestUrl = new URL(request.url)
  if (requestUrl.pathname == '/') {
    requestUrl.pathname='/'+country;
    return Response.redirect(requestUrl, 302);
  }
  else {
    try {
      return new Response('You are in ' + country + ' and path is ' + requestUrl.pathname, {
        headers: { 'content-type': 'text/plain' },
      })
    } catch{
      return new Response("Invalid request", {
        status: 400
      })
    }
  }
}
