import React, { useState } from "react";
import { Calendar } from "react-calendar"; // Utiliser une bibliothèque de calendrier compatible avec React
import "react-calendar/dist/Calendar.css"; // Assurez-vous d'importer les styles
import{useSelector,useDispatch} from "react-redux"
import {useNavigate,useParams} from "react-router-dom"
import { add_Booking,getmedcontacts } from "../redux/action"
const BookDate=(doctorD)=> {
  const [date, setSelectedDate] = useState(new Date());
  const [time, setSelectedTime] = useState("");
  const{id}=useParams()
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (time && date) {
      // Effectuer l'action de réservation ici (par exemple, dispatch d'une action Redux)
      dispatch(getmedcontacts());
       console.log(doctorD._id,"ee")
        dispatch(add_Booking(doctorD._id,{date}))
      console.log("Rendez-vous réservé pour", date, "à", time);
    } else {
      alert("Veuillez sélectionner une date et une heure de rendez-vous.");
    }
  };

  return (
    <div>
      <h1>Sélectionnez une date et une heure de rendez-vous</h1>
      <div>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div>
        <h2>Heure de rendez-vous</h2>
        <select value={time} onChange={(e) => handleTimeChange(e.target.value)}>
          <option value="">Sélectionnez une heure</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="11:00">12:00</option>
          <option value="11:00">14:00</option>
          <option value="11:00">15:00</option>
          <option value="11:00">16:00</option>
          {/* ... Ajoutez d'autres options d'heure ici ... */}
        </select>
      </div>
      <div>
        <button onClick={handleBooking}>Réserver</button>
      </div>
    </div>
  );
}

export default BookDate;
