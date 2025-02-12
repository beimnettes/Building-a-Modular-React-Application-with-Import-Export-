import React from "react";
import { Button } from "./SharedComponents";
import "./ContentA.css"; // Import CSS

export const ContentA = () => {
    return (
        <div className="content">
            <h2>Content A</h2>
            <p>This is the first content section.</p>
            <Button label="Click A" />
        </div>
    );
};
