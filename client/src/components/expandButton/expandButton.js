import React from "react";
import "./expandButton.css";

function ExpandButton(props) {
  return (
    
    <button className="expandButton" onClick={() => props.showExtendedHoldings()}>
    <i className="ms-Icon ms-Icon--DoubleChevronLeft8
" />
 </button>
    
  );
}

export default ExpandButton;
