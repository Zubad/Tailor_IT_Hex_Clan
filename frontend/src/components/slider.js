import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Form, FormControl} from 'react-bootstrap';
import Chip from "@mui/material";

function Slider(){
    return(
        <div className='slider'>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src='../images/mainONe.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src='../images/mainFour.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src='../images/mainOne.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src='../images/mainTwo.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider;