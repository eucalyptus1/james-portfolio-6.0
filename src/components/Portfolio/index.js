import React from "react";
import photo from "../../assets/images/runbuddy.png";

function Portfolio() {
    return (
        <div className="flex-row">
                <img
                src={photo}
                alt="Runbuddy"
                className="img-thumbnail mx-1"
                />
            </div>
    )
}

export default Portfolio;