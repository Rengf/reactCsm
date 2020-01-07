var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/csmsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
    goods_name: {
        type: String,
        required: true
    },
    goods_picture: {
        type: String,
        required: true
    },
    goods_price: {
        type: String,
        required: true
    },
    goods_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    created_time: {
        type: Date,
        default: new Date()
    },
    last_modified_time: {
        type: Date,
        default: new Date()
    },
    goods_description: {
        type: String,
        default: ""
    },
    stock: {
        type: Number,
        default: 0
    },
    sales: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Goods", goodsSchema);