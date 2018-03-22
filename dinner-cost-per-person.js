// Calculate your check
// Mainly an exercise in documentation, and a program to help figure out how to split the check.

// Declare a variable called cost and set it to the value of the cost of food (before tip and tax). Let's say your food came to $32.50
   var cost = 32.5;

// Now create a new variable, perhaps called tax, and bind it to the value of the California tax rate—8.5% 
   var tax = .085;

// How much is dinner?
   var dinner = cost + (tax * cost);

// Then, create a variable for the percentage you'd like to tip.
   var tip = .15;

// Complete cost of dinner and tip
   var totalCost = dinner + (dinner * tip);

// How many people at dinner?
   var people = 10;

// Now, compute the total that each person should pay using all of your variables.
   var perPerson = totalCost / people;

// Print out the final divided cost per person.
  console.log(perPerson);
