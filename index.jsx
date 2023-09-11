import React from "react";

class CarBrands extends React.Component {
  constructor(props) {
    super(props);
    this.state = { makes: ["Volkswagen", "Ford", "Honda"] };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.makes.map((make, i) => {
            return <li key={"make-" + i}>{make}</li>;
          })}
        </ul>
      </div>
    );
  }
}
