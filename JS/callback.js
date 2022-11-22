// callback
// synchronous callback
// function halo(nama){
//     alert(`halo, ${nama}!`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt("masukkan nama : ");
//     callback(nama);
// }

// tampilkanPesan(nama =>{
//     alert(`halo, ${nama}!`);
// });


// const mhs = [
//     {
//         "nama":"fadhil",
//         "nim":"2112510066",
//         "jurusan":"SI",
//         "id":1
//     },
//     {
//         "nama":"rio",
//         "nim":"2112510065",
//         "jurusan":"ILKOM",
//         "id":2
//     },
//     {
//         "nama":"abdul",
//         "nim":"2112510105",
//         "jurusan":"TI",
//         "id":3
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for(let i=0;i<10000000;i++){
//         let date = new Date();
//     }
//     console.log(m.nama)}
//     );
// console.log('selesai');

// asynchronous callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             } else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', results=>{
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

// menggunakan JQuery
console.log('mulai');
$.ajax({
    url:'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
        
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');