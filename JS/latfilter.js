// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi setiap video
.map(item => item.dataset.duration)

// ambil durasi menjadi float, ubah menit jadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1] ;
})
// jumlah sebuah detik
.reduce((total,detik) => total + detik, 0);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jumlahVideo} Video.`;


console.log(jsLanjut);