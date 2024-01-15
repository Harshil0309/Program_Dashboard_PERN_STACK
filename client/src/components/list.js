import React, { Fragment, useEffect, useState } from "react";
// import edit from "./edit";
import Edit from "./edit";
const List = () => {
  const [progs, setProgs] = useState([]);

  const deleteprog = async (name) => {
    try {
      const deleteprog = await fetch(`http://localhost:5000/programs/${name}`, {
        method: "DELETE",
      });
      // console.log(deleteprog)
      setProgs(progs.filter((prog) => prog.name !== name));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPrograms = async () => {
    try {
      const response = await fetch("http://localhost:5000/programs");
      const jsonData = await response.json();
      //   console.log(jsonData);
      setProgs(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPrograms();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Domain</th>
            <th>Program Type</th>
            <th>Registrations</th>
            <th>Description</th>
            <th>Placement Assuarance</th>
            <th>Image URL</th>
            <th>University Name</th>
            <th>Faculty Profile</th>
            <th>Hours</th>
            <th>Certificate</th>
            <th>Criteria</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {progs.map(prog => (
            <tr key={prog.name}>
              <td>{prog.name}</td>
              <td>{prog.price}</td>
              <td>{prog.domain}</td>
              <td>{prog.program_type}</td>
              <td>{prog.registrations}</td>
              <td>{prog.description}</td>
              <td>{prog.placement_assuarance}</td>
              <td>{prog.image_url}</td>
              <td>{prog.university_name}</td>
              <td>{prog.faculty_profile}</td>
              <td>{prog.learning_hours_and_duration}</td>
              <td>{prog.certificate_diploma}</td>
              <td>{prog.eligibility_criteria}</td>
              <td>
                <Edit prog={prog} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteprog(prog.name)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default List;
