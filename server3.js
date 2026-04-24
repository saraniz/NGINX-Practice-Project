const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
    console.log("Request received");
    res.json({
        message: "Hello from Node backend",
        time: new Date()
    });
});

app.listen(3002, () => {
    console.log("Server running on 3002");
});

