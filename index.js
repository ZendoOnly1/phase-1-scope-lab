// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = "not bob"; // Implicitly global, as `var` isn't used
  }
  function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  }
  const leastFavoriteCustomer = "some initial value";

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "new value"; // This will throw an error because constants cannot be reassigned
  }
   