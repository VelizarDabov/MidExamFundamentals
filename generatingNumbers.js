function solve(input) {
    let numbersLine = input.shift().split(' ').map(Number);
    let command = input.shift();
    let odd = [];
    let even = [];
    let numbersLength = numbersLine.length;
    let newArr = [];
    while (command !== 'END') {
        let currCommand = command.split(' ');

        switch (currCommand[0]) {
            case 'find': {
                let type = currCommand[1];
                if (type == 'odd') {
                    for (let i = 0; i < numbersLength; i++) {
                        if (numbersLine[i] % 2 !== 0) {
                            odd.push(numbersLine[i])
                        }
                    }
                    console.log(odd.join(' '));
                } else if (type == 'even') {
                    for (let i = 0; i < numbersLength; i++) {
                        if (numbersLine[i] % 2 === 0) {
                            even.push(numbersLine[i])
                        }
                    }
                    console.log(even.join(' '));
                }
            }

                break;
            case 'replace': {
                let value = Number(currCommand[1]);
                let replacement = Number(currCommand[2]);
                if (numbersLine.includes(value)) {
                    let index = numbersLine.indexOf(value);
                    numbersLine[index] = replacement
                }
                break;
            }
            //remove greater than value
            case 'remove': {
                let secondWord = currCommand[1];
                let value = Number(currCommand[3]);
                if (secondWord == 'greater') {
                    for (let i = 0; i < numbersLength; i++) {
                        if (numbersLine[i] <= value) {
                            newArr.push(numbersLine[i])
                        }

                    }
                    numbersLine = newArr;
                } else {
                    if (value >= 0 && value <= numbersLength) {
                        numbersLine.splice(value, 1);
                    }
                }

            }
                break;
            case 'add': {
                let [...int] = currCommand;
                let integers = int.splice(3,).map(Number);
                
                let concatArr = [...integers, ...numbersLine];
                numbersLine = concatArr
                numbersLength = numbersLine.length;
            }
        }

        command = input.shift();
    }

    console.log(numbersLine.join(', '));

}
solve(["1 2 3 10 10 6 4 10", 

"add to start 1 2 3", 

"remove greater than 5", 

"find even", 

"END"])  

