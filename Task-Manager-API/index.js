const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;
const API = "mongodb+srv://task:rohithvamshi@cluster0.rir7tqr.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();