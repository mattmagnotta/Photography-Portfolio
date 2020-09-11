import React, { Component } from 'react'

import BeforeAfterSlider from 'react-before-after-slider'

class Slider extends Component {
  render () {
    const before = 'https://unsplash.com/photos/9yx3FyexTOU'
    const after = 'https://unsplash.com/photos/9yx3FyexTOU'

    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    )
  }
}
export default Slider
