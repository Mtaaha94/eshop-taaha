const express = require("express")
const bodyParser = require("body-parser");
const dbConnect = require("./config/db");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
 const uploadRouter = require("./routes/uploadRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 6000;

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
 app.use("/api/upload", uploadRouter);
app.use("/api/category", categoryRouter);
app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
});