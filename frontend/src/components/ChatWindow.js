// /src/components/ChatWindow.js

import React from 'react';


const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {typeof message.text === 'string' ? <p>{message.text}</p> : message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
