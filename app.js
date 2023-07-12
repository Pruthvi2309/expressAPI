const express = require("express");
require("./db/connect");
const app = express();

// const product = require("./models/product");
const PORT = process.env.PORT || 3005;

const products_routes = require("./routes/products")

// app.get("/", (req, res) => {
//     res.send("Hi! I am live")
// });
// middleware or set router
app.use("/api/products", products_routes);
// app.use(express.json());
const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();