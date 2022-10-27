const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const data2 = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

const recipe1 = {
  title: "omelet",
  level: "Easy Peasy",
  ingredieents: ["egg", "cheese"],
  cuisine: "whatever",
  dishType: "breakfast",
  duration: 5,
  creator: "Chef Davut",
};
// let [{ title }] = data;
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    const it2 = Recipe.create(recipe1);
    return it2;
  })
  .then((result) => {
    console.log(result.title);
    const it3 = Recipe.insertMany(data);
    return it3;
  })
  .then((result) => {
    data.forEach((el) => {
      console.log(el.title);
      const it4 = Recipe.findOneAndUpdate(
        { title: "Rigatoni alla Genovese" },
        { duration: 100 }
        // (err) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   console.log("Succesfully updated");
        // }
      );
      return it4;
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
