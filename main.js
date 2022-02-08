const str = 'ibrahim sharif safadi 1999'
let spaceContainer = 0
for (let i = 0; str[i]; i++) {
    if (str[i] ==  ' '){
        spaceContainer++
    }
}
    console.log(spaceContainer);  

    



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