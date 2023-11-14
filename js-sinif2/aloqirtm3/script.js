let ali=[4,2,7];
let david=[5,6,3];
let str1=0;
let str2=0;
    for (let i = 0; i < ali.length; i++) {
       if(ali[i]>david[i]){
          str1=str1+1;
       }
       else {
          str2=str2+1;
       }
    }
console.log("alinin xali", str1); 
console.log("davidin xali",str2);
console.log("Ali Davidi uddu")