function friendList(input) {
    let friends = input.shift().split(", ");
    let commands = input.shift();
    let blacklistedCounter = 0;
    let lostCounter = 0;
    while (commands !== "Report") {
        let splitedCommand = commands.split(" ");
        let currComand = splitedCommand[0];
        let index1 = splitedCommand[1];
        let index2 = splitedCommand[2];

        switch (currComand) {
            case "Blacklist":
                for (let i = 0; i < friends.length; i++) {
                    if (friends[i] == index1) {
                        console.log(`${index1} was blacklisted.`);
                        friends[i] = "Blacklisted";
                        blacklistedCounter++;
                    }
                }
                for (let j = 0; j < friends.length; j++) {
                    if (friends[j] !== index1 && friends[j] !== "Blacklisted") {
                        console.log(`${index1} was not found.`);
                    }
                    break;
                }

                break;
            case "Error":
                let currName = friends[index1];
                if (
                    index1 <= friends.length &&
                    friends[index1] !== "Blacklisted" &&
                    friends[index1] !== "Lost"
                ) {
                    console.log(`${currName} was lost due to an error.`);
                    friends[index1] = "Lost";
                    lostCounter++;
                }

                break;
            case "Change":
                if (index1 <= friends.length - 1) {
                    let oldName = friends[index1];
                    friends[index1] = index2;

                    console.log(`${oldName} changed his username to ${index2}.`);
                }
                break;
        }

        commands = input.shift();
    }
    console.log(`Blacklisted names: ${blacklistedCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(friends.join(" "));
}
friendList(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
