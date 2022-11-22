// Template Literals / Template String  sederhana
// const nama = 'Fadhil';
// const umur = 21;
// console.log(`Halo saya ${nama}, dan saya ${umur} tahun`);

// Embedded Expression
// console.log(`${alert('halo!!')}`);

// ternary operation
// const x = 7;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragment
const mhs = {
    nama : 'Fadhil',
    umur : 21,
    nim : '2112510066',
    email : 'fadhil@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span className="nim">${mhs.nim}</span>
</div>` 

console.log(el);