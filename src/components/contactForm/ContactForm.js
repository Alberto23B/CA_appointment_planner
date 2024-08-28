import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

