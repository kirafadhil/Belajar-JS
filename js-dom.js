// Node Manipulation
// document.createElement()
// document.createTextNode()
// node.appenChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// ...

// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const secA = document.querySelector('section#a');
secA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);




const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);

const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru cnah');
h2Baru.appendChild(teksH2Baru);

secB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';