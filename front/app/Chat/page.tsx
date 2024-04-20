'use client'

import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import styles from "../styles/Chat.module.css";

import Navbar from '../components/Navbar';
import { Message } from '../types/types'; 
// import { log } from 'console';

const SOCKET_ENDPOINT = 'http://localhost:3001';
const API_ENDPOINT = 'http://localhost:3002';

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userId, setUserId] = useState<number | null>(null); 
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT); 
    setSocket(socket);

    axios.get(`${API_ENDPOINT}/api/chat/${1}`)
      .then(response => {
        console.log(response.data[0].userId);
        
        axios.get(`http://localhost:3002/api/chat/messages/${response.data[0].userId}`)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching messages:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching userId:', error);
      });

    socket.on('receive_message', receiveMessage);



    axios.get(`${API_ENDPOINT}/api/chat/1`)
    .then(response => {
      setRooms(response.data); 
      console.log("data",response.data.roomId);

      
    })
    .catch(error => {
      console.error('Error fetching rooms:', error);
    });
  



    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const receiveMessage = (data: Message) => {
    setMessages(prevMessages => [...prevMessages, data]);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    const newMessage: Message = {
      content: messageInput,
    //   user: , 
      roomId:2,
      timestamp: new Date().toLocaleString(), 
      
    };
    
    axios.post(`${API_ENDPOINT}/api/chat/createmsg`, {
      roomId : 2 , 
      userId: 1,
      content: newMessage.content,
    })
      .then(response => {
        console.log('Message saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving message:', error);
      });

    if (socket) {
      socket.emit('send_message', newMessage);
    }

    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');
  };

  return (
    <div>
    <Navbar />
    <div className={styles.ccontainer}>
        <div className={styles.carea}>
          <div className={styles.rooms}>
            {rooms && rooms.length > 0 ? (
              rooms.map(room => (
                <div key={room.id} className={styles.room}>
                  <p>Display room information</p>
                </div>
              ))
            ) : (
              <p>No rooms available</p>
            )}
          </div>
        <div className={styles.mhistory}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message}`}>
              <div className={styles.minfo}>
                <span className={styles.sender}>{message?.user?.firstName}</span>
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
