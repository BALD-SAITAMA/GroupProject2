var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var special = "!@#$%^&*()_+";

document.querySelector("#generate").addEventListener("click", function () {
  var length = parseInt(prompt("How long should password be?"));

  console.log("length: " + length);

  while (isNaN(length) || length > 128 || length < 8) {
    alert("Hey you messed up, do it again!");
    length = parseInt(prompt("How long should password be?"));
  }

  var wantLowers = confirm("Do you want lowers?");
  var wantUppers = confirm("Do you want uppers?");
  var wantNums = confirm("Do you want Nums?");
  var wantSpecials = confirm("Do you want Specials?");

  var possibilities = "";

  if (wantLowers) {
    possibilities += lowers;
  }
  if (wantUppers) {
    possibilities += uppers;
  }
  if (wantNums) {
    possibilities += nums;
  }
  if (wantSpecials) {
    possibilities += special;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibilities.length);
    var randChar = possibilities[randomIndex];
    password += randChar;
  }

  document.querySelector("#password").value = password;
});