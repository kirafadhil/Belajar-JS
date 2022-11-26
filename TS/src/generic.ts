function getData(value:any){
    return value;
}

console.log(getData('fadhil').length);
console.log(getData(123).length);

// generic type data
function getInfo<T>(value: T){
    return value;
}
console.log(getInfo('baby violeta'));
// console.log(getInfo(123).length);

// generic on arrow function
const arrowFunc = <T>(value:T) => {

}



 

