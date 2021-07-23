const usersModel = require("../models/usersModel");

const usersController = async(req, res) => {
    var UserProfile = req.body.user
    const resUserModel = await usersModel(UserProfile);
    if (resUserModel){
        res.status(200).json({
            success: true,
            massge: "Setup Profile เรียบร้อย",
        });
    }else{
        res.status(200).json({
            success: false,
            massge: "Setup Profile ไม่สำเร็จ"
        }); 
    }
}

module.exports = usersController;