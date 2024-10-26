import { useState } from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
  /* helper functions */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  return (
    <div>
      <form action="www.daphnexiaoesq.com/processContact.php" method="POST">
        <input name="email" type="email" required />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
