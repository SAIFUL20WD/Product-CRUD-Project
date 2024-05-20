import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.PORT, () => {
        console.log(`Example app listening on port ${config.PORT}`);
    });
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));
