import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h1>Contact with Us</h1>
        <p>Plan Your Journey with Rent a Car</p>
      </div>
      <div>
        <div className="flex">
          <div>
            <span>First Name*</span>
            <input type="text" />
          </div>
          <div>
            <span>Last Name*</span>
            <input type="text" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
