//Complete the code so that any changes to your fav quote is renedered and displayed in the first <p> element, and any changes to the source of that quote is rendered and displayed in the second <p> element

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteQuote: "",
      book: "",
    };
  }

  handleFavoriteQuoteInput = (e) => {
    this.setState({ favoriteQuote: e.target.value });
  };

  handleBookInput = (e) => {
    this.setState({ book: e.target.value });
  };

  render() {
    return (
      <form>
        <h1>My Favorite Quote:</h1>
        <p className="quote">{}</p>
        <input
          id="quoteInput"
          type="text"
          placeholder="Typeth thy quote here..."
          onChange={this.handleFavoriteQuoteInput}
        />
        <hr />
        <h3>This comes from the book/story called:</h3>
        <p className="book">{}</p>
        <input
          id="bookInput"
          type="text"
          placeholder="Where did it come from?"
          onChange={this.handleBookInput}
        />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
