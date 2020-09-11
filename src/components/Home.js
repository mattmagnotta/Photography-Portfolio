import React, { useEffect, Component } from "react";
import Rellax from "rellax";
import Button from '@material-ui/core/Button';
import dunes from "../assets/dunes.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      height:"",
      disableVerticalScroll:true

  }
    this.handleScroll = this.handleScroll.bind(this)
  }
componentDidMount() {

   this.parel = new Rellax(".parallax-el", { // <---- Via class name
    speed: -40,
    center: false,
    round: true,
    vertical: this.state.disableVerticalScroll,
    horizontal: false,

  });
  new Rellax(".clouds", { // <---- Via class name
    speed: -15,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  new Rellax('.text', { // <---- Via useRef element
    speed: 10,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  window.addEventListener('scroll', this.handleScroll);

  }
  handleScroll(e,parel){

    var body = document.body,
        html = document.documentElement;

    var screenHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    this.setState({height:screenHeight})
    console.log(this.state.height)
    if(this.state.height > 2000){

      var elem = document.querySelector('.parallax-el');

      console.log('destroyed')
    }
  }


render(){
    return (

      <div className="parallaxWrapper">
        <div class="hero-image"></div>
        <div className="parallax-el"  ></div>
        <div class="text" ></div>
        <div className="clouds" data-rellax-speed="8"></div>
        <div id='scrollIndicators'>
        <section id="section07" class="demo">

        <a href="#section08"><span className='arrows'></span><span className='arrows'></span><span className='arrows'></span></a>
        </section>
        </div>
        <div className="whitespace"></div>
        <div id='HomeIntro' className="content">
              <h1 className="ph1">Hey there!</h1>
              <div id='paragraphContainer'>
              <p className='pp'> Thanks for checking out my page! This is my photography portfolio. If you're looking for my web design portfolio head over to <a href="https://mattmagnotta.com/">mattmagnotta.com</a>. Now that thats out of the way. Lets look at where to head next. You can read a brief overview about me OR you can head straight over to my gallery!</p>
              <div id="OverviewGalleryButons">
               <div class="buttonContainer">
                  <Link to="/overview">
                    <Button  className='Button' variant="contained" color='primary'>
                      Overview
                    </Button>
                  </Link>
                </div>
                <div class="buttonContainer">
                  <Link to="/gallery">
                    <Button variant="contained" color="primary">
                      Gallery
                    </Button>
                  </Link>
                  <div  onmouseover="document.body.style.overflow='hidden';"  onmouseout="document.body.style.overflow='auto';"></div>
                </div>

              </div>
              </div>

        </div>
    </div>

    );
  }
}
