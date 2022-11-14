// 1. membuat object literal
// problem tidak efektif apabila object yang banyak
// let mahasiswa = {
//     nama : 'fadhil',
//     energi : 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. membuat object dengan function declaration
// problemnya sama jaya pertama
const methodMhs = {
        makan : function(porsi){
            this.energi += porsi;
            console.log(`halo ${this.nama} selamat makan`);
        },

        main : function(jam){
            this.energi -= jam;
            console.log(`halo ${this.nama} selamat bermain!`);
        },

        tidur : function(jam){
            this.energi += jam * 2;
            console.log(`halo ${this.nama} selamat tidur!`);
        }
    }

function Mahasiswa(nama,energi){
    let mahasiswa = {};
    mahasiswa.nama = methodMhs.nama;
    mahasiswa.energi = methodMhs.energi;
    mahasiswa.makan = methodMhs.makan;
    mahasiswa.main = methodMhs.main;
    mahasiswa.tidur = methodMhs.tidur;

    return mahasiswa;
}
// let fadhil = Mahasiswa('fadhil',10);
// let ipul = Mahasiswa('ipul', 20);

// 3. membuat object dengan constructor
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain!`);
//     }
// }

// let fadhil =  new Mahasiswa('fadhil',10);