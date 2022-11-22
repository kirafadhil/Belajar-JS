// Spread Operator
// memecah iterables menjadi single element

// const hewan = ['ayam','sapi','kambing'];
// const sayur = ['bayam','asem','sop'];
// console.log(hewan);
// console.log(...hewan);

// menggabungkan 2 array atau lebih menggunakan spread operator
// kelebihan dari spread operator dibandingkan concat adalah dapat menambahkan elemen baru ditengah tengah dari kedua array
// console.log(...sayur, 'pizza', ...hewan);

// atau bisa juga dengan menggunakan function concat yang terdapat pada array
// untuk hasil concat itu seluruh elemen dari kedua array dan tidak dapat ditambahkan elemen lainnya ditengah tengahnya
// console.log(sayur.concat(hewan));

// untuk melakukan copy array
// const hewan = ['ayam','sapi','kambing'];
// const hewan1 = [...hewan];
// hewan1[0] = 'singa';
// console.log(hewan1);

// const liHewan = document.querySelectorAll('li');
// const hewan = [];

// cara perulangan biasa
// for (i=0;i<liHewan.length;i++){
//     hewan.push(liHewan[i].textContent);
// }
// console.log(hewan);

// cara High order function (map)
// const hewan = [...liHewan].map(h => h.textContent);
// console.log(hewan);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(huruf);
