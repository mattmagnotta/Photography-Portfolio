
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'


const tarotDeck = [
  // Cards from https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
  // Authorship: Arthur Edward Waite, Pamela Coleman Smith was the artist and worked as an artist 'for hire.'
  // Waite was the copyright holder and he died in 1942. - These images scanned by Holly Voley
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000, zIndex: '0' })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

/**
 * Returns an array of three random items from the specified array.
 * (Randomize array element order in-place. Using Durstenfeld shuffle algorithm. Updated for EC6/ECMA2015)
 * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleDeckAndSelect3Cards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.splice(0, 3)
}

function Deck() {
  const cards = shuffleDeckAndSelect3Cards(tarotDeck)
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta, yDelta], distance, direction: [xDir, yDir], velocity }) => {
    const trigger = velocity > 0.5 // If you flick hard enough it should trigger the card to fly out
    const leftOrRight = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const y = isGone ? (200 + window.innerWidth) * yDir : down ? yDelta : 0 // When a card is gone it flys out up or down, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? leftOrRight * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit (slight enlargement / zoom in)
      const zIndex = down ? 1 : 0 // Active cards should be on top (have a higher z-index)
      return { x, y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }, zIndex }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale, zIndex }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x + (window.innerWidth / 5) * i - window.innerWidth / 5}px,${y}px,0)`),
        zIndex
      }}>
      {
        // This is the card itself, we're binding our gesture to it (and inject its index so we know which is which)
      }
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}

export default Deck
