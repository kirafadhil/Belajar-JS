// const methodMhs = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     },

//     main : function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain!`);
//     },

//     tidur : function(jam){
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama} selamat tidur!`);
//     }
// }

// function Mahasiswa(nama,energi){
// let mahasiswa = Object.create(methodMhs);
// mahasiswa.nama = nama;
// mahasiswa.energi = energi;  

// return mahasiswa;
// }
// let fadhil = Mahasiswa('fadhil',10);
// let ipul = Mahasiswa('ipul', 20);


// versi protoype
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;  
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama} , selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam ;
//     return `Halo ${this.nama} , selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama} , selamat tidur!`;
// }

// let fadhil = new Mahasiswa('fadhil',10);

// versi class
class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama} , selamat makan!`;
    }

    main(jam){
        this.energi -= jam ;
        return `Halo ${this.nama} , selamat bermain!`;
    }

    tidur(jam){
        this.energi += jam * 2;
        return `Halo ${this.nama} , selamat tidur!`;
    }
}
let ipul = new Mahasiswa('ipul',10);
let fadhil = new Mahasiswa('fadhil',25);