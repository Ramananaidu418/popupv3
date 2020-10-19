import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as newId } from "uuid";

import Errormsg from "./Components/Errormsg/Errormsg";

export const Theme = React.createContext();

const App = (props) => {
  const [error, setError] = useState([
    {
      nodename: "text node",
      errorId: newId(),
      message: "Value is 'null'.Value should not be empty",
      selected: false,
    },
    {
      nodename: "text node",
      errorId: newId(),
      message:
        "Value is 'null'.Example of a longer error message which takes more than one row",
      selected: false,
    },
    {
      nodename: "text node",
      errorId: newId(),
      message: "Value is 'null'.Value should not be empty",
      selected: false,
    },
    {
      nodename: "text node",
      errorId: newId(),
      message: "Value is 'null'.Value should not be empty",
      selected: false,
    },
  ]);
  const [isopen, setIsopen] = useState(true);
  // const[selectedItems,setSelectedItems] = useState([])
  const [theme, setTheme] = useState("white");
  // const items = [];
  const Selection = (id) => {
    let tempstate = [...error];
    for (let i = 0; i < tempstate.length; i++) {
      if (tempstate[i].errorId === id) {
        tempstate[i].selected = !tempstate[i].selected;
      }
    }
    setError(tempstate);
  };
  const handleChanges = (e) => {
    setTheme(e.target.value);
  };
  const onSubmit = () => {
    let items = [];

    // if (error.length === 0) {
    //   alert("No items are selected");
    // }

    error.forEach((per) => {
      if (per.selected === true) {
        items.push(per.errorId);
      }
    });

    alert(items.join(","));
  };

  return (
    <div className="app">
      <label >Choose a theme:</label>

      <select
        onChange={(e) => handleChanges(e)}
        
      >
        <option value="default">default</option>
        <option value="white">Light</option>
        <option value="brown">brown</option>
        <option value="green">green</option>
        <option value="violet">violet</option>
        <option value="pink">pink</option>

      </select>
      {isopen ? (
        <div className="popup">
          <div className="top">
            <h1>Validation Results</h1>
          </div>
          <div className="middle">
            {error.map((per) => {
              return (
                <Theme.Provider value={theme}>
                  <Errormsg
                    {...per}
                    //key={per.errorId}

                    Selection={Selection}
                  />
                </Theme.Provider>
              );
            })}
          </div>
          <div className="close">
            <div className="btn">
              <p onClick={() => setIsopen(false)}>close</p>
            </div>
            <div className="btn submitBtn" onClick={onSubmit}>
              <p>submit</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
