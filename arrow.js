// function declaration

// function getInput(number){
//     const result=number*3;
//     return result;
// }

//function expression

// const triple=function getInput(number){
//     const result=number*3;
//     return result;
// }

// arrow Function 

const result=Number=>Number*3;
const item=(x,y,z=3)=>x+y+z;
const items=(x,y,z)=>{
    const first=(x+y);
    const second=(y+z);
    const third=(z+x);

    const total=first*second*third;
    return total;
}
const solution=items(5,6,7);
console.log(solution);