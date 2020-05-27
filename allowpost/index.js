addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  if (request.method === 'POST') {
    //Acctually you new to return  origin response here:
    //return fetch(request)
    return new Response('You are good to go', {
      headers: { 'content-type': 'text/plain' },
    })
  } else {
    return new Response("Forbidden", {
      status: 403
    })
  }
}
