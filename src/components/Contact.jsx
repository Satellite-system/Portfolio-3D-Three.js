/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email == "") {
      alert("Please provide your email");
    } else if (form.name == "") {
      alert("Please provide your Name");
    } else if (form.message == "") {
      alert("Please provide your Message");
    } else {
      setLoading(true);

      emailjs
        .send(
          "service_c7ale69",
          "template_wruexj5",
          {
            from_name: form.name,
            to_name: "Adarsh-from-3d-portfolio",
            from_email: form.email,
            message: form.message,
          },
          "CYunoo-uqyW5E_8in"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Something went wrong!");
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl flex-[0.75]"
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
          ref={formRef}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
