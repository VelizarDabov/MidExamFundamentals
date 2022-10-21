function hunt(input){
let treasureChest = input.shift().split('|');
let total = 0;
let isIndexValid = (index, arr) => index >= 0&& index < arr.length;


for(const line of input){
    let [command, ...elements] = line.split(' ')

if(command === "Yohoho!"){
    break;

}
if(command === 'Loot'){
    for(const item of elements){
        if(!treasureChest.includes(item)){
            treasureChest.unshift(item)
        }
    }
  
    }else if (command === 'Drop') {
        let index = Number(elements[0])
        if(isIndexValid(index, treasureChest)){
            let dropped = treasureChest.splice(index, 1);
            treasureChest.push(...dropped);
        }
    }else if(command === 'Steal'){
        let index = Number(elements[0]);
        let stealedTreasure = treasureChest.slice(-index);
        treasureChest.splice(-index);
        console.log(stealedTreasure.join(', '));
    }
}
total = treasureChest.reduce((sum, treasureChest) => sum + treasureChest.length, 0) / treasureChest.length;
if(treasureChest.length > 0) {
    return`Average treasure gain: ${total.toFixed(2)} pirate credits.`
}else{
    return `Failed treasure hunt.`

}
}
hunt(["Gold|Silver|Bronze|Medallion|Cup", 

"Loot Wood Gold Coins", 

"Loot Silver Pistol", 

"Drop 3", 

"Steal 3", 

"Yohoho!"]) 