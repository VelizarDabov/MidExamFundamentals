function lift(arr) {
  let waitingPeople = Number(arr.shift());
  let wagons = arr.toString().split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      if (waitingPeople >= 4 - wagons[i]) {
        waitingPeople -= 4 - wagons[i];
        wagons[i] = 4;
      } else {
        wagons[i] += waitingPeople;
        waitingPeople = 0;
      }
    }
  }
  let isNotFull = false;
  for (let i = 0; i < wagons.length; i++) {
    let currElement = wagons[i];
    if (currElement < 4) {
      isNotFull = true;
    }
  }
  if (!isNotFull && waitingPeople > 0) {
    console.log(
      `There isn't enough space! ${waitingPeople} people in a queue!`
    );
  }
  if (isNotFull && waitingPeople == 0) {
    console.log("The lift has empty spots!");
  }
  console.log(wagons.join(" "));
}
lift(["15", "0 0 0 0 0"]);
