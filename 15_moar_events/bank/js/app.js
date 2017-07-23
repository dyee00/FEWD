console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;

// ================ PHASE 1 ================== //

var depositChecking = function(amount) {
  // adds the amount to the checking balance
  // shows the checking balance

  checkingBalance = checkingBalance + amount;
  showChecking();

};

var withdrawChecking = function(amount) {
  // subtract the amount from the checking balance
  // show the checking balance
  if(checkingBalance >= amount) { // prevents over withdrawing
  checkingBalance = checkingBalance - amount;
  };

  showChecking();

}; 

var depositSavings = function(amount) {
  // add the amount to the savings balance
  // show the savings balance

  savingsBalance = savingsBalance + amount;
  showSavings();

};

var withdrawSavings = function(amount) {
  // subtract the amount from the savings balance
  // show the savings balance

  if(savingsBalance >= amount) {
  savingsBalance = savingsBalance - amount;
  };

  showSavings();

};

var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);
};

var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();

// ================ PHASE 2 EVENTS ================== //

// When I click the Checking Deposit button...

$("#checking .deposit").click(function () {
  var depositAmount = parseInt($("#checking .amount").val());

   depositChecking(depositAmount);

  $("#checking .amount").val("");

});


// When I click the Checking Withdraw button...

$("#checking .withdraw").click(function () {
  var withdrawAmount = parseInt($("#checking .amount").val());

   withdrawChecking(withdrawAmount);

  $("#checking .amount").val("");

});

// When I click the Savings Deposit button...

$("#savings .deposit").click(function () {
  var depositAmount = parseInt($("#savings .amount").val());

   depositSavings(depositAmount);

  $("#savings .amount").val("");
  
});


// When I click the Savings Withdraw button...

$("#savings .withdraw").click(function () {
  var withdrawAmount = parseInt($("#savings .amount").val());

   withdrawSavings(withdrawAmount);

  $("#savings .amount").val("");

});





























