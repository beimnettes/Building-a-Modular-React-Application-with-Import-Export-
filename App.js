import React, { useState } from "react";
import "./App.css"; // Import global CSS
import Header from "./components/Header"; // Default Import
import Footer from "./components/Footer"; // Default Import
import { ContentA } from "./components/ContentA"; // Named Import
import { ContentB } from "./components/ContentB"; // Named Import

const App = () => {
    const [name, setName] = useState("");

    return (
        <div className="app-container">
            <Header />
            
            {/* Name Input Section */}
            <div className="name-input">
                <h2>Enter Your Name:</h2>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <h3>{name ? `Hello, ${name}!` : "Hello, Guest!"}</h3>
            </div>

            <ContentA />
            <ContentB />
            <Footer />
        </div>
    );
};

export default App;
