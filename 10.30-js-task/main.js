// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// let count = 0;
// for (let i = 1; i <= 100; i += 2) {
//     count++;
// }
// console.log(count);

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         sum += i;
//     }
// }

// console.log(sum);
// let arr =[12,14,35,56,68,93]
// let sum=0
// for (let index = 0; index < array.length; index++) {
//     sum=sum + arr[index];
// }
// console.log(sum);



// let arr =[12,14,35,56,68,93]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//        console.log(arr[i])
//     }
// }


// let arr =[12,14,35,56,68,93]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         console.log(sum)
//     }
// }


// let arr =[12,14,35,56,68,93]
// let largest=arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>largest);
//     largest=arr[i]

// }
// console.log(largest);

// let array =[12,14,35,56,68,93]
// let little=array[0]
// let big = array[1]
// let ferq=0;
// for (let index = 0; index < array.length; index++) {
//     if(array[index] <little)
//         little=array[index]
//  else if(array[index] >big)
//         big=array[index]
//     ferq=big-little
// }
// console.log(ferq)
// let eded =+prompt("eded daxil edin")
// let fakt=1
// for (i = 1; i <= eded; i++) {
//     fakt*=i;
// }

// alert(fakt);
// let str = "Lorem ipsum dolor";
// let count = 0;

// for (let i = 0; i < srt.length; i++) {
//    if(str[i].toLowerCase()==="1")
//     c++
// }

// console.log(count);


// let eded=+prompt("ededi daxil edin")


// for (let i = 2; i < array.length; i++) {
//     if (eded %i === 0) {

//     }

// }
// const scores=[60, 75, 88, 75,93,45]
// let avarage;
// let total= 0;

// for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//     avarage=total / scores.length
// }
// console.log(avarage);


// const scores  =[12,14,35,56,68,93]
// let largest=scores[0]
// for (let i = 0; i < scores.length; i++) {
//     if(scores[i]>largest);
//         largest=scores[i]

// }
// console.log(largest);
// const scores  =[12,14,35,56,68,93]
// let minimal=scores[0]
// for (let i = 0; i > scores.length; i++) {
//     if(scores[i] > minimal);
//         minimal=scores[i]

// }
// console.log(minimal);


//  let boyukCut=0
// for (let i = 0; i < array.length; i++) {

//     if(i % 2 ===0){
//         if ( array[i] > boyukCut ){
//             boyukCut = array[i]
//     }
//  }
// }
// console.log(boyukCut)

// let array = [400,36612,23,43,54,65,67,89,90,101,250];
// let boyukTek=0
// for (let i = 0; i < array.length; i++){

//     if(i % 2 === 1){
//         if(array[i]% 2===1){
//             if ( array[i] > boyukTek ){
//                 boyukTek = array[i]
//          }
//         }
//     }
//     }
//     console.log(boyukTek)

// let array = [40, 31, 23, 43, 54, 65, 67, 89, 90, 101, 20];
// let boyukEded = array[1]
// let kicikEded = array[2]


// for (let i = 1; i < array.length; i++) {
//     if (array[i] > boyukEded) {
//         boyukEded = array[i]
//     }
//     if (array[i] < kicikEded) {
//         kicikEded = array[i]
//     }

// }


// let sum = boyukEded + kicikEded
// let hasil = boyukEded * kicikEded

// if(hasil>sum){
//   console.log(hasil);
  
// }else{
//   console.log(sum)
// }

  // let array = [40, 31, 23, 43, 54, 65, 67, 89, 90, 101, 20];

  // for (let i = 0; i < array.length; i++) {
  //   check=array[i]
  // for(let j=i; j<array.length;j++){
  //   if(array[j]===check){
  //     console.log(check)
  //   }
  // }
    
  // }


//   let array = [40, 31, 23, 43, 54, 65, 67, 89, 90, 101, 20];
//   let boyukEded = Math.max(...array)
//   let kicikEded = Math.min(...array)
  
// let sum=0
// let multiplay=boyukEded*kicikEded
// for (let i = 0; i < array.length; i++) {
//  sum+=array[i];
  
// }
// let average=sum/array
// if (multiplay>average
// ) 
// coelse{
  
// }

// let array =[-10,12,-23,40,60,73,-6,-20];

// let positiveCount = 0;
// let negativeCount = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         positiveCount++;
//     } else if (array[i] < 0) {
//         negativeCount++;
//     }
// }
// console.log(positiveCount)
// console.log(negativeCount)

let array =[-10,12,-23,40,60,73,-6,-20];
let menfiSum=1
let musbetSum=1
for (let i = 0; i < array.lenth; i++) {
  if (array[i] > 0){
    menfiSum*=array[i]
  }
  if(array[i] > 0){
    musbetSum*=array[i]
  }
}

if(menfiSum>musbetSum)
  console.log(menfiSum);
 else(menfiSum<musbetSum)
 console.log(musbetSum);
 
  