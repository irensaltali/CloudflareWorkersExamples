addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  if (request.headers.get('cf-connecting-ip') !== '188.119.39.87') {
    return new Response("Forbidden", {
      status: 403
    })
  } else {
    //Acctually you new to return  origin response here:
    //return fetch(request)
    return new Response('You are good to go', {
      headers: { 'content-type': 'text/plain' },
    })
  }
}
