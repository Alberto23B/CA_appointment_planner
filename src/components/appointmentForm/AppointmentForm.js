import React from "react";

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

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}/>
        <label htmlFor="time">Time</label>
        <input id="time" type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
