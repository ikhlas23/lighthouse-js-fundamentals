/**/ 

const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School"; 
  } else if (age >=13 && age <=18) {
    return "Secondary School"; 
  } else if(age > 18 || age <=100) {
    return "Lighthouse Labs"; 
  }
  }
  
  console.log(whichSchool(23)); 

// console.log(whichSchool(12)); 
// console.log(whichSchool(35)); 
// console.log(whichSchool(17)); 



