function softuni(input){

let employeOne = Number(input[0]);
let employeTwo = Number(input[1]);
let employeThree = Number(input[2]);

let studentCount = Number(input[3]);

let totalStudenstPerHour = employeOne + employeTwo + employeThree;

let hours = 0;

while(studentCount > 0){
studentCount -= totalStudenstPerHour;
hours++;
if(hours % 4 === 0 && hours !== 0){
    hours++
}  
}
console.log(`Time needed: ${hours}h.`);
}
softuni(['1','2','3','45'])