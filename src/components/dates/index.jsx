import React from "react";
import styles from "./styles.css"
import Info from "../info";
import { Link } from "react-router-dom";
import Brightness5Icon from '@mui/icons-material/Brightness5';

function Dates(props) {
  if (props.farmacia5Name) {
  return (
    <div>
      {props.num !== "" ? (
        <div className="container-son">
          <Link to={`/info2/${props.farmacia1Name}/${props.farmacia2Name}/${props.farmacia1Map}/${props.farmacia2Map}/${props.farmacia1Tel}/${props.farmacia2Tel}/${props.farmacia1Loc}/${props.farmacia2Loc}/${props.farmacia1Dir}/${props.farmacia2Dir}/${props.num}/${props.month}/${props.farmacia3Name}/${props.farmacia4Name}/${props.farmacia3Map}/${props.farmacia4Map}/${props.farmacia3Tel}/${props.farmacia4Tel}/${props.farmacia3Loc}/${props.farmacia4Loc}/${props.farmacia3Dir}/${props.farmacia4Dir}/${props.farmacia5Name}/${props.farmacia5Map}/${props.farmacia5Tel}/${props.farmacia5Loc}/${props.farmacia5Dir}/`}>
            <div className="son jello-horizontal">
              <div className="num"><p>{props.num} </p></div>
              <div className="icon"><Brightness5Icon/></div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="container-son">
            <div className="son">
              <div className="num"><p>{props.num} </p></div>
              <div className="icon"><Brightness5Icon/></div>
            </div>
        </div>
      )}
    </div>
  );
  }else{
    return (
      <div>
        {props.num !== "" ? (
          <div className="container-son">
            <Link to={`/info/${props.farmacia1Name}/${props.farmacia2Name}/${props.farmacia1Map}/${props.farmacia2Map}/${props.farmacia1Tel}/${props.farmacia2Tel}/${props.farmacia1Loc}/${props.farmacia2Loc}/${props.farmacia1Dir}/${props.farmacia2Dir}/${props.num}/${props.month}/${props.farmacia3Name}/${props.farmacia4Name}/${props.farmacia3Map}/${props.farmacia4Map}/${props.farmacia3Tel}/${props.farmacia4Tel}/${props.farmacia3Loc}/${props.farmacia4Loc}/${props.farmacia3Dir}/${props.farmacia4Dir}/`}>
              <div className="son jello-horizontal">
                <div className="num"><p>{props.num} </p></div>
                <div className="icon"><Brightness5Icon/></div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="container-son">
              <div className="son">
                <div className="num"><p>{props.num} </p></div>
                <div className="icon"><Brightness5Icon/></div>
              </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dates;
