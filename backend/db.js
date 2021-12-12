const mongoose = require("mongoose");
const {users} = require("./models/users");
require('dotenv').config();

// const options ={
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
//     };

mongoose.connect(process.env.DB_URI,(err)=>{
    console.log("database connected")
})

//create document

saveUser("hoor",'1053920599' , "665432",true);
function saveUser(name, nationalID, password, role) {
  const newUser = new users ({
    name: name,
    nationalID: nationalID,
    password: password,
    role: role,
  });
  newUser.save()
  .then(result=>{
      console.log(result)
  })
  .catch(err=>{
      console.log(err)
  })
//   User.findUser(name)
}

// function saveSeedData(){
//     saveAvailableTestForRegistration('Standardized Test Of English','Early Registration','English','Computer based','21/01/2016 Evening');
//     savePrevus('CognitiveAbilityTest','University City','PaperBased','Attendant','Confirmed','15 / 01 / 1441','Sadad');
//     saveCancelleTest('Standardized Test Of English Proficiency','Qiyas-NajranUniversity','19 / 12 / 1439','22 / 11 / 1439','Computer based','Payment Expired');
//     saveResulte('CognitiveAbilityTest','')
    
// } 
// saveSeedData()
