function couterStrike(inputArray){
    let input = inputArray.slice();
    let intitalEnergy = Number(input[0]);
    let indexOfInput = 1;
    let winCounter = 0;    
 
    while(intitalEnergy >= 0){
        let distance = input[indexOfInput++];
 
        if(distance == 'End of battle'){
            break;
        } else {
            distance = Number(distance);
        }
 
        if(intitalEnergy >= distance){
            winCounter++;
            intitalEnergy -= distance;
        } else {            
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${intitalEnergy} energy`);           
            return;
        }
 
        if(winCounter % 3 == 0){
            intitalEnergy += winCounter;
        }
    }     
    console.log(`Won battles: ${winCounter}. Energy left: ${intitalEnergy}`); 
}
couterStrike(["200", 

"54", 

"14"]) 