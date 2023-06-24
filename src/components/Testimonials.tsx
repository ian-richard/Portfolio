import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full min-h-screen bg-bgColor text-myTextColor"
    >
      <div className="max-w-full mx-auto p-4 flex flex-col items-start">
        <p className="text-4xl font-bold border-b-4 border-customHighlight">
          Testimonials
        </p>
        <p className="py-4">A few words from my colleagues</p>
      </div>

      {/* Quotes */}
      <div className="container mx-auto px-4 sm:px-32 lg:px-52">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div id="quote" className="py-8 bg-lightBgColor text-bgColor">
            <p className="font-[Freehand] text-8xl p-0 -mb-14">"</p>
            <p className="italic p-4">
              Ian's done a fabulous job and is a real asset to the team. Thanks
              for keeping the development on the right path and for all the
              those times you had to hop on last minute calls or drop everything
              to work out where a bug has come from.
            </p>
            <p className="text-right pr-8">
              {" "}
              - Kate.K, Technical Delivery Lead, Post Office Ltd
            </p>
          </div>
          <div id="quote" className="py-8 bg-lightBgColor text-bgColor">
            <p className="font-[Freehand] text-8xl p-0 -mb-14">"</p>
            <p className="italic p-4">
              "Not only is he hard working and keen to learn but making progress
              (probably too much as we need to try and keep up with the tickets)
              getting through the development work on banking"
            </p>
            <p className="text-right pr-8">
              {" "}
              - Paul N, Business Analyst, Contractor
            </p>
          </div>
          <div id="quote" className="py-8 bg-lightBgColor text-bgColor">
            <p className="font-[Freehand] text-8xl p-0 -mb-14">"</p>
            <p className="italic p-4">
              Since joining the banking team, he’s picked up journey development
              very quickly, is a pleasure to work with and always asks the right
              questions. Keep up the great work!
            </p>
            <p className="text-right pr-8">
              {" "}
              - Ryan.A, Software Engineering Manager, Accenture{" "}
            </p>
          </div>
          <div id="quote" className="py-8 bg-lightBgColor text-bgColor">
            <p className="font-[Freehand] text-8xl p-0 -mb-14">"</p>
            <p className="italic p-4 pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rutrum eros id quam blandit, at fringilla arcu commodo. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Vivamus non nisi sem.
            </p>
            <p className="text-right  pr-8">
              {" "}
              - Krishna.D, Lead Developer, Coforge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
