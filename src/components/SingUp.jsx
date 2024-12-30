import React, { useState } from "react";
import "../components/SignUp.css";

const SignUp = () => {
  const [Name, setName] = useState("");

  const handelName = (e) => {
    e.preventDefault();
    console.log(Name);
  };

  return (
    <div>
      <h1>Sign Up: {Name}</h1>
      <form onSubmit={handelName}>
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <div className="wave-group">
          <input required type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ zIndex: 0 }}>
              N
            </span>
            <span className="label-char" style={{ zIndex: 1 }}>
              a
            </span>
            <span className="label-char" style={{ zIndex: 2 }}>
              m
            </span>
            <span className="label-char" style={{ zIndex: 3 }}>
              e
            </span>
          </label>
        </div>
        <div className="wave-group">
          <input required type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ zIndex: 0 }}>
              N
            </span>
            <span className="label-char" style={{ zIndex: 1 }}>
              a
            </span>
            <span className="label-char" style={{ zIndex: 2 }}>
              m
            </span>
            <span className="label-char" style={{ zIndex: 3 }}>
              e
            </span>
          </label>
        </div>
        <div className="wave-group">
          <input required type="text" className="input" />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ zIndex: 0 }}>
              N
            </span>
            <span className="label-char" style={{ zIndex: 1 }}>
              a
            </span>
            <span className="label-char" style={{ zIndex: 2 }}>
              m
            </span>
            <span className="label-char" style={{ zIndex: 3 }}>
              e
            </span>
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
