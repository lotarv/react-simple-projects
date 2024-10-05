import { useState } from "react";
import "./styles.css"
function ColorGenerator(){

    const [color, setColor] = useState("#9a9a9a");
    const [mode, setMode] = useState("hex");
    const hex_symbols = "0123456789abcdef";


    function handleGenerate() {
        if (mode == "hex") generateHex();
        else generateRgb()
    }

    function generateHex(){
        let result_color = "#";
        for (let i = 0; i < 6; i++){
            result_color += hex_symbols[Math.floor(Math.random() * hex_symbols.length)]
        }
        setColor(result_color);
    }

    function generateRgb(){
        let rgb = [];
        for (let i = 0; i < 3; i++){
            rgb.push(Math.floor(Math.random() * 255));
        }
        let [r,g,b] = rgb;

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    function handleHexBtn(){
        if (mode != "hex") {
            setMode("hex");
            generateHex();
        }
    }

    function handleRgbBtn(){
        if (mode != "rgb") {
            setMode("rgb");
            generateRgb();
        }
    }

    return (
        <div className = "color block">
            <h2 className = "color-title title">Color Generator</h2>
            <div className="color-view" style={{backgroundColor:color}}>
                <p className="color-display">{color}</p>
            </div>
            <div className="color-buttons">
                <button className="color-button" onClick={() => handleHexBtn()}>HEX</button>
                <button className="color-button" onClick={()=> handleGenerate()}>Generate</button>
                <button className="color-button" onClick={() => handleRgbBtn()}>RGB</button>
            </div>
        </div>
    )
}

export default ColorGenerator;