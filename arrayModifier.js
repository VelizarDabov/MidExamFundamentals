function arrayCommands(array){
    let index = 0
    let numbers = String(array[0]).split(' ')
    let arrayOfCommands = []
    let command = ''
    let sumForMultiplier = 0
    let decreasedArray = []
 
    index++
  while(command != 'end'){
    
    command = array[index].split(' ')
    arrayOfCommands.push(array[index])
    let firstCommand = command[0]
 
      if(firstCommand === 'swap'){
        if(index > numbers.length){
            break;
         }else{
        let temp = numbers[command[1]]
        numbers[command[1]] = numbers[command[2]]
        numbers[command[2]] = temp
         }
      }else if(firstCommand === 'multiply'){
        sumForMultiplier = Number(numbers[command[1]]) * Number(numbers[command[2]])
        numbers[command[1]] = sumForMultiplier
 
      }else if(firstCommand === 'decrease'){

        for(let i = 0;i < numbers.length;i++){
          decreasedArray.push(numbers[i] - 1)
 
        }
      }

    index++
 
  }
  if(decreasedArray === undefined || decreasedArray.length == 0) {
    console.log(numbers.join(', '))
  }else{
    console.log(decreasedArray.join(', '));
  }
 
}
arrayCommands( [ 

    '23 -2 321 87 42 90 -123', 
  
    'swap 1 88', 
  
    'swap 3 6', 
  
    'swap 1 0', 
  
    'multiply 1 2', 
  
    'multiply 2 1', 
  
    'decrease', 
  
    'end' 
  
  ] 

)
