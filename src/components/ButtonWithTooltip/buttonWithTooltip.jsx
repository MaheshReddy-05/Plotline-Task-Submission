import React from "react";
import './RectangularBoxWithButtons.css';

export default function buttonWithTooltip({
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
    position: "absolute",
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
  return (
    <div>
      <div className="circular-box">
        <div className="button top-left">
          <button>Button1</button>
        </div>
        <div className="tooltip" style={check(objNum, 0)}>
          {toolTipsText}
        </div>
        <div className="button top-right">
          <button>Button2</button>
        </div>
        <div className="tooltip" style={check(objNum, 1)}>
          {toolTipsText}
        </div>
        <div className="button bottom-left">
          <button>Button3</button>
        </div>
        <div className="tooltip" style={check(objNum, 2)}>
          {toolTipsText}
        </div>
        <div className="button bottom-right">
          <button>Button4</button>
        </div>
        <div className="tooltip" style={check(objNum, 3)}>
          {toolTipsText}
        </div>
        <div className="button center">
          <button>Button5</button>
        </div>
        <div className="tooltip" style={check(objNum, 4)}>
          {toolTipsText}
        </div>
      </div>
    </div>
  );
}
