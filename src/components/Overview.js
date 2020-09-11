import React, { Component } from 'react'
import {Link} from "react-router-dom";
import sbb from '../assets/sbb.png'
import avatar from '../assets/avatar.png'
import sba from '../assets/sba.jpg'
import spookybefore from '../assets/spookybefore.png'
import spookyafter from '../assets/spookyafter.png'
import roadBefore from '../assets/roadBefore.jpg'
import roadAfter from '../assets/roadAfter.png'
import scurveAfter from '../assets/scurveAfter.png'
import scurveBefore from '../assets/scurveBefor.png'
import buildingAfter from '../assets/buildingAfter.png'
import BeforeAfterSlider from 'react-before-after-slider'
import ReactCompareImage from 'react-compare-image';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'


export default class  extends Component{
  componentDidMount(){
    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.preventTouch, {passive: false});

}

componentWillUnmount(){
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchmove', this.preventTouch, {passive: false});
}

touchStart(e){
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
}

preventTouch(e){
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if(Math.abs(this.clientX) > minValue){
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
}

    render() {
        return (
          <>
          <NavBar/>

          <div className='lightOrDarkMode' id='overviewContainer'>

           <img style={{height:'300px',width:'300px'}} src={avatar} alt="avatar"/>


            <div id='introDiv'>
              <h1>Hey, I'm Matthew.</h1>
              <h4>I'm a creative photographer based in Portland, Oregon.
              I shoot Sony & I edit with Adobe Suite, mainly Photoshop. I sometimes use stock images from the creators at unsplash. Shout out to them! </h4>

            </div>
            <br/>
            <hr/>
            <div id='sliderContainer'>




               <div  style={{height:'650px', width:'400px'}}>
                <h6>Another doctored image. I shot the picture of the road on the Oregon coast early one morning.</h6>


                <ReactCompareImage leftImage={sba} rightImage={buildingAfter} handleSize={30}   hover={true} />

                </div>
                <div id='thirdSlideImage'style={{height:'700px', width: '400px'}} >
                <h6>This is my favorite composite. I finally felt I was able to put idea to paper for the first time.</h6>

                <ReactCompareImage leftImage={roadBefore} rightImage={roadAfter} handleSize={30}  hover={true} />
                </div>
                <div id='secondSlideImages' style={{height:'700px', width:'400px'}}>
                 <h6>Another doctored image. I shot the picture of the road on the Oregon coast early one morning.</h6>


                 <ReactCompareImage leftImage={spookybefore} rightImage={spookyafter} handleSize={30}   hover={true} />

                 </div>
             </div>
             <br/>
             <div class="buttonContainer">
                <Link to="/gallery">
                  <Button  className='Button' variant="contained" color='primary'>
                    View More
                  </Button>
                </Link>
              </div>
             <div style={{height:'40px'}}></div>
          </div>
          </>
        )
    }
}
