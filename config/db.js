const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" +
        process.env.DB_USER_PASS +
        "@socialnetwork.u30po.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Failed to connect to MongoDB", err));
