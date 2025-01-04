import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Hackathon Matcher. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#2C3E50", // Dark gray background
    color: "white",
    marginTop: "2rem",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
  },
};

export default Footer;
