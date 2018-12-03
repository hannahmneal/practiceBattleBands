//                  INSTRUCTIONS:
//  Write a function that accepts any band name as an argument. 
//  The function will increment a global variable by one each time it is invoked, 
//  and return that number with the band name concatenated together

//  GIVEN CODE:

// const bandNumber = 1

// const takeNumber = function () {
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


let bandNumber = 1

const bandList = function (bandName) {
   for (bandNumber = 1; bandNumber <= 10; bandNumber ++) {
      return (bandNumber + bandName);     //  console.log(bandNumber + bandName);    Original code
   }
}

// const test = (bandList(" ACDC"));
// console.log(test);
console.log(bandList(" Mouse Rat"));

//Emily's challenge: include a return statement in the bandList function.
//The return statement should be able to send a value back to the function call site
//(e.g., that value would get stored in the variable "test" on line 33)

// Get clarification; Still not sure what the "return" means in a funciton. :/