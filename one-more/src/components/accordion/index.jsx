import data from "./data";
import { useEffect, useState } from "react";
import "./styles.css"
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'

function Accordion(){

    const [selected, setSelected] = useState(0);
    const [multiple, setMultiple] = useState([]);
    const [multipleEnabled, setMultipleEnabled] = useState(false);

    function handleElementClick(currentId) {
        if (!multipleEnabled) {
            setSelected(selected == currentId? 0 : currentId)
        }
        else {
            let multipleCpy = [...multiple];
            multiple.indexOf(currentId) != -1 ? multipleCpy.splice(multipleCpy.indexOf(currentId), 1) : multipleCpy.push(currentId);
            setMultiple(multipleCpy)
        }
    }

    function handleButtonClick(){
        if (multipleEnabled) {
            setMultiple([])
        }
        else {
            setSelected(0);
        }

        setMultipleEnabled(!multipleEnabled)
    }
    useEffect(() => {
        console.log(multiple);
        console.log(multipleEnabled)
    })
    return (
        <div className="accordion block">
            <h2 className = "accordion-title title">Accordion</h2>
            {
                data.map(questionObj => {
                    return(
                        <div className="accordion-element" key = {questionObj.id} onClick = {() => handleElementClick(questionObj.id)}>
                            <div className="accordion-question">{questionObj.question}<span className="accordion-status">{selected == questionObj.id || multiple.indexOf(questionObj.id) != -1 ?  <FaMinus></FaMinus>:<FaPlus></FaPlus>}</span></div>
                            
                            <div className={selected == questionObj.id || multiple.indexOf(questionObj.id) != -1 ? "accordion-answer answer-active": "accordion-answer"}>{questionObj.answer}</div>
                        </div>
                    )
                })
            }

            <button onClick = {() => handleButtonClick()}className="accordion-button">{multipleEnabled? "Disable multiple choice": "Enable multiple choice"}</button>
        </div>
    )
}

export default Accordion;