// Import React
import React from "react";

interface Props {
  name: string;
  className: string;
}

// Create React Component
// class Test extends React.Component<Props> {
//   render() {
//     return (
//       <div className={this.props.className}>
//         Hellooooooo: {this.props.name ?? "Unnamed"}
//       </div>
//     );
//   }
// }

const Test = (props: Props) => {
  return (
    <div className={props.className}>
      Hello there: {props.name ?? "Unnamed"}
    </div>
  );
};

export default Test;
