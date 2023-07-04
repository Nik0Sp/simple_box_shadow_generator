import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const elem = document.getElementById("element");
    const code = document.getElementById("code");
    const inputs = document.querySelectorAll(".slider-container input");

    function generateShadow() {
      const hShadow = document.getElementById("h-shadow").value;
      const vShadow = document.getElementById("v-shadow").value;
      const blurRadius = document.getElementById("blur-radius").value;
      const spreadRadius = document.getElementById("spread-radius").value;
      const shadowColor = document.getElementById("shadow-color").value;
      const shadowColorOpacity = document.getElementById(
        "shadow-color-opacity"
      ).value;
      const shadowInset = document.getElementById("inset-shadow").checked;

      const boxShadow = shadowInset
        ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
            shadowColor,
            shadowColorOpacity
          )}`
        : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
            shadowColor,
            shadowColorOpacity
          )}`;

      elem.style.boxShadow = boxShadow;
      code.textContent = `box-shadow: ${boxShadow};`;
    }

    function hexToRgba(shadowColor, shadowColorOpacity) {
      const r = parseInt(shadowColor.substr(1, 2), 16);
      const g = parseInt(shadowColor.substr(3, 2), 16);
      const b = parseInt(shadowColor.substr(5, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`;
    }

    inputs.forEach((inp) => inp.addEventListener("input", generateShadow));
    generateShadow();

    return () => {
      inputs.forEach((inp) => inp.removeEventListener("input", generateShadow));
    };
  }, []);

  function copyCode() {
    const code = document.getElementById("code");
    code.select();
    document.execCommand("copy");
    alert("Code wurde kopiert");
  }

  return (
    <div className="section">
      <h2 className="title">Simple box shadow generator</h2>
      <div className="container glass">
        <div className="result">
          <div className="result-box" id="element"></div>
        </div>
        <div className="slider-container glass">
          <div className="slider">
            <label htmlFor="h-shadow">Horizontal Shadow</label>
            <input
              type="range"
              id="h-shadow"
              max={100}
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="slider">
            <label htmlFor="v-shadow">Vertical Shadow</label>
            <input
              type="range"
              id="v-shadow"
              max={100}
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="slider">
            <label htmlFor="blur-radius">Blur Radius</label>
            <input
              type="range"
              id="blur-radius"
              max={100}
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="slider">
            <label htmlFor="spread-radius">Spread Radius</label>
            <input
              type="range"
              id="spread-radius"
              max={100}
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="slider">
            <label htmlFor="shadow-color">Shadow Color</label>
            <input
              type="color"
              id="shadow-color"
              max={100}
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="slider">
            <label htmlFor="shadow-color-opacity">Shadow Color Opacity</label>
            <input
              type="range"
              id="shadow-color-opacity"
              max="1"
              min="0"
              step="0.1"
              defaultValue={1}
            />
          </div>

          <div className="slider">
            <label htmlFor="inset-shadow">Inset Shadow</label>
            <input type="checkbox" id="inset-shadow" />
          </div>
        </div>
        <div className="output-code">
          <textarea id="code" rows="2"></textarea>
          <button onClick={copyCode}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
