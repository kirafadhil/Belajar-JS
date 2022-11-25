// export class User {
//     public name: string;
//     constructor(name:string){
//         this.name = name;
//     }
// }

// let user = new User('fadhil');
// console.log(user);

// atau bisa juga 
export class User {
    constructor(public name:string, public age:number){
    }
}

let user = new User('fadhil', 21);
console.log(user);