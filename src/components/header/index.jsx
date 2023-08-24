import React from "react";
import img from "../../img/logomma.png"
import styles from "./styles.css"
function Header(){
    return(
        <div>
            <div className="container">
                <img src={img} alt="" />
            </div>
        </div>
    );
}
export default Header;
