function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  let sum = marks.reduce((total, amount) => total + amount)
  let arrayLength = marks.length
  
  return Math.floor(sum/arrayLength)
}
