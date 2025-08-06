// Single Page Application (SPA) for Cloudflare Pages
// This worker handles client-side routing by serving index.html for all routes

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Handle static assets first
  if (url.pathname.includes('.')) {
    return fetch(request)
  }
  
  // For all other routes, serve index.html
  return fetch(new URL('/index.html', request.url))
}
