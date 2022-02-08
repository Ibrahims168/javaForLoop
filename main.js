const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, corrupti. Odit consequatur quasi dolorem eum nulla quas, perferendis ab nobis, quae saepe animi distinctio molestiae atque adipisci neque aliquam!.'
for (let i = 0; str[i]; i++) {
    console.log(str[i]);  
}
let char = 'undefined'
undefined // falsy
NaN // falsy
null // falsy

let sum = char + 5

console.log(sum);
if (sum) {
    console.log('truthy');
} else {
    console.log('falsy');
}