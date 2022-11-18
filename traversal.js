// const x = document.querySelector('.close');
// const card = document.querySelector('.card');

// x.addEventListener('click', function(){
//   card.style.display = 'none';
// });

// DOM TRAVERSAL
const close = document.querySelectorAll(".close");

// for( let i=0; i<x.length; i++){
//     x[i].addEventListener('click', function(event){
//         // x[i].parentElement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';
//     });
// }

close.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});




// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);