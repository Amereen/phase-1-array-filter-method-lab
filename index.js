// Code your solution here
function findMatching(drivers, string){
let array = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
  return array
}

function fuzzyMatch(drivers, string){
let array = drivers.filter(driver=> driver[0]=== string[0])
return array
}


function matchName(driver,string){
let object = driver.filter(driver => driver.name === string )
 return object
}
