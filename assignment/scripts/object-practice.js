console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  // TODO - add properties here
  firstName: 'Cameron',
  lastName: 'Soudbash',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ['speghetti', 'burgers', 'pizza']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
function name(nameToCheck) {
  nameToCheck = me.firstName + ' ' +  me.lastName;
  return nameToCheck;
}
console.log(name(me));


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
function shoeCheck (shoesToCheck) {
  console.log("The current amount of shoes: " + me.shoeCount);
  shoesToCheck = me.shoeCount += 1
  return shoesToCheck;
}
console.log("Guess what?! You just got a new pair of shoes!!!");
console.log("The new amount of shoes: " + shoeCheck(me));
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
function addFavoriteColor(favoriteColor) {
  console.log("The original object:" , me);
  favoriteColor = me.favoriteColor = ['Green'];
  return favoriteColor;

}
console.log("updated about me and added new favoriteColor:", addFavoriteColor(me));
console.log(me);
