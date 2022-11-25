const add = (a:number,b:number):number =>{
  return a+b;
}

/// in argument type interfrence not work in argument but it will work in return 

const sub = (a:number,b:number) =>{
  //return a+b;
}


function devvid(a:number,b:number):number{
  return a/b;
}

const logger = (msg:string) => {
  console.log(msg)
}
// void means can return null and also undefonnd

// never means that we will never reach the end.
const throwError = (message:string):never =>{
    throw new Error(gg)
} 


const forCast ={
  date:new Date(),
  wheter:'gg'
}

const logWether = (forCast:{date:Date,wheter:string})  => {
    console.log(forCast.date,forCast.wheter)
}

// const logWether = ({date,wheter}:{date:Date,wheter:string})  => {
//   console.log(forCast.date,forCast.wheter)
// }