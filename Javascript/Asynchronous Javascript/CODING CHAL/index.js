// const where = function (lat, long) {

//     fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//         .then(data => {
//             if (!data.ok) throw new Error(`there is error in geoloading ${data.res}`)



//             return data.json()
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`you are in ${data.city} of ${data.country}`)
//         }
//         )
// }
// where(-23.026207, 72.5559631);



// simple example using Promise to understand


// const random = new Promise(function (resolve, reject) {

//     if (Math.random() > +0.5) {
//         resolve('You Won')
//     }

//     else {
//         reject('you lost');
//     }

// });


// random.then(res => console.log(res)).catch(err => console.log(err));







//Try and catch method 

// try {
//     const x = 10;
//     const y = 20;
//     y = 30;
// }
// catch (err) {
//     alert(err.message)
// }

const items = [
    { name: "Amit", rollNum: 25 },
    { name: "prady", rollNum: 21 },
    { name: "Yash", rollNum: 20 },
    { name: "Nirav", rollNum: 23 },
    { name: "Sharad", rollNum: 26 }

];
const item = {
    name: "Amit", rollNum: 25,
    name: "prady", rollNum: 21,
    name: "Yash", rollNum: 20,
    name: "Nirav", rollNum: 23,
    name: "Sharad", rollNum: 26
}
// for (data of items) {
//     console.log(data);
// }
// const itemlast = items.at(-1);
// console.log(itemlast);


// let a = items.map((val) => val.rollNum);
// console.log(a)
// let b = a.sort((a, b) => a - b);
// console.log(b);

// const num = [23, 25, 26, 24, 20, 28, 29]
// const numnew = num.sort((a, b) => b - a);
// console.log(numnew);

// const founditem = items.find((val) => {
//     return val.name === 'Amit';
// })

// console.log(founditem);
// let itemnew = [];
// itemnew = items.forEach((val) => console.log(val.name));

// let namesNew = Array.from(item.name);
// console.log(namesNew);
