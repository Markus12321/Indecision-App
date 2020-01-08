/*
var problem;
Kan lage nye variabler med eksisterende varibelnavn.
Overskriver dine variabler - vanskelig å debugge kode
*/


//Can reassign AND redefine
var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)


//can reassign but not redefine
let nameLet = 'Jen'
// let nameLet = 'July' BUG ;D
console.log('nameLet', nameLet)


//can't neither reassign nor redefine D;
const nameConst = 'Frank'
//const nameConst = 'Galio' BUG ;D
//nameConst = 'Gragas' BUG ;D
console.log('nameConst', nameConst)

//var & let & const is function scoped
function getPetName(){
    let petname = 'Hal'
    return petname;
}

getPetName();
//console.log(petName) bug

//var is NOT block scoped, the rest are...For example if(){ var = 30}
//var causes scope bleeding

var fullName = 'Markus Hellestveit';

if(fullName){
    var firstName = fullName.split(" ")[0];
    console.log(firstName)
}

console.log(firstName) //not a bug if firstName is var variable
//it is a bug if firstName is const or let