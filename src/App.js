import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to HackMap!</h1>
        <p style={styles.text}>Find your next hackathon and connect with teams.</p>
        
        {/* Display Logo Below the Text */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Roboto', sans-serif", // Modern font for a clean look
    backgroundColor: "#f1f1f1", // Light gray background
    minHeight: "100vh",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    textAlign: "center", // Center text content
    height: "60vh", // Make main take more of the viewport height
    padding: "2rem",
    background: "linear-gradient(135deg, #4E73DF, #2C3E50)", // Blue and gray gradient
    borderRadius: "10px", // Rounded corners for a softer look
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
    color: "white",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  logoContainer: {
    marginTop: "2rem",
  },
  logoImage: {
    height: "250px", // Adjust the size for a more balanced look
    width: "250px",
    borderRadius: "10px", // Round the logo edges
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Add a subtle shadow to the logo
  },
};

export default App;
