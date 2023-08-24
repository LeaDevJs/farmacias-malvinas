import React from "react";
import styles from "./styles.css"
function SectionTitle(props){
    return(
        <div>
            <div className="container-section">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}
export default SectionTitle;