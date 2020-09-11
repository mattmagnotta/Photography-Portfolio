import React ,{ useRef,createRef, Component } from "react";
import Loader from 'react-loader-spinner'
import PhotoLayout from './Photos/PhotoLayout'
import CompositePhotoLayout from './Photos/CompositePhotoLayout'
import NavBar from './NavBar'
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true}

    this.myDivToFocus = React.createRef()
    this.natureDiv = React.createRef()
    this.compositeDiv = React.createRef()
    this.LifestyleDiv = React.createRef()

  }
  componentDidMount(){
    this.setState({isLoading:false})
  }
  handleNatureClick = (event) => {

    this.natureDiv.current.scrollIntoView({
       behavior: "smooth",
       block: "nearest"
    })
}
  handleCompositeClick = (event) => {
      //.current is verification that your element has rendered
      console.log("buttonclicked")

          this.compositeDiv.current.scrollIntoView({
             behavior: "smooth",
             block: "nearest"
          })
      }
  handleLifestyleClick = (event) => {
      //.current is verification that your element has rendered
      console.log("buttonclicked")

          this.LifestyleDiv.current.scrollIntoView({
             behavior: "smooth",
             block: "nearest"
          })
      }


  render(){
    return(

    <>

      <NavBar/>
      <div id='LandingPageContainer'>
      <div id="loaderDiv">
      <Loader
      id="loader"
      type="ThreeDots"
      color="#70869E"
      height={100}
      width={100}
      timeout={3000} //3 secs
      />
      </div>
        <div id="galleryRoutingLinkscontainer">
          <div id='galleryRoutingLinks'>
            <div style={{cursor:'pointer'}} className='linkText' onClick={this.handleNatureClick}>Nature |</div>
            <div style={{cursor:'pointer'}} className='linkText' onClick={this.handleCompositeClick}>Composites | </div>
            <div style={{cursor:'pointer'}} className='linkText' onClick={this.handleLifestyleClick}>Lifestyle</div>
          </div>
        </div>
      <div className='centerColumn' ref={this.natureDiv} >
        <h2 style={{marginBottom:"50px"}}className="permanentMarker">Nature</h2>
        <PhotoLayout />
      </div>
        <div className='centerColumn' ref={this.compositeDiv}>
        <h2 style={{marginBottom:"50px"}} className='permanentMarker'>Composites</h2>
          <CompositePhotoLayout />
        </div>
        <div className='centerColumn' ref={this.LifestyleDiv}>
        <h2 style={{marginBottom:"50px"}} className='permanentMarker'>Lifestyle</h2>
          <PhotoLayout />
        </div>
      </div>
    </>
    )

  }
}
export default Gallery
