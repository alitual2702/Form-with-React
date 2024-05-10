import React, { useState } from "react";
import "./todoo.css";
const Todoapp = () => {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [grades, setgrades] = useState("");
  const [data, setdata] = useState([]);


  // Handling Submission
  function handleForm(e) {

    e.preventDefault();
    let allData = { user, email, pass, dob, age, gender, grades };

    if (user == "" || pass == "" || email == "" || age == 0 || gender == "" || grades == "" || dob == "") {
      alert("OOPS...Please check the fields")
    }
    else {
      setdata([...data, allData])
      setuser("")
      setemail("")
      setpass("")
      setdob("")
      setage("")
      setgender("")
      setgrades("")
    }
  }

  return (
    <div className="todoo-sec">
      <form onSubmit={handleForm}>
        <h1>Form Submission</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user}
          autoComplete="off"
          onChange={(e) => setuser(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <input
          type="date"
          name="dob"
          placeholder="dob"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
        />
        <input
          type="number"
          name="age"
          min="10"
          max="50"
          placeholder="Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <select
          name="gender"
          value={gender}
          onChange={(e) => setgender(e.target.value)}

        >
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="other">OTHER</option>
        </select>
        <select
          name="grades"
          value={grades}
          onChange={(e) => setgrades(e.target.value)}

        >
          <option value="a+">A+</option>
          <option value="a-">A-</option>
          <option value="b+">B+</option>
          <option value="b-">B-</option>
          <option value="ab+">AB+</option>
          <option value="ab-">AB-</option>
          <option value="o+">O+</option>
          <option value="o-">O-</option>
        </select>
        <button>Get...</button>
      </form>
      <div className="lists">

        {
          data.map((val, index) => {
            return (
              <div className="head-bottom" key={index}>
                <span className="data-main"><strong>Name : </strong>{val.user}</span>
                <span className="data-main"><strong>Email : </strong>{val.email}</span>
                <span className="data-main"><strong>Password : </strong>{val.pass}</span>
                <span className="data-main"><strong>Date of Birth : </strong>{val.dob}</span>
                <span className="data-main"><strong>Age : </strong>{val.age}</span>
                <span className="data-main"><strong>Gender : </strong>{val.gender.toUpperCase()}</span>
                <span className="data-main"><strong>Group : </strong>{val.grades.toUpperCase()}</span>
              </div>
            )
          })
        }


      </div>
    </div>
  );
};

export default Todoapp;
