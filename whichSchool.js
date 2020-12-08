/**/ 


const whichSchool  = function (age) {
  if (age < 13 ) {
    return "Elementary School"; 
// if the student is under 13; display Elementary school
  } else if (age >= 13 && age <= 18) {
    return "Secondary School"; 
// if the student is between 13 and 18; display Secondary school
  } else {
    return "Lighthouse Labs"; 
// if the student is above 18; return Lighthouse Labs
  }
}

console.log(whichSchool(12)); 
console.log(whichSchool(35)); 
console.log(whichSchool(17)); 

