const newArr2=[];
const hesablama=function(array2){
    for (let i = 0; i < array2.length; i++) {
       if (i%2==1) {
         newArr2.push(array2[i])
       }

    }
    return newArr2;
}
console.log|(hesabla([1,3,5,6,4]))