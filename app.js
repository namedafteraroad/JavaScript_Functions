console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  if (age >= 16) console.log(`"Congrats ${userName}, you can drive!"`);
  else if (age < 16)
    console.log(`"Sorry ${userName}, but you need to wait until you're 16."`);
  else console.log("not enough data");
}
checkAge("Dr. Alan Grant", 45);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
  if (x == 0 && y == 0) {
    console.log("You are at the center.");
  } 
  else if (x == 0 && y != 0) {
    console.log("You are on x axis");
  } 
  else if (x != 0 && y == 0) {
    console.log("You are on y axis");
  } 
  else if (x > 0 && y > 0) {
    console.log("You are in Quad 1");
  } 
  else if (x < 0 && y > 0) {
    console.log("You are in Quad 2");
  } 
  else if (x < 0 && y < 0) {
    console.log("You are in Quad 3");
  } 
  else if (x > 0 && y < 0) {
    console.log("You are in Quad 4");
  } 
  else {
    console.log("restart");
  }
}
whichQuadrant(0,0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleTest(x, y, z){
  return x + y > z || x + z > y || y + z > x;
}


function whatTriangle(x, y, z) {
let isTriangle = triangleTest(x, y, z);

if(isTriangle){
  if (x === y && y === z){console.log("Equalateral");}
else if (x === y || x === z || y === z){console.log("Isosceles");}
else {console.log("Scalene");}
}else{
  return `not at triangle`
}
  

}
whatTriangle( 1, 1, 1);