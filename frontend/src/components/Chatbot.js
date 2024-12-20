import React, { useState } from 'react';
import { FaHeadphones, FaMobileAlt, FaLaptop } from 'react-icons/fa'; // Import icons from react-icons
import ChatWindow from './ChatWindow';

const productData = [
  { id: 1, name: 'Wireless Headphones', description: 'High-quality sound, noise-canceling', price: '$99', icon: <FaHeadphones /> },
  { id: 2, name: 'Smartphone', description: 'Latest model with high-end features', price: '$699', icon: <FaMobileAlt /> },
  { id: 3, name: 'Laptop', description: 'Fast processor and large storage', price: '$1200', icon: <FaLaptop /> },
  
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleUserInput = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = {
      sender: 'user',
      text: input,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    // Process the input (search for product)
    handleProductSearch(input);
  };

  const handleProductSearch = (query) => {
    // Check if query matches any product
    const matchedProduct = productData.find((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    const botResponse = {
      sender: 'bot',
      text: matchedProduct ? (
        <>
          <h4>{matchedProduct.name}</h4>
          <p>{matchedProduct.description}</p>
          <p>{matchedProduct.price}</p>
          <div>{matchedProduct.icon}</div> {/* Display the icon here */}
        </>
      ) : (
        'Sorry, no product found for that query.'
      ),
    };

    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  return (
    <div className="chatbot">
      <h3>Product Chatbot</h3>
      <ChatWindow messages={messages} />
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={handleUserInput}
          placeholder="Ask about a product"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
