import React from "react";
import styles from "./styles.css"
import Info from "../info";
import { Link } from "react-router-dom";
import sun from "../../img/sun.png"
import Brightness5Icon from '@mui/icons-material/Brightness5';
function Dates(props){
    return(
        <div>
            <div className="container-son">
            <Link to={`/info/${props.farmacia1Name}/${props.farmacia2Name}/${props.farmacia1Map}/${props.farmacia2Map}/${props.farmacia1Tel}/${props.farmacia2Tel}/${props.farmacia1Loc}/${props.farmacia2Loc}/${props.farmacia1Dir}/${props.farmacia2Dir}/`}><div className="son"> <Brightness5Icon/>  <p>{props.num} </p></div></Link>
            </div>
        </div>
    );
}
export default Dates;