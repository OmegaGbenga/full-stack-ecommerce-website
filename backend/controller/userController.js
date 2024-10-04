const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = async(req, res) => {
    const {full_name, email, password, confirm_password} = req.body;

    if(!full_name || !email || !password || !confirm_password){
        return res.json({
            status: false,
            message: "Please fill all the fields"
        })
    }

    if(password !== confirm_password){
        return res.json({
            status: false,
            message: "Passwords do not match",
        })
    }

    const isUserExist = await User.findOne({email});
    if(isUserExist){
        return res.json({
            status: false,
            message: "A user has been registered with this email!"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        full_name,
        email,
        password: hashedPassword
    })

    await newUser.save();

    res.json({
        status: true,
        message: "User has been registered successfully!",
        user: {
            full_name,
            email
        }
    })

    try {
        
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }

}


const secret_key = process.env.SECRET_KEY

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.json({
            status: false,
            message: "Please fill all input fields"
        })
    }

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.json({
                status: false,
                message: "This user has not been registered!"
            })
        }

        const comparePassword = bcrypt.compare(password, user.password);

        if(!comparePassword){
            return res.json({
                status: false,
                message: "Password is incorrect!"
            })
        }

        const token = jwt.sign(
            {email, password},
            secret_key,
            {expiresIn: 1}
        )

        res.json({
            status: true,
            message: "User has been logged in successfully!",
            token,
            user
        })

    } catch (error) {
        res.json({
            status: false,
            message: "Server error, " + error
        })
    }
}



module.exports = {
    registerUser,
    loginUser
}