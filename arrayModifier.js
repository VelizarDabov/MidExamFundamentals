function arraymodify(input){
let array = input.shift().split(' ').map(Number);
let commands = input.shift();
while(commands !== 'end'){
let currComand = commands.split(' ')
let index1 = currComand[1];
let index2 = currComand[2];

switch (currComand[0]) {   
    case 'swap':
        let el1 = array[index1]
        let el2 = array[index2];

       array[index1] = el2;
       array[index2] = el1;
        break;
        case 'multiply':
            let element1 = array[index1]
            let element2 = array[index2];
        let result = element1 * element2;
        array[index1] = result
            break;
            case 'decrease':
        for(let i = 0; i < array.length; i++){
            array[i] -= 1;
        }
        break;   
}
 commands = input.shift();
}
console.log(array.join(', '));
}
arraymodify([ 

    '1 2 3 4', 
  
    'swap 0 1', 
  
    'swap 1 2', 
  
    'swap 2 3', 
  
    'multiply 1 2', 
  
    'decrease', 
  
    'end' 
  
  ]  )