let myArray = [ 'A' , 'B' , 23 , 45 , 34 , 'Ali'];
let ExcludeArr = myArray.slice(1,4)
let myArray2 = ['alireza',3,4,9,0,'sina','ali']
let all = [...ExcludeArr, ...myArray2 ]
console.log(all)