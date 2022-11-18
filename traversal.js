// const x = document.querySelector('.close');
// const card = document.querySelector('.card');

// x.addEventListener('click', function(){
//   card.style.display = 'none';
// });

// DOM TRAVERSAL
// const close = document.querySelectorAll(".close");

// for( let i=0; i<x.length; i++){
//     x[i].addEventListener('click', function(event){
//         // x[i].parentElement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';
//     });
// }

// close.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(){
//         alert('OK!');
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
  }
});
