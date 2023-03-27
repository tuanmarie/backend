
// function joinWithCharacter(arr, char) {
//     return arr.join(char);
// }
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); 


// function getFirstElement(animals) {
// return result = animals.slice(0, 1).toString();
// }

// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getFirstElement(animals);

// console.log(result); // Expected: "Monkey"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// console.log(fruits.slice(2, 3));




// const months = ['Jan','Feb' , 'April', 'June'];

// months.splice(2, 0, 'March');
// console.log(months);


// const a = ["Wind", "Water", "Fire"];
// console.log(a.join(" + "));
// // 'Wind + Water + Fire'

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// const lastPlant = plants.pop();
// console.log(lastPlant);
// Expected output: "tomato"

// const animals = ['pigs', 'goats', 'sheep'];
// const noiChuoi = ['football', 'swimming'];
// console.log(animals.concat(noiChuoi));
//  // ['pigs', 'goats', 'sheep', 'football', 'swimming']

// const namesA = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

// console.log(namesA.shift());
// //  "Andrew"

// const names = ["names","Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
// const ten = names.slice();
// console.log(ten);
// const string = names.toString();
// console.log(string);
// console.log(names.join(", "));

//  ["names", "Andrew", "Tyrone", "Paul", "Maria", "Gayatri"]


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const ketQua1 = words.filter(word => word.length > 6);
console.log(ketQua1);

const filtered = [12, 5, 8, 130, 44];
const ketQua2 = filtered.filter(number => number > 10);
console.log(ketQua2);

const array1 = [5, 12, 8, 130, 44];
const sapXep = array1.sort();
console.log(sapXep[0]);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
const chery = inventory.filter(fruit => fruit.quantity === 5);
console.log(chery);


const array2 = [1, 4, 9, 16];

const nhanDoi = array2.map(item => item * 2 );

console.log(nhanDoi);


const numbers = [1, 4, 9];
const result = numbers.map((item, index) => item / (index + 1));
console.log(result);


// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// Expected output: 10

const array3 = ['a', 'b', 'c'];
array3.forEach(function(item) {
    console.log(item);
});

// const ratings = [5, 4, 5];
// expected output: 14


// const arraySparse = [1, 3, /* empty */, 7];
// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

const array4 = [1, 30, 39, 29, 10, 13];
const dung = array4.every(item => item > 0);
console.log(dung);



// Làm phẳng mảng mảng
// let depthArray = [1, 2, [3,4], 5, 6, [ 7, 8, 9]]
// [1,2,3,4,5,6,7,8,9]



// lấy các khóa học và đưa vào 1 mảng mới
const Topics = [
    {
        topic: 'Front-end',
        coures: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'ReactJS'
            },
            {
                id: 3,
                title: 'Javacript'
            }
        ]  
    },
    {
        topic: 'Back-end',
        coures: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]
const courses = Topics.reduce((acc, topic) => [...acc, ...topic.coures], []);
console.log(courses);









