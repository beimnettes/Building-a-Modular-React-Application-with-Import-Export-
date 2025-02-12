import React from "react";
import { Button } from "./SharedComponents";
import "./ContentB.css"; // Import CSS

export const ContentB = () => {
    return (
        <div className="content">
            <h2>Content B</h2>
            <p>This is the second content section.</p>
            <Button label="Click B" />
        </div>
    );
};
