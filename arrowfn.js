// function expression
// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }

// arrow function
// const tampilNama = (nama) => { return `Halo ${nama}`;
// }

// kalau 1 parameter tidak perlu pakai tanda kurung, 
// lalu kalau misalnya isi functionnya return saja tidak perlu ketik return dan kurung kurawalnya
// implisit return
// const tampilNama = nama => `Halo ${nama}`;

// const tampilUmur = () => "halo coeg!";


let mhs = ['fadhil','rehan','ipul'];

// let jumlahHuruf = mhs.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mhs.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mhs.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);