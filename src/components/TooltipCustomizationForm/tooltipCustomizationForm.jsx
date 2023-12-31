import React, { useState } from "react";
import "./Form.css";
export default function TooltipCustomizationForm({
  upObjNum,
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
  const [textSize, setTextSize] = useState(10);
  const [padding, setPadding] = useState(10);
  const [style, setStyle] = useState({});
  const [cornerRadius, setCornerRadius] = useState(10);
  const [tooltipWidth, setTooltipWidth] = useState(200);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);
  const options = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
  const [select, setselect] = useState("Choose One");

  function handleObjNum(select) {
    const curr = select;
    if (curr === "Button 1") {
      upObjNum(0);
    }
    else if (curr === "Button 2") {
      upObjNum(1);
    }
    else if (curr === "Button 3") {
      upObjNum(2);
    }
    else if (curr === "Button 4") {
      upObjNum(3);
    }
    else if (curr === "Button 5") {
      upObjNum(4);
    }
  }

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
    upStyle((prevStyle) => ({
      ...prevStyle,
      color: newTextColor,
    }));
  }

  function handleBackgroundColor(event) {
    const newBackgroundColor = event.target.value;
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: newBackgroundColor,
    }));
    upStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: newBackgroundColor,
    }));
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
      <div className="formContainer">
        <form>
          <div className="dropdown">
            <label>Target Element</label>
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
                      handleObjNum(option);
                      setselect(option);
                    }}
                    className="dropdown-item"
                  >
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="ttText">
            <label>Tooltip text</label>
            <input type="text" value={toolTipsText} onChange={handleToolTipsText} />
          </div>

          <div className="subContainer-2">
            <div className="tt">
              <label>Text Size</label>
              <input type="text" value={textSize} onChange={handleTextSize} />
            </div>
            <div className="tt" style={{ paddingLeft: "40px" }}>
              <label>Padding</label>
              <input type="text" value={padding} onChange={handlePadding} />
            </div>
          </div>

          <div className="subContainer-3">

            <div className="tt">
              <label>Text Colour</label>
              <input
                type="color"
                id="customTooltipTextColor"
                value={style.color || ''}
                onChange={handleTextColor}
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="tt" style={{ paddingLeft: "58px" }}>

              <label>Background colour</label>
              <input
                type="color"
                id="customTooltipBackgroundColor"
                value={style.backgroundColor || ''}
                onChange={handleBackgroundColor}
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>
          <div className="subContainer-2">

            <div className="tt">
              <label>Corner radius</label>
              <input
                type="text"
                value={cornerRadius}
                onChange={handleCornerRadius}
              />
            </div>
            <div className="tt" style={{ paddingLeft: "40px" }}>
              <label>Tooltip width</label>
              <input
                type="text"
                value={tooltipWidth}
                onChange={handleTooltipWidth}
              />
            </div>
          </div>
          <div className="subContainer-2">

            <div className="tt">

              <label>Arrow width</label>
              <input type="text" value={arrowWidth} onChange={handleArrowWidth} />
            </div><div className="tt" style={{ paddingLeft: "40px" }}>

              <label>Arrow height</label>
              <input type="text" value={arrowHeight} onChange={handleArrowHeight} />
            </div>
          </div>

        </form>
      </div >
    </div >
  );
}