// destructuring function

// function kalkulasi(a,b){
//     return [a + b, a-b, a*b, a/b];
// }

// const tambah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [tambah,kali] = penjumlahanPerkalian(2,3);
// console.log(tambah);
// console.log(kali);

// const [tambah,kurang,kali,bagi="tidak ada"] = kalkulasi;

// function kalkulasi(a,b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi, kali, tambah, kurang} = kalkulasi(2,3);
// console.log(kurang);

// destructuring function arguments
const mhs1 = {
    nama: 'fadhil',
    umur: 21,
    email: 'fadhil@gmail.com',
    nilai: {
        tugas:80,
        uts:85,
        uas:65
    }
}

// function cetakMhs(nama,umur){
//     return `halo nama saya ${nama}, dan saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama,mhs1.umur)); 

function cetakMhs({nama,umur, nilai:{tugas,uts,uas}}){
    return `halo nama saya ${nama}, dan saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1)); 