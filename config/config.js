// const { config } = require("dotenv");
const { default: mongoose } = require("mongoose");

function config(){
    mongoose.connect (process.env.MONGO_URL).then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log(" database not connected",err);
    })

}

module.exports = config;

// img src="<%= product.imageUrl %>" alt="<%= product.name %> Image" height="50">

// const profile = await userData.aggregate([
//     {$match:{
//       email : email
//     }},
//     {$lookup:{
//       from:'profiledatas',
//       localField:'_id',
//       foreignField:'userId',
//       as:'datas'
//     }}

//   ])
//   console.log(profile);
//   if (profile) {
//       res.render('userside/profileupdate',{profile: profile[0]});






// updateprofile: async (req, res) => {
//     if(req.session.Username){
//     const Username = req.session.Username;
//     console.log(req.session.Username);

//     try {
//         // Find the user in the database based on the Username
//         const user = await userData.findOne({ Username: Username });

//         // fetch user profile from profile collection
//       const profile = await userData.aggregate([
//         {$match:{_id: new mongoose.Types.ObjectId(user._id)}},
//         {
//           $lookup:{
//             from:'profiledatas',
//             localField:'_id',
//             foreignField:'userId',
//             as:'profileDetails'
//           }
//         }
//       ]);

//         if (user) {
//             console.log(user,profile);
//             res.render('userside/profileupdate', { user ,profile});
//         } else {
//             // Handle the case where the user is not found
//             res.status(404).send('User not found');
//         }
//     } catch (error) {
//         console.error('Error retrieving user:', error);
//         res.status(500).send('Internal Server Error');
//     }
//   }
//   else{
//     res.redirect('/login')
//   }
// },





// updateform:async(req,res)=>{
//   if(req.session.Username){
//   const Username = req.session.Username;
//   const user = await userData.findOne({ Username: Username });

//   const profile = await userData.aggregate([
//     {$match:{_id: new mongoose.Types.ObjectId(user._id)}},
//     {
//       $lookup:{
//         from:'profiledatas',
//         localField:'_id',
//         foreignField:'userId',
//         as:'profileDetails'
//       }
//     }
//   ]);
// console.log(profile);
//   res.render('userside/updateform',{user,profile})
// }
// else{
//   res.redirect('/login')
// }
// },
