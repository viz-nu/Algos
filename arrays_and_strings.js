//Q. function to convert number to word(as pronounced in english)

// function wordFrom(input){
//     const words =["","one","two","three","four","five","six","seven", "eight", "nine"];
// if(input>0 && input<10) {return console.log(words[input])}
// else{
//     tenths=['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
//     if(input>=10 && input<20) {return console.log(tenths[input-10])}
// const postFixedwords=["","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
// let a = input.toString().split(""), c="";
// // console.log(a)
// const b= a.map(ele => words[ele]);
// // console.log(b)
// for (let i=0,j=b.length-1;i<b.length;i++,j--){
   
//    if (j == 0){c=c + b[i]}
//    else if (j == 1){    
//        if(a[b.length-2]==1){
//            var d = tenths[a[a.length-1]];
//                   c= c + d ;
//                   break;
//        }
//       else{
//           var d=postFixedwords[a[i]];
//           if(d===""){continue}
//            c= c + d ;
//       }

//    }
//    else if (j == 2){c=c + b[i]+" hundred and "}
//    else if (j == 3){c=c + b[i]+" thousand "}
// }
// console.log(c)}
// }

//  wordFrom(107); 
