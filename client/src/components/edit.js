import React, { Fragment, useState } from "react";

const Edit = ({ prog }) => {
  const [description, setDesc] = useState(prog.description);
  const [name, setName] = useState(prog.name);
  const [price, setPrice] = useState(prog.price);
  const [domain, setDomain] = useState(prog.domain);
  const [program_type, setType] = useState(prog.program_type);
  const [registrations, setReg] = useState(prog.registrations);
  //   const [description, setDesc] = useState("");
  const [placement_assuarance, setPa] = useState(prog.placement_assuarance);
  const [image_url, setImg] = useState(prog.image_url);
  const [university_name, setUni] = useState(prog.university_name);
  const [faculty_profile, setFac] = useState(prog.faculty_profile);
  const [learning_hours_and_duration, setHours] = useState(
    prog.learning_hours_and_duration
  );
  const [certificate_diploma, setCerti] = useState(prog.certificate_diploma);
  const [eligibility_criteria, setCrit] = useState(prog.eligibility_criteria);

  const updateDesc = async (e) => {
    e.preventDefault();
    try {
      const body = {
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
      };
      const response = await fetch(
        `http://localhost:5000/programs/${prog.name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      //   console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#name${prog.name}`}
      >
        Edit
      </button>

      <div class="modal" id={`name${prog.name}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Program</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <label>Price</label>
              <input
                placeholder="Enter Price"
                type="integer"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label>Domain</label>
              <input
                placeholder="Enter Domain"
                type="text"
                className="form-control"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <label>
                {" "}
                Placement Assuarance
                <input
                  type="checkbox"
                  checked={placement_assuarance}
                  onChange={(e) => setPa(!placement_assuarance)}
                />
              </label>
              <br />
              <h4>Information</h4>
              <label>Name</label>
              <input
                placeholder="Enter Program name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Program Type</label>
              <label>
                <input
                  type="radio"
                  value="PE"
                  checked={program_type === "PE"}
                  onChange={(e) => setType("PE")}
                />
                PE
              </label>
              <label>
                <input
                  type="radio"
                  value="OE"
                  checked={program_type === "OE"}
                  onChange={(e) => setType("OE")}
                />
                OE
              </label>
              <br />
              <label>
                Registration Open
                <input
                  type="radio"
                  value="YES"
                  checked={registrations === "YES"}
                  onChange={(e) => setReg("YES")}
                />
                YES
              </label>
              <label>
                <input
                  type="radio"
                  value="NO"
                  checked={registrations === "NO"}
                  onChange={(e) => setReg("NO")}
                />
                NO
              </label>
              <br />

              <label>University Name</label>
              <input
                placeholder="Enter University"
                type="text"
                className="form-control"
                value={university_name}
                onChange={(e) => setUni(e.target.value)}
              />

              <label>Certificate or Diploma</label>
              <input
                placeholder="Certi or Dip"
                type="text"
                className="form-control"
                value={certificate_diploma}
                onChange={(e) => setCerti(e.target.value)}
              />

              <label>Faculty Profile</label>
              <input
                placeholder="Enter Faculty Name"
                type="text"
                className="form-control"
                value={faculty_profile}
                onChange={(e) => setFac(e.target.value)}
              />
              <label>Learning Hours/Duration</label>
              <input
                placeholder="Enter Hours"
                type="text"
                className="form-control"
                value={learning_hours_and_duration}
                onChange={(e) => setHours(e.target.value)}
              />
              <label>Eligibility Criteria</label>
              <input
                placeholder="Enter Criteria"
                type="text"
                className="form-control"
                value={eligibility_criteria}
                onChange={(e) => setCrit(e.target.value)}
              />

              <label>Image Url</label>
              <input
                placeholder="Enter Url"
                type="text"
                className="form-control"
                value={image_url}
                onChange={(e) => setImg(e.target.value)}
              />

              <label>Description</label>
              <input
                placeholder="Enter Description"
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDesc(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Edit;
