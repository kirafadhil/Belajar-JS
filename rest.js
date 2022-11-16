// Rest Parameter
// merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
// function myFunc(...args){
//     return args;
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
// menggunakan for..of
// let total = 0;
// for (const j of angka){
//     total += j;
// }
// return total;

// menggunakan high order function (reduce)
// return angka.reduce((a,b) => a+b)};

// console.log(jumlahkan(1,2,3,4,5));

// array destructuring
// const kel1 = ['fadhil','rio','abdul','visto'];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm : 'iqbal',
//     frontEnd1 : 'abdul',
//     frontEnd2 : 'Rio',
//     backEnd: 'fadhil',
//     ux:'visto',
//     devOps:'rika'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy("string", 1, 2, 3, "fadhil", "rio", false, true, 10, "vesta"));
