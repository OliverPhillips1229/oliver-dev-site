import React from "react";

const Footer = () => {
  return (
    <footer style={{
      padding: "2rem 1rem 1rem 1rem",
      textAlign: "center",
      background: "#f5f5f5",
      color: "#333",
      borderTop: "1px solid #eaeaea"
    }}>
  <img src="/assets/logo.svg" alt="{O} logo" style={{width:'104px', height:'104px', display:'block', margin:'0 auto 1rem auto'}} />
      <p>&copy; {new Date().getFullYear()} Oliver Dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
