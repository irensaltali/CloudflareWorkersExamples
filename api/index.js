addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {

  var name = new URL(request.url).searchParams.get('name')
  try {
    return new Response('name has '+name.length+ ' has characters.', {
      headers: { 'content-type': 'text/plain' },
    })
  } catch{
    return new Response("Invalid request", {
      status: 400
    })
  }
}
