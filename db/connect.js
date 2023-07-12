const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Not connected",e);
});