// Asynchronous Javascript :
// -Callback 
// -Promise 
// -ajax
// -async & await

// Asynchronous Callback
console.log("satu");
setTimeout(()  => {
    console.log("dua");
}, 5000);
console.log("tiga")
// hasilnya adalah mencetak satu kemudian tiga lalu dua setelah menunggu selama 5s
// bisa terjadi jeda dikarenakan adanya Event Loop

