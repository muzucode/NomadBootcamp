import React from "react";
import LoremIpsum from "../../../utilities/LoremIpsum/LoremIpsum";



export function RightHalf(props){

  return (
    <div>
    <div className="divider"></div>
    <div className="rightHalf w-100 p-5">
      <h1 className="display-1 mb-5 rightHalfTitle">{props.title}</h1>

      <h2>12 or 24 Week Programs</h2>
      <p className="mb-5">We believe time is of the essence, because after all, everyone values their time.  
        With that in mind, why leave any room for learning things that you won't be utilizing on the job?
        This bootcamp is designed around the idea that you should be learning the utmost important and utmost <i>necessary </i>
        technologies, concepts, and techniques in the world of modern-day web development</p>

      <h2>Timeless technologies and techniques</h2>
      <p className="mb-5">{LoremIpsum(3)}</p>

      <h2>Experts and industry veterans</h2>
      <p className="mb-5">{LoremIpsum(2)}</p>

    </div>
    </div>

  )

}
