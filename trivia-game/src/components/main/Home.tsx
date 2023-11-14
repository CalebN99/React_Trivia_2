import React from "react";
import "../../styles/Home.css";

import { Select, Space } from "antd";
import { Radio } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function Home() {
  return (
    <div className="home_comp">
      <h1>React Trivia!</h1>

      <select className="dropdown">
        <option value="" defaultChecked>
          Category
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <div className="selections">
        <input type="radio" name="buttonGroup" value="one" id="one" />
        <label htmlFor="one">Easy</label>
        <input type="radio" name="buttonGroup" value="two" id="two" />
        <label htmlFor="two">Medium</label>
        <input type="radio" name="buttonGroup" value="three" id="three" />
        <label htmlFor="three">Hard</label>

      </div>
    </div>
  );
}

export default Home;
