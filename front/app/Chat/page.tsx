import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import styles from "../styles/Chat.module.css"

import Navbar from '../components/Navbar';

const SOCKET_ENDPOINT = 'http://localhost:3001'; // Update this to match your server URL
const API_ENDPOINT = 'http://localhost:4000';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    setSocket(socket);

    axios.get(`${API_ENDPOINT}/api/messages`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    socket.on('receive_message', receiveMessage);
    
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const receiveMessage = (data) => {
    setMessages(prevMessages => [...prevMessages, data]);
  };
  
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      content: messageInput,
      timestamp: new Date().toLocaleString(),
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');

    axios.post(`${API_ENDPOINT}/api/chat/createmsg`, newMessage)
      .then(response => {
        console.log('Message saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving message:', error);
      });

    if (socket) {
      socket.emit('send_message', newMessage);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.ccontainer}>
        <div className={styles.carea}>
          <div className={styles.mhistory}>

            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                <div className={styles.minfo}>
                  <span className={styles.sender}>{message.sender}</span>
                  <span className="timestamp">{message.timestamp}</span>
                </div>
                <p className="content">{message.content}</p>
              </div>
            ))}
          </div>
          <div className="message-input-area">
            <input type="text" placeholder="Type a message..." value={messageInput} onChange={handleMessageChange} />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
