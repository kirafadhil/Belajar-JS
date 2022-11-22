// membuat object literal
// var mhs = {
//     nim : 2112510066,
//     nama : "fadhil",
//     email : "fadhil@gmail.com",
//     jurusan : "sistem informasi"
// }

// membuat object dengan function declaration
// function buatOjectMhs(nim,nama,email,jurusan){
//     var mhs = {};
//     mhs.nim = nim;
//     mhs.nama = nama;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatOjectMhs('2112510066','rio','rio@gmail.com','teknik industri');

// membuat object dengan constructor
function Mahasiswa(nama,nim,email,jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('erik','2112510777', 'erik@gmail.com', 'ilmu komunikasi');