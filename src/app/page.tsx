import "../app/globals.css";

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Service from "./components/Service";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import CustomerService from "./components/CustomerService";
import Product from "./components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Product />
      <Service />
      <About />
      <Testimonial />
      <CustomerService />
      <Footer />
    </div>
  );
}
