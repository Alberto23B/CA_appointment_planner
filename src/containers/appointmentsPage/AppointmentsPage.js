import React, { useEffect, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {

 const [title, setTitle] = useState("");
 const [contact, setContact] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");
 const [checkDuplicate, setCheckDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkDuplicate && title && contact && date && time) {
      addAppointment(title, contact, date, time); 
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
    }
  };

  useEffect(() => {
    const appIsDuplicate = () => {
      const found = appointments.find((app) => app.date === date && app.time === time);
      if (found !== undefined) {
        return true;
      }
      return false;
    }

    if (appIsDuplicate()) {
      setCheckDuplicate(true);
    } else {
      setCheckDuplicate(false);
    }
  }, [appointments, date, time])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <h3>Opening hours: 9:00 - 18:00</h3>
        <AppointmentForm
        contacts={contacts} 
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        handleSubmit={handleSubmit}
        />
        {checkDuplicate && <p style={{color: "red", fontWeight: "bold", textAlign: "center"}}>That date and time is already picked</p>}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};