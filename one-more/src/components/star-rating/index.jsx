import { FaStar } from "react-icons/fa";
import "./styles.css"
import { useState } from "react";
function StarRating(props) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseEnter(currentStar){
        setHover(currentStar);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    function handleMouseClick(currentStar){
        setRating(currentStar);
    }

    return (
        <div className="stars block">
            <h2 className="title">Star Rating</h2>
            <div className="stars-items">
                {
                    [...Array(props.amount)].map((_, index) => {
                        return <div key={index} className="stars-item">
                            <FaStar
                                size={50}
                                onMouseEnter={() => handleMouseEnter(index + 1)}
                                onMouseLeave={() => handleMouseLeave()}
                                onClick={() => handleMouseClick(index + 1)}
                                style = {{color: index + 1 <= hover? "gold" : "black"}}

                            ></FaStar>
                        </div>
                    })
                }
            </div>
            <div className="stars-display">current rating: {rating}</div>
        </div>
    )
}

export default StarRating;