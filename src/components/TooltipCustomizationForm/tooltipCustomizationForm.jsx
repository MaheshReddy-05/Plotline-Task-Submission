import React from "react";

export default function tooltipCustomizationForm({
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
  const [style, setStyle] = useState({});
  const [cornerRadius, setCornerRadius] = useState(3);
  const [tooltipWidth, setTooltipWidth] = useState(3);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);

  function upToolTipsText(event) {
    const newText = event.target.value;
    setToolTipsText(newText);
    upToolTipsText(newText);
  }
  function upTextSize(event) {
    const newSize = parseInt(event.target.value);
    setTextSize(newSize);
    upTextSize(newSize);
  }
  function upPadding(event) {
    const newPadding = parseInt(event.target.value);
    setPadding(newPadding);
    upPadding(newPadding);
  }
  function upTextColor(event) {
    const newTextColor = event.target.value;
    setStyle((prevStyle) => ({
      ...prevStyle,
      color: newTextColor,
    }));
    upStyle({ color: newTextColor });
  }
  function upBackgroundColor(event) {
    const newBackgroundColor = event.target.value;
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: newBackgroundColor,
    }));
    upStyle({ backgroundColor: newBackgroundColor });
  }
  function upCornerRadius(event) {
    const newCR = parseInt(event.target.value);
    setCornerRadius(newCR);
    upCornerRadius(newCR);
  }
  function upTooltipWidth(event) {
    const newTW = parseInt(event.target.value);
    setTooltipWidth(newTW);
    upTooltipWidth(newTW);
  }
  function upArrowWidth(event) {
    const newAW = parseInt(event.target.value);
    setArrowWidth(newAW);
    upArrowWidth(newAW);
  }
  function upArrowHeight(event) {
    const newAH = parseInt(event.target.value);
    setArrowHeight(newAH);
    upArrowHeight(newAH);
  }
  return (
    <div>
      
    </div>
  );
}
