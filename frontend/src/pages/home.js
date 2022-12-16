import React from 'react';
import Header from '../components/header';
import Slider from '../components/slider';


function Home(){
    return(
        <div className='bgcolor'>
            <Header/>
            <div>
                <Slider/>
            </div>
        </div>
    )
}
export default Home;