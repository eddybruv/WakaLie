import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const preset = "ecy9pmhx";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    number: "",
    password: "",
    dob: "",
    gender: "",
  });

  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files);
    console.log({ ...user, image });
  };

  const submit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);

    const res = await axios
      .post("https://api.cloudinary.com/v1_1/wakalie/image/upload", formData)
      .then((data) => {
        return data.data.secure_url;
      })
      .catch(() => {
        console.log("Doesn't work");
      });
    console.log(res);
    const imageUrl = res;

    const finalUser = { ...user, imageUrl };
    console.log(finalUser);
    let response = await axios
      .post("http://localhost:5000/api/user/create_account", finalUser)
      .then((data) => {
        console.log(data);
      })
      .catch(() => console.log("nothing works"));
    
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/feed");
    } else {
      alert("Account not registered");
    }
  };

  return (
    <div className="sign-up">
      <div className="signup-details">
        <h2 className="create-account">Create Account</h2>
        <form action="" className="signup-form">
          <label htmlFor="image">Profile Picture</label>
          <input type="file" name="image" onChange={handleImage} />
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required={true}
          />{" "}
          <br />
          <label htmlFor="phone-number">Phone Number</label> <br />
          <input
            type="number"
            name="number"
            value={user.number}
            placeholder="eg. 670000000"
            onChange={handleChange}
            required={true}
          />{" "}
          <br />
          <div className="gender-dob">
            <div>
              <label htmlFor="gender">Gender</label> <br />
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={handleChange}
                required={true}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob">DoB</label> <br />
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required={true}
          />
          <button className="sign-up-button" type="button" onClick={submit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
