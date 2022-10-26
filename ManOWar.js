function war(input){
let pirateShip = input.shift().split('>').map(Number);
let warShip = input.shift().split('>').map(Number);
let maxHealth = Number(input.shift())
let command = input.shift();
let count = 0;
let isAlive = true
while( command !== "Retire"){
let action = command.split(' ');
let currcommand = action.shift();
let currAction1 = Number(action.shift())
let currAction2 = Number(action.shift())
let currAction3 = Number(action.shift())

switch (currcommand) {
    case 'Fire':
        if(warShip.length < currAction1){
            break;
        }
        warShip[currAction1] -= currAction2;
        for(let i = 0; i < warShip.length; i++){
            if(warShip[i] <= 0){
                console.log('You won! The enemy ship has sunken.');
                break;
            }
        }
        break;
        case 'Defend':
        if(currAction1 > pirateShip.length ||currAction2 > pirateShip.length){
            break;
        }
        for(let i = currAction1; i <= currAction2; i++){
            if(i > pirateShip.length - 1){
                break;
            }
            if(i <= pirateShip.length){
                pirateShip[i] -= currAction3
                if(pirateShip[i] <= 0){
                    console.log(`${count} sections need repair.`);
                   
                    console.log('You lost! The pirate ship has sunken.');
                    isAlive = false;
                    break;
                }
            }
           
        }
        
            break;
            case 'Repair':
                if(pirateShip.length < currAction1){
                break;
            }
        for(let i = 0; i < pirateShip.length; i++){
            if(i == currAction1){
                if(pirateShip[i] + currAction1 >= maxHealth){
                    pirateShip[i] = maxHealth;
                }else{
                    pirateShip[i] += currAction2;
                }
          
            }
        }
        break;
    
        case 'Status':
        for(let i = 0; i < pirateShip.length - 1; i++){
            if(pirateShip[i] <= (maxHealth * 0.2)){
         count++
            }
        }
            break;
   
}


    command = input.shift();
    
}


if(isAlive){
let pirateShipSum = 0;
let warshipSum= 0; 
for(let i = 0; i < pirateShip.length; i++){
    pirateShipSum += pirateShip[i]
}
for(let i = 0; i < warShip.length; i++){
    warshipSum += warShip[i]
}

console.log(`${count} sections need repair.`);
console.log(`Pirate ship status: ${pirateShipSum}`);
console.log(`Warship status: ${warshipSum}`);
}
}
war(["12>13>11>20>66", 

"12>22>33>44>55>32>18", 

"70", 

"Fire 2 11", 

"Fire 8 100", 

"Defend 3 6 11", 

"Defend 0 3 5", 

"Repair 1 33", 

"Status", 

"Retire"]) 
/*
function manOwar(input = []) {
 
  let pirateShip = [];
  pirateShip = input.shift().split(`>`).map(Number);
  let warShip = [];
  warShip = input.shift().split(`>`).map(Number);
  let maxHealth = Number(input.shift());
  let token = input.shift();
  let isDead = false;
 
  while (token != `Retire`) {
    if (isDead === true) {
      break;
    }
    let splittedToken = token.split(` `);
    let comand = splittedToken[0];
    let indexOne = splittedToken[1];
    let indexTwo = splittedToken[2];
    let indexThree = splittedToken[3];
 
    if (comand === `Fire`) {
      fire(indexOne, indexTwo);
    } else if (comand === `Defend`) {
      defend(indexOne, indexTwo, indexThree);
    } else if (comand === `Repair`) {
      repair(indexOne, indexTwo);
    } else if (comand === `Status`) {
      status();
    }
 
    token = input.shift();
  }
 
  if (!isDead) {
    let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
    let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);
 
    console.log(`Pirate ship status: ${pirateShipPoints}`);
    console.log(`Warship status: ${warShipPoint}`);
  }
 
  function fire(index, damage) {
    index = Number(index);
    damage = Number(damage);
    if (index >= 0 && index < warShip.length) {
      warShip[index] = warShip[index] - damage;
      if (warShip[index] <= 0) {
        isDead = true;
        console.log(`You won! The enemy ship has sunken.`);
        return;
      }
    }
  }
 
  function defend(startIndex, endIndex, damage) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    damage = Number(damage);
    if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex <= pirateShip.length - 1)) {
      for (let i = startIndex; i <= endIndex; i++) {
        pirateShip[i] -= damage;
        if (pirateShip[i] <= 0) {
          isDead = true;
          console.log(`You lost! The pirate ship has sunken.`);
          return;
        }
      }
    }
  }
 
  function repair(index, health) {
    index = Number(index);
    health = Number(health);
    if (index >= 0 && index < pirateShip.length) {
      if (pirateShip[index] + health < maxHealth) {
        pirateShip[index] = pirateShip[index] + health;
      } else {
        pirateShip[index] = maxHealth;
      }
 
    }
  }
 
  function status() {
    let lessThan20Perc = maxHealth * 0.2;
    let coundSections = 0;
    for (let i = 0; i < pirateShip.length; i++) {
      if (pirateShip[i] < lessThan20Perc) {
        coundSections++;
      }
    }
    console.log(`${coundSections} sections need repair.`);
 
  }
 
}
*/