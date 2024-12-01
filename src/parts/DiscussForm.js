/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable */

import React from "react";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;

  const handleSubmit = () => {
    const { name, company, email, phone, projectIdea } = data;

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      // Send email via EmailJS
      const templateParams = {
        name,
        company,
        email,
        phone,
        projectIdea,
      };

      emailjs
        .send(
          "service_04bbdvm", // Replace with your EmailJS service ID
          "template_fx12k5o", // Replace with your EmailJS template ID
          templateParams,
          "2ChxYnhVr3wbWA87f" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            toast.success(
              "Form submitted successfully! We'll get back to you soon."
            );
            resetForm();
          },
          (error) => {
            console.log("Error sending email:", error);
            toast.error(
              "There was an error sending your form. Please try again."
            );
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Let’s Discuss
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Reach Out for Product Inquiries, Custom Orders, or Partnership
          Opportunities
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Please write your message"
              className=""
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};
