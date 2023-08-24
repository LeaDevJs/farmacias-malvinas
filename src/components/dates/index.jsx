import React from "react";
import styles from "./styles.css"
import Info from "../info";
import { Link } from "react-router-dom";
function Dates(props){
    return(
        <div>
            <div className="container-son">
                <div className="son"> <Link to={`/info/${props.farmacia}`}> <p>{props.num} </p></Link></div>
            </div>
        </div>
    );
}
export default Dates;