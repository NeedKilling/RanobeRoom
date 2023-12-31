import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function SliderMin ({addedBooksProfile,curentReadBooks}) {
    
    const settings = {
        slidesToShow: 6,
        easing: 'easeInOutQuad',
        autoplay: false,
        speed: 1000,
        infinite: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: true,
        swipeToSlide: false,
        touchMove: false,
        touchThreshold: false,
        waitForAnimate: true,
        variableWidth: false,
        focusOnSelect: false,
        
}
    if(curentReadBooks <= 6 ){
        settings.infinite = false
    }else{
        settings.infinite = true
    }
        return (
          <div>
           
    <div className="contineSlider">
        <Slider {...settings}>
            {
                addedBooksProfile.map(obj => (
                <Link to = {`/Book/${obj.id}/${obj.name}`}>
                    <div  className="book">
                        <div className="book_img"><img src={obj.imageurl} alt="book"></img></div>
                        <div className="book_name">{obj.name}</div>
                        <div className="book_subName">{obj.subname}</div>
                    </div>
                </Link>
                ))
            }                    
        </Slider>
    </div>
            
        </div>
        );
}

    
//export default  SliderMin