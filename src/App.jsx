import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import DailyFeed from "./components/DailyFeed";
import NewPost from "./components/NewPost";
import UpdateProfile from "./components/UpdateProfile";
import Error from "./components/Error";

function App() {
  // axios.get("https://api.publicapis.org/entries").then(data=> console.log(data.data));

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/feed" element={<DailyFeed />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
