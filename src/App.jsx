import React, { useState } from 'react';
import TootTip from "./components/TooltipCustomizationForm/tooltipCustomizationForm";
import ButtonWithTooltip from './components/ButtonWithTooltip/buttonWithTooltip';
function App() {
  const [objNum, setobjNum] = useState(5);
  const [toolTipsText, setToolTipsText] = useState('');
  const [textSize, setTextSize] = useState(14);
  const [padding, setPadding] = useState(5);
  const [style, setStyle] = useState({});
  const [cornerRadius, setCornerRadius] = useState(3);
  const [tooltipWidth, setTooltipWidth] = useState(200);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);

  function upObjNum(num){
    setobjNum(num);
  }
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
      upObjNum = {upObjNum}
      upToolTipsText={upToolTipsText}
      upTextSize={upTextSize}
      upPadding={upPadding}
      upStyle={upStyle}
      upCornerRadius={upCornerRadius}
      upTooltipWidth={upTooltipWidth}
      upArrowWidth={upArrowWidth}
      upArrowHeight={upArrowHeight}
       ></TootTip>
      <ButtonWithTooltip
      objNum={objNum}
      toolTipsText={toolTipsText}
      textSize={textSize}
      padding={padding}
      style={style}
      cornerRadius={cornerRadius}
      tooltipWidth={tooltipWidth}
      arrowWidth={arrowWidth}
      arrowHeight={arrowHeight}
      >

      </ButtonWithTooltip>
    </div>
  );
}

export default App;
