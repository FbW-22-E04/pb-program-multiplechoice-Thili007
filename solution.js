// write your code here

// Exercise - 01

var colors = "red";

switch (colors) {
  case "red":
    console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    console.log("Q1: Blue? Great choice.");
    break;
  case "green":
    console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
}

// Exercise - 02

var grades = "A";

switch (grades) {
  case "A":
    console.log("Q2: A - Well done!");
    break;
  case "B":
    console.log("Q2: B - Good on you!");
    break;
  case "C":
    console.log("Q2: C - Good effort");
    break;
  case "D":
    console.log("Q2: D - Try harder next time...");
    break;

  default:
    console.log("Q2: Yikes...");
    break;
}

// Exercise - 03

var fruits = "apple";

switch (fruits) {
  case "apple":
    console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberry":
    console.log("Q3: Mmmm...nothing better than strawberries.");
    break;
  default:
    console.log("Q3: PICK A FRUIT");
    break;
}

// Exercise - 04

var percentageComplete = "100";

switch (percentageComplete) {
  case "below 30":
    console.log("Q4: Still a long way to go");
    break;
  case "between 30 and 50":
    console.log("Q4: Slowly getting there");
    break;
  case "between 51 and 80":
    console.log("Q4: You can do it!");
    break;
  case "between 81 and 99":
    console.log("Q4: This is the last push!");
    break;
  case "100":
    console.log("Q4: You're there. Well done!");
    break;

  default:
    break;
}
