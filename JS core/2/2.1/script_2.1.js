// Task 1
let arrCopy = arr => {
    let newArr = [...arr];
    console.log(newArr);
}
// const arr1 = arrCopy([1, 2, 3]);
// const arr2 = arrCopy([1, 2, 3, [10, 20]]);



// Task 2
let arrToString = arr => {
    let newArr = arr.join().split(',');
    console.log(newArr);
}
// const arr1 = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,3333]);



// Task 3
let getLength = arr => {
    let lengths = arr.map(item => item.length);
    console.log(lengths);
}
// const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
// const arr2 = getLength(['Oleksiy', 'Andriana']);



// Task 4
let removeDuplicates = arr => {
    let newArr = Array.from(new Set(arr));
    console.log(newArr);
}
// const arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
// const arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);