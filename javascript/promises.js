function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test1 completed");
    }, 4000);
  });
}
function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ABES College");
    }, 2000);
  });
}
f1()
  .then(f2)
  .catch(() => {
    console.log("Error occurred", error);
  });
