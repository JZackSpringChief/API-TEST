import React, { useState } from "react";
import ReactDOM from "react-dom";

const Review = (props) => {
  const [liked, setLiked] = useState(props.liked);

  const addLike = () => {
    setLiked(true);
  };
  const removeLike = () => {
    setLiked(false);
  };

  return (
    <div>
      <p>Make sure to add a like, if you can!</p>
      {!liked ? (
        //complete code below
        <button onClick={addLike}>Like</button>
      ) : (
        <button onClick={removeLike}>Remove Like</button>
      )}
    </div>
  );
};

ReactDOM.render(<Review liked={false} />, document.getElementById("root"));

export default Review;
