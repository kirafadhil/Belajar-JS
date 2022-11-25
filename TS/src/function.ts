// type data pada balikan function

function getName():string {
    return 'hello fadhil!'
}
console.log(getName())

function getAge():number {
    return 21
}

function printName(): void {
    console.log('print name')
}

printName()


////////////////////

function perkalian(val1:number,val2:number):number {
    return val1*val2
}

const result = perkalian(8,5)
console.log(result)

// function as type
type Tambah = (val1:number, val2:number) => number

const Add: Tambah = (val1:number, val2:number): number => {
    return val1*val2
}

// default parameter
const fullName = (first:string, last:string = 'Naufal Fadhil'): string => {
    return first + '' + last;
}
console.log(fullName('kira'))

// optional parameter
const getUmur = (val1:string, val2?:string): string => {
    return val1+" "+val2;
}
console.log(getUmur('A'));

