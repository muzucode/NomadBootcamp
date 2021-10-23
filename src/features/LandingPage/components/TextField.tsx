import React from "react";

interface Props {
  title: string,
  placeholder: string
}

export function TextField(props: Props){

  return (
    <div>
      <p>{props.placeholder}</p>
      <p>{props.title}</p>
    </div>
  )

}
