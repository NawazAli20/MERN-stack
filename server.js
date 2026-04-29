import express from "express";
import cors from "cors";
import con from "./connection.js";
import Student from "./models/student.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

con();

// Route 1: show all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// Route 2: show selected student by id
app.get("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: "Invalid student ID" });
  }
});

// Route 3: Delete a student by id
app.delete("/api/students/:id", async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({message:"Student deleted successfully"});
  } catch (err) {
    res.status(500).json({ error: "Invalid student ID" });
  }
});

// Route 4: Add a new student
app.post("/api/students", async (req, res) => {
  const student =req.body;
  try {
    const result = await Student.insertOne(student);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add student" });
  }
});

// Route 5: update a student by id
app.put("/api/students/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const student = req.body;
    const result = await Student.updateOne({_id:id},student);

     if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({message:"Student updated successfully"});
  } catch (err) {
    res.status(500).json({ error: "Invalid student ID" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});