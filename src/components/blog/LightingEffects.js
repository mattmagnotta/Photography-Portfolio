import React from 'react'
import post1 from './blog-post.1.md.js';
import Markdown from 'markdown-to-jsx';
import NavBar from '../NavBar.js'
function LightingEffects(props) {
  return(
    <>
    <NavBar/>
    <div className='markdownconatiner'>
      <Markdown>{post1}</Markdown>
    </div>
    </>
  )
}
export default LightingEffects
