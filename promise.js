// menggunakan ajax
// $.ajax({
//     url:'https://www.omdbapi.com/?apikey=b8eb0ed3&t=holmes',
//     success: movies => console.log(movies) 

// });
  

// menggunakan ajax lib bawaan vanilla js
    // const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function(){
    //     if(xhr.status === 200){
    //         if(xhr.readyState === 4){   
    //             console.log(JSON.parse(xhr.response));
    //         } else{
    //            console.log(xhr.responseText);
               
    //         }
    //     }
    // }
    // xhr.open('get', 'https://www.omdbapi.com/?apikey=b8eb0ed3&t=holmes');
    // xhr.send();

// menggunakan fetch
// const movies = fetch('https://www.omdbapi.com/?apikey=b8eb0ed3&t=holmes')
//                 .then(response => response.json())
//                 .then(response => console.log(response));



// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (tepenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi(then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji ditepati!');
//     } else {
//         reject('ingkar janji!!!..');
//     }
// });

// janji1
//     .then(response => console.log('OK!' + response))
//     .catch(response => console.log('NOT OK!' + response));

// contoh 2 
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('ditepati setelah beberapa waktu!');
//         },2000)
//     } else {
//         setTimeout(() => {
//             resolve('tidak ditepati setelah beberapa waktu!');
//         },2000)
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK!' + response))
//     .catch(response => console.log('NOT OK!' + response));

// console.log('selesai');

// Promise.all()
const film = new Promise(resolve => {
    setTimeout(()=> {
        resolve([{
            judul:'Holmes',
            sutradara:'fadhil',
            pemeran:'harvian'
        }])
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(()=> {
        resolve([{
            kota:'Jakarta',
            derajat:'26',
            kondisi:'cerah berawan'
        }])
    },500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film,cuaca])
// .then(response => console.log(response));
.then(response => {
    const[film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
})


