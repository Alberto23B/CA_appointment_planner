import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [aptData, setAptData] = useState([])
 const [contactData, setContactData] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addAppointment = (name, contact, date, time) => {
  const newApp = {
    [name] : name,
    [contact] : contact,
    [date] : date,
    [time] : time
  }
  setAptData((prev) => [...prev, newApp])
 };

 const addContact = (name, phone, email) => {
  const newContact = {
    [name]: name,
    [phone]: phone,
    [email]: email
  }
  setContactData((prev) => [...prev, newContact])
 }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contact={contactData} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage apt={aptData} contact={contactData} addApt={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
