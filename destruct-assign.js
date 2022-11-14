// destructuring array
// const perkenalan = ['halo','nama','saya','fadhil'];
// // const [salam,satu,dua,tiga] = perkenalan;

// // skipping items
// const [salam,,,nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...args] = [1,2,3,4,5];
// console.log(a);
// console.log(args);


// destructuring object
// const mhs = {
//     nama: 'Muhammad Naufal Fadhil Harvian',
//     umur: 21
// }

// const {nama,umur} = mhs;
// console.log(nama);


// assignment tanpa deklarasi object
// ( {nama,umur} = { nama: "Muhammad Naufal Fadhil Harvian", umur:21 });    
// console.log(nama);

// assignment ke variabel baru
// const mhs = {
//     nama: 'Muhammad Naufal Fadhil Harvian',
//     umur: 21
// }

// const {nama: n,umur: u} = mhs;
// console.log(n);


// memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Muhammad Naufal Fadhil Harvian',
//     umur: 21
// }

// const {nama: n,umur: u, email: e='email@default.com'} = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'Muhammad Naufal Fadhil Harvian',
//     umur: 21,
//     email: 'fadhil@gmail.com'
// }

// const {nama, ...args} = mhs;
// console.log(n);


// mengambil field pada object , setelah dikirim sebagai parameter untuk function
const mhs = {
    id:123,
    nama: 'Fadhil',
    umur: 21,
    email: "fadhil@gmail.com"
}

function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));