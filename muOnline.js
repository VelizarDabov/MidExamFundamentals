function solve(input){
    let health = 100;
    let bitcoins = 0;
    
    let dungenRooms = input.split('|');
    console.log(dungenRooms);
    let notDead = true;
    for(let i = 1; i <= dungenRooms.length * 7; i++){
        let dungenRoom = dungenRooms.shift().split(' ');
        let monster = dungenRoom[0];
        let amount = Number(dungenRoom[1]);
       
    
      switch (monster) {
        case 'potion':
        
            if(health + amount > 100){
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            console.log(`Current health: ${health} hp.`);
            }else{
            health += amount
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
            }
            break;

            case 'chest':
                if(!notDead){
                    break;
                   }
            bitcoins += amount;
            console.log(`You found ${amount} bitcoins.`);
                break;
        default:
            health -= amount
            if(health < amount){
                console.log(`You died! Killed by ${monster}.`);
               console.log(`Best room: ${i}`);
               notDead = false;

                break;
            }
            if(health > 0){
                console.log(`You slayed ${monster}.`);
            }else{
                break;
            }
    }
    }
    

if(notDead){
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);



}
}
solve (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])