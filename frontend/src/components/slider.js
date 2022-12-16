import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Form, FormControl} from 'react-bootstrap';
import {Chip} from "@mui/material";

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
                    src='../images/newMain.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src='../images/mainTwo.jpg'
                    alt="carousel img"/>
                </Carousel.Item>
                
            </Carousel>

            <div className="hn">
                <p>Find the perfect <i>Tailor</i> for your Clothes</p>
                <Form inline>
                    <img  alt="search" src="../images/search.png"/>
                    <FormControl type="text" placeholder="Try ......." className="mr-lg-0"/>
                    <button className='btnn'>Search</button>
                </Form>
                <div className='popular'>
                    Popular:
                    <Chip className='Chip' variant='outlined' size='slamm' label='Male' component='a' href='#chip'clickable />

                    <Chip className='Chip' variant='outlined' size='slamm' label='Female' component='a' href='#chip' clickable />

                    <Chip className='Chip' variant='outlined' size='slamm' label='Child' component='a' href='#chip' clickable />

                    <Chip className='Chip' variant='outlined' size='slamm' label='Classic' component='a' href='#chip' clickable />
                </div>
            </div>
        </div>
    )
}
export default Slider;