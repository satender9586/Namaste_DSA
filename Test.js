console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().
then(() => {
  console.log("Promise1");
  setTimeout(() => console.log("Timeout2"), 0);
}).then(() => console.log("Promise2"));

console.log("End");

// staret, end, promi1,pro2, timeout 