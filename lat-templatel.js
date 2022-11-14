// 1.HTML Fragments
// const mhs = {
//     nama: 'fadhil',
//     umur: 21,
//     nim: '2112510066',
//     email: '2112510066@student.budiluhur.ac.id'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>`;

// 2.looping
// const mhs = [
//   {
//     nama: "fadhil",
//     email: "fadhil@gmail.com",
//   },
//   {
//     nama: "rio",
//     email: "rio@gmail.com",
//   },
//   {
//     nama: "ipul",
//     email: "ipul@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`


// 3.conditionals
// ternary
// const lagu = {
//     judul: 'vision',
//     artist: 'Dreamcatcher',
//     feat: 'ollounder'
// }

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.artist} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`

// 4. Nested
// HTML Fragments Bersarang
const mhs = {
    nama: 'Muhammad Naufal Fadhil Harvian',
    semester: 3,
    mataKuliah: [
        'Jaringan Komputer',
        'Perencanaan Sumber Daya Perusahaan',
        'Sistem Informasi Manajemen',
        'Studi Kelayakan Bisnis'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`











document.body.innerHTML = el;
