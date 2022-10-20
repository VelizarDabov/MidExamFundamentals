function pigFeed(input) {
  let [quantityFood, quantityHay, quantityCover, weight] = input
    .splice(" ")
    .map(Number);

  for (let i = 1; i <= 30; i++) {
    quantityFood -= 0.3;

    if (i % 2 === 0) {
      quantityHay -= quantityFood * 0.05;
    }
    if (i % 3 === 0) {
      quantityCover -= weight * (1 / 3);
    }
  }
  if (quantityFood >= 0 && quantityCover >= 0 && quantityHay >= 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${quantityFood.toFixed(
        2
      )}, Hay: ${quantityHay.toFixed(2)}, Cover: ${quantityCover.toFixed(2)}. `
    );
  } else {
    console.log("Merry must go to the pet store!");
  }
}
pigFeed(["10", "5", "5.2", "1"]);
