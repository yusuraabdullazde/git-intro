const hesabla=function (array) {
 for (let i = 0; i < array.length; i++) {
    if( array[i]==i){
      return i;
    }
 }
}
console.log(hesabla([1,2,3,1,4]));