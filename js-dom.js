// DOM selection Method
// getElementById() menghasilkan elemen
// getElementsByTagName() menghasilkan HTMLCollection
// getElementsByClassName() menghasilkan HTMLCollection
// querySelector() menghasilkan elemen
// querySelectorAll() menghasilkan nodeList

// DOM SELECTION
const jdl = document.getElementById('judul');
jdl.style.color = 'red';
jdl.style.backgroundColor = '#ccc';
jdl.innerHTML = 'Muhammad Naufal Fadhil Harvian';

const p = document.getElementsByTagName('p');
for(let i=0; i<p.length;i++){
    p[i].style.backgroundColor = 'salmon';
}

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini dirubah dari javascript';


