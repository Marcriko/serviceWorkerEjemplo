// console.log("SW: hola mundo");
// console.log("SW: hola mundo2222");
// console.log("SW: hola mundo");console.log("SW: hola mundo");console.log("SW: hola mundo");
// instalación del service worker
self.addEventListener('install', (event) => {
    console.log("SW: instalado")
})

//estado activate (skip waiting)
self.addEventListener('activate', (event) => {
    console.log("Sw: activado y controlando la app");
})

self.addEventListener('fetch', (event) => {


    if (event.request.url.includes('.jpg')) {
        // console.log("es un JPG CAMBIA A PNG");
        let newResp = fetch('/assets/like.jpg')
        event.respondWith(newResp)
    }

    if (event.request.url.includes('page.css')) {

        let newResponser = new 
        Response( { headers: { 'Content-Type': 'text/css' } },
            `body{
            background-color: lemonchiffon  !important;
            }`
        );



        event.respondWith(newResponser)
    }

})