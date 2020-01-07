var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/csmsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    category_name: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: new Date()
    },
    goods_count: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("Category", categorySchema);