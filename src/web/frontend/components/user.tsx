import React from "react";

export const User = (props: { image:  string, name: string }) => {
  return (
    <div className="User">
      <div className="Image">{props.image}</div>
      <div className="Name">{props.name} </div>
    </div>
  );
};
