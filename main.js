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
        console.log(bandNumber + bandName);
   }

}

const test = (bandList(" ACDC"));
console.log(test);