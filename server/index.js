const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//routes
//create program
app.post("/programs", async (req, res) => {
  try {
    // console.log(req.body)
    const {
      name,
      price,
      domain,
      program_type,
      registrations,
      description,
      placement_assuarance,
      image_url,
      university_name,
      faculty_profile,
      learning_hours_and_duration,
      certificate_diploma,
      eligibility_criteria,
    } = req.body;
    // console.log(name)
    const newProgram = await pool.query(
      "INSERT INTO program (name,price,domain,program_type,registrations,description,placement_assuarance,image_url,university_name,faculty_profile,learning_hours_and_duration,certificate_diploma,eligibility_criteria) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
      [
        name,
        price,
        domain,
        program_type,
        registrations,
        description,
        placement_assuarance,
        image_url,
        university_name,
        faculty_profile,
        learning_hours_and_duration,
        certificate_diploma,
        eligibility_criteria,
      ]
    );
    res.json(newProgram.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all program

app.get("/programs", async (req, res) => {
  try {
    const allPrograms = await pool.query("SELECT * FROM program");
    res.json(allPrograms.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a program

app.get("/programs/:name", async (req, res) => {
  try {
    // console.log(req.params);
    const { name } = req.params;
    const program = await pool.query("SELECT * FROM program WHERE name=$1", [
      name,
    ]);
    res.json(program.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update program

app.put("/programs/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const {
      price,
      domain,
      program_type,
      registrations,
      description,
      placement_assuarance,
      image_url,
      university_name,
      faculty_profile,
      learning_hours_and_duration,
      certificate_diploma,
      eligibility_criteria,
    } = req.body;
    const updateProg = await pool.query(
      "UPDATE program SET price=$1, domain=$2,program_type=$3,registrations=$4,description=$5,placement_assuarance=$6,image_url=$7,university_name=$8, faculty_profile=$9,learning_hours_and_duration=$10, certificate_diploma=$11,eligibility_criteria=$12 WHERE name=$13",
      [
        price,
        domain,
        program_type,
        registrations,
        description,
        placement_assuarance,
        image_url,
        university_name,
        faculty_profile,
        learning_hours_and_duration,
        certificate_diploma,
        eligibility_criteria,
        name,
      ]
    );
    res.json("program was updated");
  } catch (err) {
    console.log(err.message);
  }
});

//delete program

app.delete("/programs/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const deleteProg = await pool.query("DELETE FROM program WHERE name =$1", [
      name,
    ]);
    res.json("Program was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
