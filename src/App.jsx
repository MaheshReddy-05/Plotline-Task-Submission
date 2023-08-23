import React, { useState } from 'react';
import TootTip from "./components/TooltipCustomizationForm/tooltipCustomizationForm";
function App() {
  const [objNum, setobjNum] = useState(4);
  const [toolTipsText, setToolTipsText] = useState('');
  const [textSize, setTextSize] = useState(14);
  const [padding, setPadding] = useState(5);
  const [style, setStyle] = useState({});
  const [cornerRadius, setCornerRadius] = useState(3);
  const [tooltipWidth, setTooltipWidth] = useState(3);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);

  function upToolTipsText(text) {
    setToolTipsText(text);
  }
  function upTextSize(size){
    setTextSize(size);
  }
  function upPadding(padding){
    setPadding(padding);
  }
  function upStyle(style){
    setStyle(style);
  }
  function upCornerRadius(cr){
    setCornerRadius(cr);
  }
  function upTooltipWidth(tw){
    setTooltipWidth(tw);
  }
  function upArrowWidth(aw){
    setArrowWidth(aw);
  }
  function upArrowHeight(ah){
    setArrowHeight(ah);
  }

  return (
    <div className="App">
      <TootTip 
      upToolTipsText={upToolTipsText}
      upTextSize={upTextSize}
      upPadding={upPadding}
      upStyle={upStyle}
      upCornerRadius={upCornerRadius}
      upTooltipWidth={upTooltipWidth}
      upArrowWidth={upArrowWidth}
      upArrowHeight={upArrowHeight}
       ></TootTip>
    </div>
  );
}

export default App;
