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
let mahasiswa = Object.create(methodMhs);
mahasiswa.nama = nama;
mahasiswa.energi = energi;

return mahasiswa;
}
let fadhil = Mahasiswa('fadhil',10);
let ipul = Mahasiswa('ipul', 20);