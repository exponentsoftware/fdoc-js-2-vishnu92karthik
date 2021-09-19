const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
   let ArrayOfArrays =[]
  var newArr = countries.map(function(val){
   return  { val ,value:val.length, zip: val.slice(0,3)};
   
  })
  ArrayOfArrays.push([newArr])
   console.log(ArrayOfArrays)
     console.log(newArr) 
    