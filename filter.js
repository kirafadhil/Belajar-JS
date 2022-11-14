const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >=3
// for
// const newAngka=[];
// for(let i=0;i<angka.length;i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i]);
//     }
// }

// filter
// const newAngka = angka.filter(a => a >= 3);

// map
// mengkali setiap angka dengan 2
// const newAngka = angka.map(a=> a*2);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue);

// Method Chaining
// cari angka yang lebih besar dari 5
// kalikan dengan 3
// jumlahkan 
const hasil = angka.filter(a => a>5)
    .map(a => a*3)
    .reduce((acc, curr) => acc + curr);