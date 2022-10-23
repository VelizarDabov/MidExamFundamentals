function hunting(input){
    const days = Number(input.shift());
    const players = Number(input.shift());
    let energy = Number(input.shift());
    
    let waterPerOne = Number(input.shift());
    let foodPerOne = Number(input.shift());
    
    let totalWater = days * players * waterPerOne;
    let totalFood = days * players * foodPerOne;
    let currEnergy = energy;
    let currWater = totalWater;
    let currFood = totalFood;
    let currLength = input.length;
   
    for(let i = 1 ; i <= currLength; i++){
        let missingEnergy = input.shift().split(' ').map(Number)
        currEnergy -= missingEnergy;
        if(i === 6){
    currEnergy += currEnergy * 0.05;
    //currWater -= currWater * 0.3;
    currEnergy += currEnergy * 0.10;
    currFood -= (currFood / players);

        }  
 else if(i % 2 ===0 && i !==6){
        
    currEnergy += currEnergy * 0.05;
    currWater -= currWater * 0.3;
        }else if ( i % 3 === 0 & i !== 6){
         currEnergy += currEnergy * 0.10;
         currFood -= (currFood / players);
         
        }

        }
        if(currEnergy >= 0){
            console.log(`You are ready for the quest. You will be left with - ${currEnergy.toFixed(2)} energy!`);
            
        }else{
            console.log(`You will run out of energy. You will be left with ${currFood.toFixed(2)} food and ${currWater.toFixed(2)} water.`);
    
        }
    }
hunting(["12", 

"6", 

"4430", 

"9.8", 

"5.5", 

"620.3", 

"840.2", 

"960.1", 

"220", 

"340", 

"674", 

"365", 

"345.5", 

"212", 

"412.12", 

"258", 

"496"]) 