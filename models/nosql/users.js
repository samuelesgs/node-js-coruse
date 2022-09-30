const mongose = require('mongoose')
const mongooseDelete = require('mongoose-delete');

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
UserScheme.plugin(mongooseDelete, {overrideMethods:'all'});
module.exports = mongose.model("users", UserScheme)