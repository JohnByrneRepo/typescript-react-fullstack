import React from "react";

export const Email = (props: { email:  string, }) => {
  return (
    <div className="Email">
      <div className="Address">{props.email}</div>
    </div>
  );
};
