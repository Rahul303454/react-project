import './hero.css'
import arrowBtn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'


function Hero({ setPlayStatus, heroData, hero, setHero, playStatus }) {

  return (
    <div className='hero'>
      <div className="heroText">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="herExplore">
        <p>Explore the features</p>
        <img src={arrowBtn} />
      </div>

      <div className="hero_dot_Play">
        <ul className="heroDots">
          <li onClick={() => setHero(0)} className={hero === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHero(1)} className={hero === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHero(2)} className={hero === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>

        <div className="heroPlay">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
