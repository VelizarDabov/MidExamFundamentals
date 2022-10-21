function shooting(input){
let targets = input.shift().split(' ').map(Number)
let count = 0;
let command = input.shift();
while(command !== 'End'){
    let targetIndex = Number.parseInt(command);
    
    if(targetIndex >= 0 && targetIndex < targets.length){
        for(let i = 0; i < targets.length; i++){
            let currentTarget = targets[targetIndex];

            if(i !== targetIndex && targets[i] !== -1){
                if(targets[i] > currentTarget){
                    targets[i] -= currentTarget;
                }else{
                    targets[i] += currentTarget;
                }
            }
        }
        targets[targetIndex] = -1;
        count++
    }
    command = input.shift()
}
console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shooting(["30 30 12 60 54 66", 

"5", 

"2", 

"4", 

"0", 

"End"]) 