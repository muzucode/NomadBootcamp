import React from "react";
import LoremIpsum from "../../../utilities/LoremIpsum/LoremIpsum";



export function RightHalf(props){

  return (
    <div>
    <div className="divider"></div>
    <div className="rightHalf w-100 p-5">
      <h1 className="display-1 mb-5 rightHalfTitle">{props.title}</h1>

      <h2>Social Media</h2>
      <p className="mb-5">{LoremIpsum(1)}</p>

      <h2>Weekly Newsletter</h2>
      <p className="mb-5">{LoremIpsum(2)}</p>

    </div>
    </div>

  )

}
