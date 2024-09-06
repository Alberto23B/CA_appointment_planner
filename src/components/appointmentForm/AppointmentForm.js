import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"
import Time from "../Time";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} aria-label="title" required/>
        <ContactPicker name="contact" value={contact} contacts={getContactNames()} onChange={(e) => setContact(e.target.value)} />
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}
        min={getTodayString()} aria-label="date" required/>
        <label htmlFor="time">Time</label>
        <Time name="time" value={time} onChange={(value) => setTime(value)} />
        {/* <input id="time" type="time" name="time" value={time} step="1800" onChange={(e) => setTime(e.target.value)} aria-label="time" required/> */}
        <input type="submit" value="Submit" aria-label="submit"/>
      </form>
    </>
  );
};
