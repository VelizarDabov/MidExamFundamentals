function solve(input){
let daysCount = Number(input.shift())
let neededPoints = Number(input.shift())
let swimmersCount = Number(input.shift())
let hotelPricePerDay = Number(input.shift())
let participationFeeperSwimmer = Number(input.shift())

let totalHotelFee = 0

let totalPoints = 0;

for(let i = 0; i < daysCount; i++){
totalHotelFee += swimmersCount * hotelPricePerDay;
totalPoints += Number(input[i]);
if( i != 0){
    totalPoints += Number(input[i - 1]) * 0.05;
}
};
let totalMoney = totalHotelFee + (participationFeeperSwimmer * swimmersCount)


if(totalPoints >= neededPoints){
    totalMoney = totalMoney * 0.75;
console.log(`Money left to pay: ${totalMoney.toFixed(2)} BGN.`)
console.log('The championship was successful!');
    
}else{
    totalMoney = totalMoney * 0.90;
    console.log(`Money left to pay: ${totalMoney.toFixed(2)} BGN.`)
    console.log('The championship was not successful.');
}
}
solve(["3", 

"500", 

"5", 

"100.9", 

"50.1", 

"100.5", 

"301.0", 

"80.0"]) 