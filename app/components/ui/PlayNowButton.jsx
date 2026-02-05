import React from "react";
 
export default function PlayNowButton(props) {
  const { onClick, className = "" } = props;
  return (
    <>
      <button className="playnow" onClick={onClick}>
        <span className="gradient-text">Download Now</span>
      </button>
    </>
  );
}
