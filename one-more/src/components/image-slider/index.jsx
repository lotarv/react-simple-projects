import { useEffect, useState } from "react";
import './styles.css'
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
function ImageSlider(props){

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const [current, setCurrent] = useState(2);

    async function fetchImages(){
        try {
            setLoading(true);
            let imagesToPush = [];
            //Загрузка картинок с собачками
            for (let i = 0; i < props.amount; i++){
                const response = await fetch(`https://random.dog/woof.json`)
                const data = await response.json();
                imagesToPush.push(data);
            }
            setImages(imagesToPush);
        }
        catch(e) {
            console.error(e);
        }
        setLoading(false);
    }

    function handleNextSlide(){
        setCurrent(current == props.amount ? 1 : current + 1);
    }

    function handlePrevSlide() {
        setCurrent(current == 1 ? props.amount: current - 1);

    }

    useEffect(() => {
        fetchImages()
    }, [])

    if (loading) {
        return <div className="block"><h2 className="title">Loading...</h2></div>
    }
    return (
        <div className="image-slider block">
            <h2 className="title">Image Slider</h2>
            <div className="images-items">
                {
                    images.map((imageObj, index) => {
                        return (
                            <div className="image-item" style ={{display: current == index + 1? "block": "none"}}>
                                <img src={imageObj.url} alt="" className="images-image image-current"/>       
                            </div>
                        )
                    })
                }
                <div className="images-arrows">
                    <span className="left-arrow" onClick = {() => handlePrevSlide()}><FaArrowCircleLeft></FaArrowCircleLeft></span>
                    <span className="right-arrow" onClick = {() => handleNextSlide()}><FaArrowCircleRight></FaArrowCircleRight></span>
                </div>
                <div className="images-circles">
                    {
                        [...Array(props.amount)].map((_, index) => {
                            return <div className= {current == index + 1 ? "images-circle circle-active" : "images-circle" }><FaCircle></FaCircle></div>
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default ImageSlider;
