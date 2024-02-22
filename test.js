// [
//     {
//         _id: ObjectId('65962eb0b6ef9f51d67117e8'),
//         name: 'Nike',
//         age: 100,
//         gender: 'female',
//         hobbies: ['reading', 'writing', 'dancing']
//     },
//     {
//         _id: ObjectId('65962eb0b6ef9f51d67117e9'),
//         name: 'colin',
//         age: 33,
//         gender: 'female',
//         hobbies: ['reading', 'writing', 'dancing']
//     },
//     {
//         _id: ObjectId('65962eb0b6ef9f51d67117ea'),
//         name: 'zera',
//         age: 18,
//         gender: 'female',
//         hobbies: ['reading', 'writing', 'dancing']
//     },
//     {
//         _id: ObjectId('65963f86b6ef9f51d67117eb'),
//         name: 'shahana',
//         age: 22,
//         gender: 'female',
//         hobbies: ['reading', 'writing', 'dancing']
//     },
//     {
//         _id: ObjectId('659647f2b6ef9f51d67117ec'),
//         name: 'athi',
//         age: 22,
//         gender: 'female',
//         hobbies: ['reading', 'writing', 'dancing']
//     }
// ]



// db.datas.updateMany({}, { $set: { hobbies: ["reading", "writing", "dancing"] } })

// db.datas.updateMany(
//     {
//         age: {
//             $lte: 22
//         }
//     },
//     {
//         $push: {
//             hobbies: "singing"
//         }
//     }
// )


// db.datas.updateMany(
//     {},
//     {
//         $set: {
//             hobbies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         }
//     }
// )

// db.datas.updateMany(
//     {},
//     {
//         $pull: {
//             hobbies: {
//                 $mod: [2, 0]
//             }
//         }
//     }
// )


















// db.datas.updateOne(
//     {
//         name: "shahla"
//     },
//     {
//         $set: {
//             gender: "female"
//         }
//     }
// )




// db.datas.updateMany(
//     {

//     },
//     {
//         $set:{
//             hobbies:[1,2,3,4,5,6,7,8,9]
//         }
//     }
// )



// db.datas.updateOne(
//     {
//         name:"shahla"
//     },
//     {
//         $unset:{
//             age:0
//         }
//     }
// )


 




let users = [1,2,3,4,5,6]
 let a = Math.floor((users.length-1)/2)



console.log(users(a));




