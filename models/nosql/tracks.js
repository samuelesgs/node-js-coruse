const mongose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TrackScheme = new mongose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate:{
                validator:(req) => {
                    return true;
                },
                message:"ERROR_URL"
            }
        },
        artist:{
            name:{
                type:String
            },
            nickname:{
                type:String
            },
            nationality:{
                type:String
            }
        },
        duration: {
            start:{
                type:Number
            },
            end:{
                type: Number
            }
        },
        mediaId:{
            type:mongose.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

TrackScheme.plugin(mongooseDelete, {overrideMethods:'all'});
module.exports = mongose.model("tracks", TrackScheme);