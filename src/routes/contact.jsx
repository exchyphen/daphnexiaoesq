import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "./contact.css";

const Contact = () => {
  // states
  const [email, setEmail] = useState("");

  /* helper functions */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  // send data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting email", email);

    const formData = {
      email: email,
    };

    axios
      .post("https://daphnexiaoesq.com//processContact.php", formData)
      .then((response) => {
        console.log(response);
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="contact"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main--section">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
