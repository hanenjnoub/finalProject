import React from 'react'
import axios from "axios";
import "../page/Index.css"
import{useSelector} from "react-redux"
import  { useState } from "react";
const Planing=()=> {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const user=useSelector((state)=>state.medReducer.user)
  const sendConfirmationEmail = async () => {
    try {
      const response = await axios.post('/send-email', {
        to: email,
        subject: 'Confirmation de compte',
        text: 'Votre RDV a été confirmé avec succès.'
      });
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
    }
  };

  return (
   <div>
      <h1>your Planing: {user && user.date}</h1>
      
      
      <h1>Envoyer un e-mail de confirmation</h1>
      <input
        type="email"
        placeholder="Adresse e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={sendConfirmationEmail}>Envoyer</button>
      <p>{message}</p>
    </div>
  

  );
}
export default Planing;
