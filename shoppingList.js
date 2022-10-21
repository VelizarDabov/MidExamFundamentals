function shopping(input) {


    let rawList = input.shift();
    let commands = input.slice()
    let shoppingList = rawList.split('!');
    let currentLine = commands.shift()

    while (currentLine != "Go Shopping!") {
        let arguments = currentLine.split(' ')
        let command = arguments[0];
        let firstElement = arguments[1];
        let secondElement = arguments[2];

        switch (command) {
            case "Urgent":
                if (!shoppingList.includes(firstElement)) {
                    shoppingList.unshift(firstElement);
                }
                break;
            case 'Unnecessary':
                let itemIndex = shoppingList.indexOf(firstElement);
                if (itemIndex > - 1) {
                    shoppingList.splice(itemIndex, 1)
                }
                break;
            case 'Correct':
                let updateIndex = shoppingList.indexOf(firstElement);
                if (updateIndex > -1) {
                    shoppingList[updateIndex] = secondElement
                }
                break;
            case 'Rearrange':
                let removeIndex = shoppingList.indexOf(firstElement);
                if (removeIndex > -1) {
                    let element = shoppingList[removeIndex];
                    shoppingList.splice(removeIndex, 1);
                    shoppingList.push(element);
                }
                break;
        }
        currentLine = commands.shift();
    }
    console.log(shoppingList.join(', '));
}
shopping(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"])