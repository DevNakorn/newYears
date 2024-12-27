'use client'
import Image from "next/image";

import "animate.css"

import { useState } from "react"

export default function Home() {
  const [textShow, setTextShow] = useState('')
  const textList = [
    "This new year, view the world with a positive outlook, speak your heart out with confidence, listen to others as well as your inner voice and you will be on the correct road in the correct direction.",
    "Happy holidays! Wishing you all the joys of the season.",
    "I wish you a smashing New Year filled with laughter."
  ]

  const randomText = () => {
    const randomIndex = Math.floor(Math.random() * textList.length)
    setTextShow(textList[randomIndex])
  }
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Image
        src="/bg.gif"
        alt="Background GIF"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div style={{ position: 'relative', zIndex: 1, color: '#fff' }} className="mt-[100px]">
        <div className="max-w-[800px] text-center mx-auto justify-center align-middle">
          <h1 className="text-6xl font-bold animate__animated animate__bounce animate__infinite animate__slow	">Happy New Years 2025</h1>
          <br />
          <br />
          <br />
          <p className=" mx-auto p-3 rounded-xl backdrop-blur-xl border max-w-32 animate__animated animate__heartBeat animate__infinite animate__slower cursor-pointer" onClick={randomText}>🎁 Get a Gift!</p>
          <div className="mt-[300px] max-sm:mt-[140px]">
            {textShow && (
              <div className="mt-4 text-3xl font-bold animate__animated animate__heartBeat">
                {textShow}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
