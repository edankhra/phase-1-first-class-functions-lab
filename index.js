// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  

const createFareMultiplier = function(x) {
    return function(fare) {
      return fare*x
    }
  }
  
  const fareDoubler = createFareMultiplier(2)
  
  const fareTripler = createFareMultiplier(3)
  
  const selectDifferentDrivers = function(arr, x) {
    return x(arr)
  }