// Import React
// import React from "react";

interface Props {
  name: string;
  className: string;
}

const Test = (props: Props) => {
  return (
    <div className={props.className}>
      Hello there: {props.name ?? "Unnamed"}
    </div>
  );
};

export default Test;
