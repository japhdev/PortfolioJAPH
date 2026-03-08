require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: "Something went wrong" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`));

