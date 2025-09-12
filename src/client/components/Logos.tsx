import React from "react";

const Logos: React.FC = () => {
  return (
    <div className="logos-container">
      <img 
        src="/client/File 1.jpeg" 
        alt="Skaldsec Logo"
        className="logo-image"
      />
      <img 
        src="/client/File 2.jpeg"
        alt="Secure Compliant Confident" 
        className="logo-image"
      />
      <img 
        src="/client/File 3.jpeg"
        alt="Your Digital Shield"
        className="logo-image"
      />
      <img 
        src="/client/File 4.jpeg"
        alt="Skaldsec Shield" 
        className="logo-image"
      />
    </div>
  );
};

export default Logos;
