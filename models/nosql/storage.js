const mongose = require('mongoose')

const StorageScheme = new mongose.Schema(
    {
        url:{
            type:String
        },
        fileName:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongose.model("storages", StorageScheme)