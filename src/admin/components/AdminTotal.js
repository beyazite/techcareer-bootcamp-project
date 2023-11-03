import React from "react";
import AdminSearch from "./AdminSearch";
import AdminNavbar from "./AdminNavbar";
import AdminCards from "./AdminCards";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AdminTotal = () => {
const [sendData , setSendData] = useState('');

  const eventDataHandler = (eventData) => {
    setSendData(eventData);
  }


  return (
    <>
    <Helmet>
      <title>EventHarbor - Admin Panel</title>
    </Helmet>
      <AdminNavbar></AdminNavbar>
      <AdminSearch onEventData ={ eventDataHandler}></AdminSearch>
      <AdminCards sendData = {sendData}></AdminCards>
    </>
  );
};

export default AdminTotal;
