// Import React
import React from "react";

// Create React Component
export default class Test extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        Hello: {this.props.name ?? "Unnamed"}
      </div>
    );
  }
}

interface Props {
  name: string;
  className: string;
}
