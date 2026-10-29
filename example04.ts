//tuple use kore 1ta function theke multiple value retrun korte pari;

function divide(a:number, b:number): [number, number]{
const quotient = Math.floor(a/b);
const reminder =a% b;
return [quotient, reminder]
}

const result =divide (7,3)
console.log(result)