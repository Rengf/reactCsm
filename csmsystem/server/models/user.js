var mongoose = require("mongoose");
var myDate = require("../public/fmt.js")();
mongoose.connect("mongodb://localhost:27017/csmsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var Schema = mongoose.Schema;

var userSchema = new Schema({
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: new Date()
    },
    last_modified_time: {
        type: Date,
        default: new Date()
    },
    last_login_time: {
        type: Date,
        default: new Date()
    },
    avatar: {
        type: String,
        default: "../../static/image/timg.jpg"
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date,
        default: new Date()
    },
    status: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    },
    user_type: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    }
});

module.exports = mongoose.model("User", userSchema);