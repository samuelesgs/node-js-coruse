const mongose = require('mongoose')

const UserScheme = new mongose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role: {
            type:["user", "admin"],
            default:"user"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongose.model("users", UserScheme)