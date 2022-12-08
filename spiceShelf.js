function solve(input) {
    let spieces = input.shift().split(', ')

    let command = input.shift();

    while (command !== 'done') {
        let currCommand = command.split(' ');

        switch (currCommand[0]) {
            case 'AddSpice': {
                let spice = currCommand[1];
                if (!spieces.includes(spice)) {
                    spieces.push(spice);
                }
            }
                break;
            case 'AddManySpices': {
                let index = Number(currCommand[1]);
                let promoSpieces = currCommand[2];
                let splittedSpieces = promoSpieces.split('|')
                spieces.splice(index, 0, ...splittedSpieces)

            }
                break;
            case 'SwapSpices': {
                let spiceOne = currCommand[1];
                let spiceTwo = currCommand[2];
                if (spieces.includes(spiceOne) && spieces.includes(spiceTwo)) {
                    let firstIndex = spieces.indexOf(spiceOne);
                    let secondIndex = spieces.indexOf(spiceTwo);
                    spieces[firstIndex] = spiceTwo;
                    spieces[secondIndex] = spiceOne;

                }
            }

                break;
            case 'ThrowAwaySpices': {
                let spiece = currCommand[1];
                let removeElement = Number(currCommand[2]);
                if (spieces.includes(spiece)) {
                    let index = spieces.indexOf(spiece);
                    let splicedArr = spieces.splice(index, removeElement);

                }

            }

                break;
            case 'Arrange':
                {
                    spieces = spieces.sort();
                }
                break;

        }
        command = input.shift();
    }

    console.log(spieces.join(' '));
}
solve(['coriander, cloves, paprika, allspice, turmeric, anise, cumin',  

'AddSpice nutmeg',  

'ThrowAwaySpices cloves 3',  

'AddManySpices 3 cayenne|cardamom|mace',  
'Arrange',

'done'])  