function calculate() {
  var currentWage = document.getElementById('current-wage').value;
  var futureWage = document.getElementById('raise-wage').value;
  var lastCheck = document.getElementById('last-check').value;
  let amount = (lastCheck * futureWage) / currentWage;
  amount = amount.toFixed(2);
  let yearAmount = amount * 26;
  yearAmount = yearAmount.toFixed(2);
  console.log(amount);
  document.getElementById('container').innerHTML = 'Your NET Paycheck amount at this Wage is $' + amount;
  document.getElementById('container2').innerHTML = 'Your NET Annual Pay at this Wage is $' + yearAmount;
}

