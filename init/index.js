const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  "mongodb+srv://delta-student:Gjf%23GneAHTr%40Ni4@cluster0.quqs9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=30000";

main()
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67bf0ddff52d2c4b68b63b3a",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized.");
};

initDB();
