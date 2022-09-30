const mongose = require('mongoose')
const mongooseDelete = require('mongoose-delete');

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
StorageScheme.plugin(mongooseDelete, {overrideMethods:'all'});
module.exports = mongose.model("storages", StorageScheme)