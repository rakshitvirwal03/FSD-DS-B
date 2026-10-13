// function sum(a, b) {
//   return a + b;
// }
// function sumWithMsg(a, b, msg) {
//   const result = clbk(20, 30);
//   const fresult = "Hi" + msg + "your score is" + result;
//   console.log(fresult);
// }
// sumWithMsg(sum, 20, 30, "John");

function divide(a, b, callback) {
  if (b === 0) {
    callback("Error", null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
