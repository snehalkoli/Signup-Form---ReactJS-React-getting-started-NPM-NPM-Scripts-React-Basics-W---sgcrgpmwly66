import React, { useState } from "react";

const App = () => {
  let [ErrorMessage, setErrorMessage] = useState("");
  const [input, setinput] = useState([
    {
      name: "",
      email: "",
      gender: "male",
      phone: "",
      password: ""
    }
  ]);

  const handleclick = () => {
    let main = input[0];
    console.log(main);
    let temp = main["name"];
    let address = main["email"];
    let password = main["password"];
    let gender = main["gender"];
    let phone = main["phone"];
    if (
      temp === "" ||
      address === "" ||
      password === "" ||
      gender === "" ||
      phone === ""
    ) {
      setErrorMessage("All fields are mandatory");
      return;
    }
    let cnt1 = 0;
    let cnt2 = 0;
    for (let i = 0; i < temp.length; i++) {
      if (
        (temp[i] >= "a" && temp[i] <= "z") ||
        (temp[i] >= "A" && temp[i] <= "Z")
      ) {
        cnt1++;
      } else if (Number(temp[i]) >= 0 && Number(temp[i]) <= 9) {
        cnt2++;
      }
      if (cnt1 && cnt2) {
        break;
      }
    }

    if (address.includes("@") === false) {
      setErrorMessage("Email must contain @");
      return;
    }

    if (!cnt1 || !cnt2) {
      setErrorMessage("Name is not alphanumeric");
      return;
    }

    if (isNaN(main["phone"])) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    }
    if (main["password"].length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    }
    let info = main["email"];
    info = info.substr(0, info.indexOf("@"));
    console.log(info);
    setErrorMessage("Hello " + info);
  };
  const handlechange = (e) => {
    let dup = input;
    dup = dup[0];
    dup[e.target.name] = e.target.value;
    setinput([dup]);
  };
  return (
    <div id="main">
      <div>{ErrorMessage}</div>
      <label>Name:</label>
      <input data-testid="name" name="name" onChange={handlechange} />
      <br />
      <label>Email address:</label>
      <input data-testid="email" name="email" onChange={handlechange} />
      <br />
      <label>Gender:</label>
      <input
        value="male"
        data-testid="gender"
        name="gender"
        onChange={handlechange}
      />
      <br />
      <label>Phone number:</label>
      <input data-testid="phoneNumber" name="phone" onChange={handlechange} />
      <br />
      <label>Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        onChange={handlechange}
      />
      <br />
      <button data-testid="submit" onClick={handleclick}>
        Submit
      </button>
    </div>
  );
};

export default App;
