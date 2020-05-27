addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  return new Response('<html><body><h1>Hello World</h1><h2>Please go to <a href="https://irensaltali.com">irensaltali.com</a> for more</h2></body></html>', {
    headers: { 'content-type': 'text/html' },
  })
}
