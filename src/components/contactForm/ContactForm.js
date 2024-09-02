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
        <input id="name" type="text" name="name" 
        placeholder="Insert Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" 
        placeholder="Insert Phone ###-###-####" value={phone} onChange={(e) => setPhone(e.target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" 
        placeholder="Insert a valid Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

