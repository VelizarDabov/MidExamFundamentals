function blackFlag(input){

const daysPlundered = Number(input.shift());
const dailyPlundered = Number(input.shift());
const target = Number(input.shift());

let totalPlundered = 0;

for(let i = 1; i <= daysPlundered; i++){
    totalPlundered += dailyPlundered;

    if( i % 3 === 0){
        totalPlundered += dailyPlundered * 0.5;
    }
    if(i % 5 === 0){
        totalPlundered -= totalPlundered * 0.3;
    }
}
if(target <= totalPlundered){
    console.log(`Ahoy! ${totalPlundered.toFixed(2)} plunder gained.`);
}else{
    let percentPlunder= (totalPlundered / target) * 100;

    console.log(`Collected only ${percentPlunder.toFixed(2)}% of the plunder.`);
}

}
blackFlag(["10", "20", "380"])