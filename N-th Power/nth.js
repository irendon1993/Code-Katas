function index(array, n){
  //your code here
  
  let arrayPosition = (array.length - 1)
  
  
  if (n > arrayPosition) {
    return -1 
  } 
  
  else {
    return Math.pow(array[n], n)
  }
  
}