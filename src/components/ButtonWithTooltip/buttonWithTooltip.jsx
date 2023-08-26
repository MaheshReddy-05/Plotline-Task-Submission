import React, { useState,useEffect } from "react";
import "./RectangularBoxWithButtons.css";

export default function ButtonWithTooltip({
  objNum,
  toolTipsText,
  textSize,
  padding,
  style,
  cornerRadius,
  tooltipWidth,
  arrowWidth,
  arrowHeight,
}) {
  const dumm = {
    display: "none",
  };
  const mergedTooltipStyle = {
    fontSize: `${textSize}px`,
    // position: "absolute",
    display: "block",
    padding: `${padding}px`,
    borderRadius: `${cornerRadius}px`,
    width: `${tooltipWidth}px`,
    ...style,
  };
  function check(x, y) {
    if (x === y) return mergedTooltipStyle;
    else return dumm;
  }

  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);
  const [showTooltip4, setShowTooltip4] = useState(false);
  const [showTooltip5, setShowTooltip5] = useState(false);

  const handleButtonClick = (buttonNum) => {
    if (buttonNum === 0) setShowTooltip1(!showTooltip1);
    if (buttonNum === 1) setShowTooltip2(!showTooltip2);
    if (buttonNum === 2) setShowTooltip3(!showTooltip3);
    if (buttonNum === 3) setShowTooltip4(!showTooltip4);
    if (buttonNum === 4) setShowTooltip5(!showTooltip5);
  };
  const ehandleButtonClick = (buttonNum) => {
    if (buttonNum !== 0) setShowTooltip1(false);
    if (buttonNum !== 1) setShowTooltip2(false);
    if (buttonNum !== 2) setShowTooltip3(false);
    if (buttonNum !== 3) setShowTooltip4(false);
    if (buttonNum !== 4) setShowTooltip5(false);
  };
  useEffect(() => {
    handleButtonClick(objNum);
    ehandleButtonClick(objNum);
  }, [objNum]);

  return (
    <div>
      <div className="circular-box">
        <div className="button top-left tooltip-container">
          <button className="button_">Button1</button>
          {showTooltip1 && (
            <div className="tooltip-box left_tool" style={{mergedTooltipStyle }}>
              {toolTipsText}
            </div>
          )}
        </div>
        <div className="button top-right tooltip-container">
          <button className="button_">Button2</button>
          {showTooltip2 && (
            <div className="tooltip-box right_side}" style={mergedTooltipStyle}> 
              {toolTipsText}
            </div>
          )}
        </div>

        <div className="button bottom-left tooltip-container">
          <button className="button_" >Button3</button>
          {showTooltip3 && (
            <div className="tooltip-box tooltip-left left_tool tt-leftBottom" style={{ left: "40%",...mergedTooltipStyle }}>
              {toolTipsText}
            </div>
          )}
        </div>
        <div className="tooltip" >
          {toolTipsText}
        </div>

        <div className="button bottom-right tooltip-container">
          <button className="button_" >Button4</button>
          {showTooltip4 && (
            <div className="tooltip-box tooltip-left right_tool" style={{ left: "40%",...mergedTooltipStyle }}> {/* Added tooltip-left class */}
              {toolTipsText}
            </div>
          )}
        </div>

        <div className="button center tooltip-container">
          <button className="button_" >Button5</button>
          {showTooltip5 && (
            <div className="tooltip-box" style={{left: "40%",...mergedTooltipStyle}} >
              {toolTipsText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}