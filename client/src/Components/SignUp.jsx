import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const preset = "ecy9pmhx";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const checkProperties = (user) => {
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.dob === "" ||
      user.gender === ""
    ) {
      alert("Please fill all input fields!");
      setUser({ name: "", email: "", password: "", dob: "", gender: "" });
      return false;
    }
    return true;
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const submit = async () => {
    if(checkProperties(user)) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", preset);

      const res = await axios
        .post("https://api.cloudinary.com/v1_1/wakalie/image/upload", formData)
        .then((data) => {
          return data.data.secure_url;
        })
        .catch(() => {
          alert("Experienced an error, contact Eddy");
        });
      const imageUrl = res;

      const finalUser = { ...user, imageUrl };
      let response = await axios
        .post("/api/user/create_account", finalUser)
        .then((data) => {
          return data;
        })
        .catch(() => alert("nothing works"));

      if (response.status === 200) {
        URL.revokeObjectURL(preview);
        setPreview('')
        localStorage.setItem("currentUser", JSON.stringify(finalUser));
        navigate("/feed");
      } else {
        alert("Account not registered");
      }
    }
  };

  return (
    <div className="sign-up">
      <div className="signup-details">
        <h2 className="create-account">Create Account</h2>
        <form action="" className="signup-form">
          <div className="profile-pic-div">
            <div>
              <img src={preview} alt="" />
            </div>
            <div>
              <input
                type="file"
                name="image"
                onChange={handleImage}
                style={{ display: "none" }}
              />
              <FontAwesomeIcon
                className="add-pic-icon"
                onClick={() =>
                  document.querySelector("input[type=file]").click()
                }
                icon={faPlusCircle}
              />
            </div>
          </div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required={true}
          />{" "}
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="example@domain.com"
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
