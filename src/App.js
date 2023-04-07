import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("has been changed to dark mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("has been changed to light mode", "success");
    }
  };

  return (
    <>
      <Navbar
        title="textutils"
        text="texthere"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert Alert={alert} />
      {/* <Navbar/> */}
      {/* <Navbar title="textutils"/> */}

      <div className="container">
        <Form
          heading="enter your info here"
          showAlert={showAlert}
          mode={mode}
        />
        <About />
      </div>
    </>
  );
}

export default App;
