// Assignment 3: Conditional Logic Implementation
const score = 85;   // or: Number(prompt("Enter your score (0-100):"))

if (score < 0 || score > 100 || isNaN(score)) {
  console.log("Invalid score. Enter a number between 0 and 100.");
} else {
  // switch on the tens digit to determine the grade
  let grade;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:  grade = "A"; break;
    case 8:  grade = "B"; break;
    case 7:  grade = "C"; break;
    case 6:  grade = "D"; break;
    default: grade = "F";
  }

  // ternary operator for pass/fail
  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
