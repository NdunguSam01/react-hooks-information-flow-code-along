import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

/*Destructuring the passed in props

onChangeColor-> refers to the click function defined in the Parent component and was passed in as a prop
color-> the color generated when the Child component is clicked*/
function Child({ onChangeColor, color }) 
{
  //Creating a handleClick function that generates a new color and passes the new color as an argument to the handleChangeColor function that handles setting the background color
  function handleClick()
  {
    const newColor=getRandomColor()
    //Passing the newly generated color to the onChangeColor function
    onChangeColor(newColor)
  }

  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
