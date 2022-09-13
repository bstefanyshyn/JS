// 1. forEach
let arr = [5, 6, 7, 8, 9];
var mySet = new Set(arr);
let sum = 0;

mySet.forEach(num => sum += num);
console.log(sum);



// 2. map
let arrMap = [5, 6, 7, 8, 9];
var myMap = arrMap.map((num) => num * num);

console.log(myMap);



//  3. every
let arrEvery = [{ name: 'Ivan', country: 'Ukraine' },
{ name: 'Petro', country: 'Ukraine' },
{ name: 'Miguel', country: 'Cuba' }
]
console.log(arrEvery.every(elem => elem.country == 'Ukraine'));



//  4. some
let arrSome = [{ name: 'Ivan', country: 'Ukraine' },
{ name: 'Petro', country: 'Ukraine' },
{ name: 'Miguel', country: 'Cuba' }
]
console.log(arrSome.some(elem => elem.country == 'Cuba'));



//  5. filter
let arrFilter = [1, 'string', [3, 4], 5, [6, 7]];
var newArray = arrFilter.filter(elem => elem.length > 1 && elem.length < 3);

console.log(newArray);



//  6. reduce
let arrReduce = [1, 2, 5, 0, 4, 5, 6];

var newArrRed1 = arrReduce.reduce((previousValue, currentValue) => {
    if (currentValue == 0) {
        return console.log(previousValue);
    } else {
        return previousValue + currentValue;
    }
}, 0);

var i = 0;
const newArrRed2 = arrReduce.reduce((previousValue, currentValue) => {
    if (previousValue > 10) {
        console.log(i);
    } else {
        i++;
        return previousValue + currentValue;
    }
}, 0);



//  7.
let array = [1, -2, 3, 0, 4, -5, 6, -11];
var positiveArray = array.filter(elem => elem >= 0);
console.log(positiveArray);
var sqrtArray = positiveArray.map(e => e = Math.sqrt(e));
console.log(sqrtArray);
