import mongoose from "mongoose";

//Schema
const courseSchema = mongoose.Schema({
  name: String,
  pricce: Number,
  category: String,
  image: String,
  title: String,
});

//model
const Course = mongoose.model("Course", courseSchema);

export default Course;
