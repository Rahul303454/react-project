import React from 'react'
import './background.css'
import video1 from '../../assets/video1.mp4'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'


function Background({ playStatus, hero }) {

  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted >
        <source src={video1} type="video/mp4" />
      </video>
    )
  }
  else if (hero === 0) {
    return (
      <img className='background fade-in' src={img1} />
    )
  }
  else if (hero === 1) {
    return (
      <img className='background fade-in' src={img2} />
    )
  }
  else if (hero === 2) {
    return (
      <img className='background fade-in' src={img3} />
    )
  }

  return (
    <></>
  )
}
export default Background
