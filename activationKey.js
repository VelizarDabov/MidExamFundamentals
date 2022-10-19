function activationKey(input) {
  let actions = {
    Contains(rawKey, searchFor) {
      if (rawKey.includes(searchFor)) {
        console.log(`${rawKey} contains ${searchFor}`);
      } else {
        console.log(`Substring not found!`);
      }
      return rawKey;
    },
    Flip(rawKey, mode, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end);

      if (mode == "Upper") {
        second = second.toLocaleUpperCase();
      } else {
        second = second.toLocaleLowerCase();
      }
      let result = first + second + third;
      console.log(result);
      return result;
    },
    Slice(rawKey, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end);

      let result = first + third;
      console.log(result);
      return result;
    },
  };
  let rawKey = input.shift();
  let line;

  while ((line = input.shift()) !== "Generate") {
    let [actionName, ...params] = line.split(">>>");
    let action = actions[actionName];
    rawKey = action(rawKey, ...params);
  }
  console.log(`Your activation key is: ` + rawKey);
}
activationKey([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
