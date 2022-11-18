// DOM selection Method
// getElementById() menghasilkan elemen
// getElementsByTagName() menghasilkan HTMLCollection
// getElementsByClassName() menghasilkan HTMLCollection
// querySelector() menghasilkan elemen
// querySelectorAll() menghasilkan nodeList

// DOM SELECTION
// const jdl = document.getElementById("judul");
// jdl.style.color = "red";
// jdl.style.backgroundColor = "#ccc";
// jdl.innerHTML = "Muhammad Naufal Fadhil Harvian";

// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "salmon";
// }

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini dirubah dari javascript";

// const judul = document.querySelector('#judul');
// judul.innerHTML = 'Mekeng!';

// const p4 = document.querySelector('#b p');
// p4.style.color='green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'salmon';

// const p = document.querySelectorAll('p');
// for(let i=0;i<p.length;i++){
//     p[i].style.fontSize = '35px';
// }

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "orange";
