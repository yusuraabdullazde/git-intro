const newArr3=[]
const myfunc=function (array3,number3) {
    for (let j = 0; j< array3.length; j++) {
       if(number3>array3[j]){
           newArr3.push(array3[j])
       }
    }
    return newArr3;
}
console.log(myfunc([1,2,3,4,5],4))