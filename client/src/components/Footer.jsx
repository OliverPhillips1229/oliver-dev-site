import React from "react";

const Footer = () => {
  return (
    <footer style={{
      padding: "2rem 1rem 1rem 1rem",
      background: "#f5f5f5",
      color: "#333",
      borderTop: "1px solid #eaeaea"
    }}>
      <div style={{display:'flex', alignItems:'center', gap:'1.5rem'}}>
  <img src="assets/logo.svg" alt="{O} logo" style={{width:'104px', height:'104px', display:'inline-block', margin:'0'}} />
        <div style={{flex:1, textAlign:'center'}}>
          <p style={{margin:0}}>&copy; {new Date().getFullYear()} Oliver Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
