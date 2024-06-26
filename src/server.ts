import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.PORT, () => {
        console.log(`Server listening on port ${config.PORT}`);
    });
}

main().catch((err) => console.log(err));
