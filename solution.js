// write your code here

// Exercise - 01

var color = "red";

switch (color) {
  case "red":
    result = console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    result = console.log("Q1: Blue? Great choice.");
    break;
  case "green":
    result = console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    result = console.log(
      "Q1: Not what I would have picked, but yellow is fine."
    );
    break;
  default:
    result = console.log("Q1: The aim of the game is to pick a color.");
}

// Exercise - 02

var grade = "A";

switch (grade) {
  case "A":
    result = console.log("Q2: A - Well done!");
    break;
  case "B":
    result = console.log("Q2: B - Good on you!");
    break;
  case "C":
    result = console.log("Q2: C - Good effort");
    break;
  case "D":
    result = console.log("Q2: D - Try harder next time...");
    break;

  default:
    result = console.log("Q2: Yikes...");
    break;
}

// Exercise - 03

var fruit = "banana";

switch (fruit) {
  case "apple":
    result = console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    result = console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    result = console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberry":
    result = console.log("Q3: Mmmm...nothing better than strawberries.");
    break;
  default:
    result = console.log("Q3: PICK A FRUIT");
    break;
}

// Exercise - 04

var percentageComplete = "100";

switch (percentageComplete) {
  case "below 30":
    result = console.log("Q4: Still a long way to go");
    break;
  case "between 30 and 50":
    result = console.log("Q4: Slowly getting there");
    break;
  case "between 51 and 80":
    result = console.log("Q4: You can do it!");
    break;
  case "between 81 and 99":
    result = console.log("Q4: This is the last push!");
    break;
  case "100":
    result = console.log("Q4: You're there. Well done!");
    break;
}
