function mowlawn(number){money = money + (multiplier*number*5);
lawns = lawns - number
document.getElementById("lawns").innerHTML = lawns;
document.getElementById("money").innerHTML = money;
};
var money = 0;
var lawns = 500;
var multiplier = 1;

var up = true;
var value = lawns;
var increment = 1;
var ceiling = 500;

function PerformCalc() {
  if (up == true && lawns <= ceiling) {
    lawns += increment

    if (lawns == ceiling) {
      up = false;
    }
  } else {
      up = false
      lawns -= increment;

      if (lawns == 0) {
        up = true;
      }
  }

  document.getElementById("lawns").innerHTML = lawns;
}
setInterval(PerformCalc, 1000);
