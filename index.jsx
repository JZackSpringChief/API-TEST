import React, { useState } from "react";
import ReactDOM from "react-dom";

const UserProfile = (props) => {
  const [poked, setPoked] = useState(false);
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const sendPoke = () => {
    setPoked(true);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    setMessageSent(true);
  };

  const textbox = messageSent ? (
    <p>Sent!</p>
  ) : (
    <div>
      <input value={message} onChange={handleMessage} />
      <button name="sendMessage" onClick={sendMessage}>
        Send a message to Sam
      </button>
    </div>
  );

  return (
    <div>
      <h1>Sammy Jackson</h1>
      <div>
        <img src="https://mimo.app/i/earth.png" alt="Sammy's Profile" />
      </div>
      {!poked && (
        <button name="sendPoke" onClick={sendPoke}>
          Poke Sam
        </button>
      )}
      {textbox}
    </div>
  );
};

ReactDOM.render(<UserProfile />, document.getElementById("root"));

export default UserProfile;
