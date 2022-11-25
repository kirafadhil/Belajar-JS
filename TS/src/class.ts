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
    phone: string;
    private _email: string="";

    constructor(phone:string, name:string, age:number){
        super(name, age);
        this.phone = phone;
    }

    getRole(): {read:boolean, write:boolean}{
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value:string){
        if(value.length < 5){
            this._email = 'email salah coeg';
        } else {
            this.email = value;
        }
    }
    get email():string {
        return this._email;
    }
}

let admin = new Admin('0812913','baby',20);
admin.getRole();
admin.getName();
admin.setName('karin');
admin.phone;

admin.email = 'a@gmail.com';
console.log(admin.email);

admin._email;
