import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();

  //Creating a state variable to keep track of the color of the Parent component
  const [color, setColor] = useState(randomColor);

  //Creating a state variable to keep track of the color of the Child components
  const [childrenColor, setChildrenColor]=useState("#FFF")

  /*Defining a function that updates the states created above
  It takes in an argument passed in from the child components. The argument is used to update the state of the Child compinent's color variable*/
  function handleChangeColor (newChildColor) 
  {
    const newRandomColor=getRandomColor()
    setColor(newRandomColor)//Updates the color state
    setChildrenColor(newChildColor)//Updates the state of the Child component color
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* Passing on the color and function that handles clicking of the child components */}
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
