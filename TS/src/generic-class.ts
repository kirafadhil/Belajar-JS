// generic class
class List<T> {
    private data:T [];
    constructor(...elements: T[]){
        this.data = elements;
    }

    add(element:T): void{
        this.data.push(element);
    }
    
    addMultiple(...elements:T[]):void {
        this.data.push(...elements);
    }

    getAll():T[]{
        return this.data;
    }
}

// let numbers = new List<number>(1,2,3,4,5);
// numbers.add(7);
// numbers.addMultiple(10,11,12,16);
// console.log(numbers.getAll());

let random = new List<number | string>(1,'a',2,'b');
random.add('fadhil');
random.addMultiple('baby',23,7,18)
console.log(random.getAll());



