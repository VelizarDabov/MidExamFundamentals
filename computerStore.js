function computerStore(arr) {
  let computerType = arr.pop();
  let partsPrice = arr.map(Number);

  let priceWithoutTax = 0;
  let taxPrice = 0;
  let totalPrice = 0;
  for (let i = 0; i < partsPrice.length; i++) {
    let currPrice = Number(arr[i]);
    if (currPrice < 0) {
      console.log("Invalid price!");
    } else {
      priceWithoutTax += currPrice;
      taxPrice += currPrice * 0.2;
      totalPrice = taxPrice + priceWithoutTax;
    }
  }
  if (computerType === "special") {
    totalPrice = totalPrice * 0.9;
  }

  if (totalPrice > 0) {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxPrice.toFixed(2)}$`);
    console.log("----------- ");
    console.log(`Total price: ${totalPrice.toFixed(2)}$ `);
  } else {
    console.log("Invalid order! ");
  }
}
computerStore([
  "1023",

  "15",

  "-20",

  "-5.50",

  "450",

  "20",

  "17.66",

  "19.30",
  "regular",
]);
