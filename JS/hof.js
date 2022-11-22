// function yang beroperasi pada function lain. Baik itu digunakan dalam argument,
// maupun sebagai return value ~eloquentjavascript.net

// HOF function sebagai argument
// function kerjakanTugas(matkul, selesai){
//     console.log(`mulai mengerjakan tugas ${matkul} ...`);
//     selesai()
// }

// function selesai(){
//     alert('selesai mengerjakan tugas');
// }

// kerjakanTugas('PWEB', selesai);


// HOF function sebagai return value lagi
// function ucapkanSalam(waktu){
//     return function (nama){
//         console.log(`Halo ${nama} , Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatMalam = ucapkanSalam('Malam');
// console.log(selamatMalam('fadhil'));

// function repeatLog(n){
//     for(let i = 0; i<n; i++){
//         console.log(i);
//     }
// }

// repeatLog(20);

function repeatLog(n, action){
    for(let i = 0; i<n; i++){
        action(i);
    }
}

repeatLog(20, alert);
repeatLog(5, console.log);