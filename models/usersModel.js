const configfirebase = require('../config/firebsae');

//connect DB & logic 
// age + 5
const userModel = async(UserProfile) => {
    let a=configfirebase.collection('users')
    var status = null; 
    let docRef=a.doc(UserProfile.uid)
    status = await docRef.set({
      hobby: UserProfile.hobby,
      age: UserProfile.age,
    });
    return status
}

module.exports = userModel;