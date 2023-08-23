import React from "react";

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
        display:'none',
    }
    const mergedTooltipStyle = {
        fontSize: `${textSize}px`,
        position: 'absolute',
        display: 'block',
        ...style,
      };
      function check(x,y){
        if(x===y) return mergedTooltipStyle;
        else return dumm;
      }
  return <div>
    <button >Button1</button>
    <div className="tooltip" style={check(objNum,0)}>
        {toolTipsText}
      </div>
    <button >Button2</button>
    <h2>{objNum}</h2>
    <div className="tooltip" style={check(objNum,1)}>
        {toolTipsText}
      </div>
    <button >Button3</button>
    <div className="tooltip" style={check(objNum,2)}>
        {toolTipsText}
      </div>
    <button >Button4</button>
    <div className="tooltip" style={check(objNum,3)}>
        {toolTipsText}
      </div>
    <button >Button5</button>
    <div className="tooltip" style={check(objNum,4)}>
        {toolTipsText}
      </div>
  </div>;
}
