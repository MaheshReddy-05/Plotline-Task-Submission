import React, { useState } from "react";
import "./Form.css";
export default function TooltipCustomizationForm({
  upToolTipsText,
  upTextSize,
  upPadding,
  upStyle,
  upCornerRadius,
  upTooltipWidth,
  upArrowWidth,
  upArrowHeight,
}) {
  const [isActive, setIsActive] = useState(false);
  const [toolTipsText, setToolTipsText] = useState("");
  const [textSize, setTextSize] = useState(14);
  const [padding, setPadding] = useState(5);
//   const [textColor, setTextColor] = useState("");
//   const [backgroundColor, setBackgroundColor] = useState("");
  const [style, setStyle] = useState({});
  const [cornerRadius, setCornerRadius] = useState(3);
  const [tooltipWidth, setTooltipWidth] = useState(3);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
  const select = selectedOption || "Select an option";

  function handleToolTipsText(event) {
    const newText = event.target.value;
    setToolTipsText(newText);
    upToolTipsText(newText);
  }
  
  function handleTextSize(event) {
    const newSize = parseInt(event.target.value);
    if (!isNaN(newSize)) {
      setTextSize(newSize);
      upTextSize(newSize);
    } else {
      setTextSize("");
    }
  }
  
  function handlePadding(event) {
    const newPadding = parseInt(event.target.value);
    if (!isNaN(newPadding)) {
      setPadding(newPadding);
      upPadding(newPadding);
    } else {
      setPadding("");
    }
  }
  
  function handleTextColor(event) {
    const newTextColor = event.target.value;
    setStyle((prevStyle) => ({
      ...prevStyle,
      color: newTextColor,
    }));
    upStyle({ color: newTextColor });
  }
  
  function handleBackgroundColor(event) {
    const newBackgroundColor = event.target.value;
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: newBackgroundColor,
    }));
    upStyle({ backgroundColor: newBackgroundColor });
  }
  
  function handleCornerRadius(event) {
    const newCR = parseInt(event.target.value);
    if (!isNaN(newCR)) {
      setCornerRadius(newCR);
      upCornerRadius(newCR);
    } else {
      setCornerRadius("");
    }
  }
  
  function handleTooltipWidth(event) {
    const newTW = parseInt(event.target.value);
    if (!isNaN(newTW)) {
      setTooltipWidth(newTW);
      upTooltipWidth(newTW);
    } else {
      setTooltipWidth("");
    }
  }
  
  function handleArrowWidth(event) {
    const newAW = parseInt(event.target.value);
    if (!isNaN(newAW)) {
      setArrowWidth(newAW);
      upArrowWidth(newAW);
    } else {
      setArrowWidth("");
    }
  }
  
  function handleArrowHeight(event) {
    const newAH = parseInt(event.target.value);
    if (!isNaN(newAH)) {
      setArrowHeight(newAH);
      upArrowHeight(newAH);
    } else {
      setArrowHeight("");
    }
  }

  return (
    <div>
      <form>
        <label>Target Element</label>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
            <label>{select}</label>
            <span className="fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setIsActive(false);
                    setSelectedOption(option);
                  }}
                  className="dropdown-item"
                >
                  <label>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <label>Tooltip text</label>
        <input type="text" value={toolTipsText} onChange={handleToolTipsText} />
        <div>
          <label>Text Size</label>
          <input type="text" value={textSize} onChange={handleTextSize} />
          <label>Padding</label>
          <input type="text" value={padding} onChange={handlePadding} />
        </div>
        {/* <label>Text Colour</label>
        <input type="text" value={textColor} onChange={handleTextColor} />
        <label>Background colour</label>
        <input
          type="text"
          value={backgroundColor}
          onChange={handleBackgroundColor}
        /> */}
        <div>
          <label>Corner radius</label>
          <input
            type="text"
            value={cornerRadius}
            onChange={handleCornerRadius}
          />
          <label>Tooltip width</label>
          <input
            type="text"
            value={tooltipWidth}
            onChange={handleTooltipWidth}
          />
        </div>
        <div>
          <label>Arrow width</label>
          <input type="text" value={arrowWidth} onChange={handleArrowWidth} />
          <label>Arrow height</label>
          <input type="text" value={arrowHeight} onChange={handleArrowHeight} />
        </div>
      </form>
    </div>
  );
}
