import React from "react";

import UserGreeting from "./components/userGreeting/UserGreeting.jsx";
import GuestGreeting from "./components/guestGreeting/GuestGreeting.jsx";

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
