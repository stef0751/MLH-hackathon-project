import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Hackathon Matcher</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#connect" style={styles.link}>Connect</a></li>
        <li style={styles.navItem}><a href="#Meet the Team" style={styles.link}>Meet The Team</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
  },
  navItem: {},
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Navbar;
