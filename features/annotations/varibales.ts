let apples:number = 4;


let colors:string[] = ["gg"]


const getConsole:(i: number) => void = (i:number)=>{
  console.log(i)
}

// delcaration,initialization-> if we do same then typescript understand by it self.
//it is call type inference
let gg = "red"


/// when to use annotation
// function that return any type

const json = '{"x":10,"y":20}';
const cordinates:{x:number,y:number} = JSON.parse(json);
console.log(cordinates)



/// variable whoes type can not be infered cooretyl

let number = [-10,-1,12];
// let numberAboveZero = true;
let numberAboveZero:boolean|number = true;
numberAboveZero = 12;