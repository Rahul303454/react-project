import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love",
    },
    {
      text1: "Indulge",
      text2: "your passions",
    },
    {
      text1: "Give in to",
      text2: "your passions",
    },
  ];

  const [hero, setHero] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHero((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000)
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} hero={hero} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[hero]}
        hero={hero}
        setHero={setHero}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
