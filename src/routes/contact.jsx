import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="contact"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main--section">contact page</section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
