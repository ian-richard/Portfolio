import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/5bcf968d-de19-405d-8c86-ec035d2ba38a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-6">// Get in touch</p>
        </div>
        <input type="text" placeholder="Name" id="name" />
        <input
          className="my-4 p-2 bg-[ccd6f6]"
          type="email"
          placeholder="email"
          id="name"
        />
        <textarea
          name="message"
          id=""
          rows={8}
          placeholder="Message"
          className="my-4 p-2 bg-[ccd6f6]"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
