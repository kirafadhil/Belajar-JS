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
        this.name = name;
    }
    setName(value: string):void {
        this.name = value;
    }
    getName = (): string =>{
        return this.name;
    }
}

let user = new User('fadhil', 21);
console.log(user);

// inheritance
class Admin extends User {
    read: boolean = true;
    write: boolean = true;

    getRole(): {read:boolean, write:boolean}{
        return {
            read: this.read,
            write: this.write
        };
    }
}

let admin = new Admin('baby',20);
admin.getRole();
admin.getName();
admin.setName('karin')