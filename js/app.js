// console.log("Hola mundo desde app.js")

if (navigator.serviceWorker) {
    // console.log("si tiene service worker")
    navigator.serviceWorker.register('/sw.js')
} else {
    console.log("no tiene service worker")
}