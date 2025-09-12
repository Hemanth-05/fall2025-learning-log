import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import ejs from "ejs";

const port = 8080;
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const fileNameForIndex = join(__dirname, "public", "index.html");
const fileNameForError = join(__dirname, "public", "error.html");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));

const students = [
  {
    id: 1,
    name: "Alice",
    major: "Computer Science",
    gpa: 3.2,
    profile: "/images/alice.jpg",
  },
  {
    id: 2,
    name: "Bob",
    major: "Biology",
    gpa: 3.0,
    profile: "/images/bob.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    major: "Physics",
    gpa: 3.8,
    profile: "/images/charlie.jpg",
  },
  {
    id: 4,
    name: "Daisy",
    major: "Patterson",
    gpa: 3.32,
    profile: "/images/daisy.jpg",
  },
];

app.get("/", (req, res) => {
  res.sendFile(fileNameForIndex);
});

app.get("/students", (req, res) => {
  res.render("students", {students});
});

app.get("/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(n => n.id === id);
  if(student){
    res.status(200).render("student", {student});
  } else {
    res.status(404).sendFile(fileNameForError);
  }
});

app.listen(port, () => console.log("The server is running at port", port));
