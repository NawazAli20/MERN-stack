import mongoose from "mongoose";

const Student = mongoose.model("Student",{
    name:{type: String, default:"NoName"},
    dept_name:{type: String, default:"CS&IS"},
    tot_credit:{type: Number, min: 3, max: 21, default: 12}
}); 

export default Student;