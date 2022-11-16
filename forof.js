// for..of

// cara biasa (lama)
// const mhs = ['fadhil','beby','rio'];
// for(i=0;i<mhs.length;i++){
//     console.log(mhs[i]);
// }

// cara foreach
// mhs.forEach(m => console.log(m));

// cara for..of
// for(const m of mhs){
//     console.log(m);
// }

// String
const nama = 'fadhil';
// for(const n of nama){
//     console.log(n);
// }

// const mhs = ['fadhil','beby','rio'];
// mhs.forEach((m,i)=> {
//     console.log(`${m} adalah mahasiswa ke-${i +1}`);
// });

// for (const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i +1}`);
// }

// nodelist
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n=>console.log(n.textContent));

// for(n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka(){
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));

// for..in
const mhs = {
    nama:'fadhil',
    umur:21,
    email:'fadhil@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m]);
}