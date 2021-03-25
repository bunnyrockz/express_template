//Assigning the Values
const mongoose = require("mongoose");
//Connecting MongoDB
//mongodb://username:password@host:port/database?options
var mongoDB = "mongodb://localhost:27017/newdb"; // database name => newdb || collection name => newcol
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

//creating schema (validation)
const schema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
    lowercase: true, //change capital to lowercase if true
    trim: true, //trim extra spaces (Only from starting and end, can't remove space in between)
    minlenght: [5, "My Custom Error Message"], //only number for default error message
  },
  last: String,
  Phone: {
    type: Number,
    //enum: [125478901, 125478902, 125478903], //only possible values phone can have
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //validate(value) { if (!validator.isEmail(value)) { throw new Error("wrong Email ID")}}, //!validator npm package command
  },
  question: Boolean,
  valuex: {
    type: Number,
    //validate(value) { if (value < 0) { throw new Error("Valuex should be a positive Integer")}}, //!Custom Validator
  },
});

//creating collection (named should be capital and singular)
const NewCal = new mongoose.model("NewCal", schema);

//! adding a new document
/*
const createDB = async () => {
  try {
    const outPractice = new NewCal({
      first: "Rajan09",
      last: "Panchal09",
      Phone: 125478909,
      email: "rajanpanchal@com",
      question: true,
      valuex: 900,
    });
    const result = await outPractice.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDB();
*/

//! adding Multiple documents
/*
const createDB = async () => {
  try {
    const outPractice01 = new NewCal({
      first: "Rajan01",
      last: "Panchal01",
      Phone: 125478901,
      email: "rajanpanchal01@gmail.com",
      question: true,
    });

    const outPractice02 = new NewCal({
      first: "Rajan02",
      last: "Panchal02",
      Phone: 125478902,
      email: "rajanpanchal02@gmail.com",
      question: true,
    });

    const outPractice03 = new NewCal({
      first: "Rajan03",
      last: "Panchal03",
      Phone: 125478903,
      email: "rajanpanchal03@gmail.com",
      question: true,
    });

    const outPractice04 = new NewCal({
      first: "Rajan04",
      last: "Panchal04",
      Phone: 125478904,
      email: "rajanpanchal04@gmail.com",
      question: true,
    });
    const result = await NewCal.insertMany([outPractice01, outPractice02, utPractice03, outPractice04]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDB();
*/

//!Reading Database
/*
const readDocument = async () => {
  try {
    //finding all values
    // const result = await NewCal.find();
    //
    //Showing particular field
    // const result = await NewCal.find({ first: "Rajan04" }).select({ first: 1 });
    //
    //Only limited elements if hundred of data have same values
    //const result = await NewCal.find({ question: true }).limit(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

readDocument();
*/

//!Comparison Operators
/*
const compDocument = async () => {
  try {
    //greater than a number
    //const result = await NewCal.find({ value: { $gt: "200" } });
    //
    //In an Array
    //const result = await NewCal.find({ first: { $in: ["Rajan03", "Rajan04"] }});
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

compDocument();
*/

//!Logical Operators & Count Operator
/*
const logDocument = async () => {
  try {
    //or operator
    //const result = await NewCal.find({ $or: [{ first: "Rajan01" }, { last: "Panchal03" }]});
    //
    //Counting
    //const result = await NewCal.find().countDocuments()
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

logDocument();
*/

//!Counting Documents
/*
const couDocument = async () => {
  try {
    //Counting
    // const result = await NewCal.find().countDocuments();
    //
    //Counting in Operators or Comparisons
    //const result = await NewCal.find({$or: [{ first: "Rajan01" }, { last: "Panchal03" }]}).countDocuments();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

couDocument();
*/

//!Sorting Documents
/*
const sortDocument = async () => {
  try {
    //Sorting
    //const result = await NewCal.find().select({ first: 1 }).sort({ first: 1 });
    //sort according to first name, 1 means accending order, and -1 means descending
    //Give priority to capital letters first then small letters
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

sortDocument();
*/

//! Updatig document
/*
const updateDocument = async (_id) => {
  try {
    //updateOne Method
    // const result = await NewCal.updateOne({ _id }, { $set: { valuex: "400" } });
    //
    //findByIdAndUpdate (Give old values and output) | use new: true to get latest value as output
    //const result = await NewCal.findByIdAndUpdate({ _id }, { $set: { valuex: "400" } },{ new: true, useFindAndModify: false });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

updateDocument("603b419df267278de7b853ba");
*/

//! Delete Document
/*
const deleteDocument = async (_id) => {
  try {
    //updateOne Method
    //const result = await NewCal.findByIdAndDelete({ _id });
    //
    //findByIdAndUpdate (Give old values and output) | use new: true to get latest value as output
    //const result = await NewCal.findByIdAndUpdate({ _id }, { $set: { valuex: "400" } },{ new: true, useFindAndModify: false });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

deleteDocument("603c96c050b1c467f83dad45");
*/
