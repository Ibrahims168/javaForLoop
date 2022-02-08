// const str = 'ibrahim sharif safadi 1999'
// let spaceContainer = 0
// for (let i = 0; str[i]; i++) {
//     if (str[i] ==  ' '){
//         spaceContainer++
//     }
// }
//     console.log(spaceContainer);  

    



// let char = 'undefined'
// undefined // falsy
// NaN // falsy
// null // falsy

// let sum = char + 5

// console.log(sum);
// if (sum) {
//     console.log('truthy');
// } else {
//     console.log('falsy');
// }





// const str = 'Ibrahim Sharif Id Number Phone Email Fax A'
// let counter = 0 
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'A') {
//        counter++ 
//     }
// }
// console.log(counter);





const str = 'Ibrahim Sharif Id Number Phone Email Fax A'
let counter = 0 
    for (let i = 0; str[i]; i++) {
        if (str.charCodeAt(i) <= '90' && str.charCodeAt(i) >= '65') {
          counter ++
        }
    }
console.log(counter);
