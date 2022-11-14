// const Mahasiswa = function(){
//     this.nama = 'fadhil';
//     this.umur = 21;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun.`);
//     }

//     setInterval(() =>{
//         console.log(this.umur++);
//     }, 500);


// }

// const fadhil = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function (){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu,dua] = [dua,satu];
    }


    this.classList.toggle(satu);
    setTimeout( () => {
        this.classList.toggle(dua);
    },600);

});