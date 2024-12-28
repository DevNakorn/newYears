'use client'
import Image from "next/image";

import "animate.css"

import { useState } from "react"

export default function Home() {
  const [textShow, setTextShow] = useState('')
  const textList = [
    "ในวารดิถีขึ้นปีใหม่ขอให้ท่านและครอบครัวพบแต่ความสุขความเจริญ",
    "ปีใหม่ 2568 นี้ ขอให้ท่านมีความสุขเกษมสำราญ สัมฤทธิผลดังใจปรารถนา",
    "สวัสดีปีใหม่ 2568 ขอให้ท่านโชคดีมีชัย คิดสิ่งใดสมหวังดั่งใจหมาย",
    "สวัสดีปีใหม่ 2568 ขออวยพรให้ท่านมีความปีติยินดีตลอดทั้งปี",
    "Happy New Year 2025 ขอให้ทุกสิ่งที่คิดหวัง สมปรารถนาเป็นจริงดั่งใจหวังทุกประการ",
    "ขออวยพรให้ท่านมีสุขภาพที่แข็งแรงและมีแต่ความเจริญรุ่งเรืองในปีใหม่ 2568",
    "สวัสดีปีใหม่ ขอให้ท่านและครอบครัวมีสุขภาพกายและใจที่แข็งแรง สุขสวัสดิ์",
    "ปีใหม่ วันใหม่ เริ่มชีวิตใหม่ ขอให้สุข สนุกสดใส เบิกบานใจ สวัสดีปีใหม่",
    "ในเทศกาลส่งความสุขวันปีใหม่ ขอส่งความปรารถนาดีจากเราไปถึงท่านและครอบครัว",
    "Happy New Year 2025 ขอให้ทุกวันเต็มไปด้วยความสำเร็จ ความสุข และความรุ่งเรือง",
    "ขออำนวยอวยพรให้ทุกท่านมีแต่ความสุข ความเจริญ พบแต่สิ่งดีๆ เข้ามาในชีวิต",
    "ขออวยพรให้ท่านมีความปีติยินดีตลอดทั้งปี Happy New Year 2025",
    "ขอให้ปีใหม่ 2568 นี้เป็นปีที่ดีสำหรับท่านและคนที่ท่านรัก",
    "สวัสดีปีใหม่ 2568 ขอให้ปีใหม่เต็มไปด้วยเสียงหัวเราะและความรัก",
    "ปีใหม่ 2568 ขออำนวยอวยพรให้ท่านมีแต่ความสุข ร่ำรวยเงินทองไหลมาเทมา",
    "ขออวยพรให้ท่านและครอบครัวมีความสุขความเจริญตลอดปี 2568",
    "ขอให้โชคจงเป็นของท่าน และขอให้ประสบความสำเร็จในปีนี้ Happy New Year 2025",
    "ขออำนาจสิ่งศักดิ์สิทธิ์ทั้งหลาย โปรดบันดาลให้ท่านพบความสุขในปีใหม่นี้",
    "สวัสดีปีใหม่ขออวยพรให้ท่านจงประสบความสำเร็จในทุกๆ สิ่งในปี 2568",
    "สวัสดีปีใหม่ 2568 ขอให้ท่านสุขภาพร่างกายแข็งแรงและมีความสุขยิ่งๆ ขึ้นไป",
    "ขอให้ปีใหม่ 2568 จงมีแต่ความสุข สดใส ขอพระเจ้าจงมอบพรแก่ครอบครัว ญาติมิตร และสหาย",
    "ขอให้ปีนี้นำแรงบันดาลใจและความสุขมาให้กับท่านและครอบครัว",
    "ขอให้ท่านพบเจอแต่ความโชคดี สุขภาพร่างกายแข็งแรง สวัสดีปีใหม่ 2568",
    "ขอให้ท่านมีความสุขมากๆ และเจริญรุ่งเรืองในวันปีใหม่",
    "ขออวยพรให้ท่านทำตามความฝันสำเร็จในทุกๆ ปี สวัสดีปีใหม่ 2568",
    "สุขสันต์วันปีใหม่ ขอให้มีความสุขกาย สบายใจ ปราศจากทุกข์โศก โรคภัยทั้งหลายทั้งปวง",
    "ขอให้ปีใหม่ ขอให้เป็นการเริ่มต้นของสิ่งดีๆ ที่จะเข้ามาตลอดปี",
    "ปีใหม่ปีนี้ ขอให้ท่านและครอบครัวสุขสมหวังเป็นจริงดั่งปรารถนา",
    "ขออวยพรให้มีแต่ความสุขและความอบอุ่น รวมทั้งขอให้การงานของท่านประสบความสำเร็จและก้าวหน้ายิ่งๆ ขึ้นไป",
    "ขอให้ท่านและครอบครัวพบเจอแต่ความสุข คิดสิ่งใดสมปรารถนาด้วยเทอญ",
    "ขอให้ท่านสุขภาพดีและมีความสุขในทุกๆ วันของปีใหม่นี้",
    "สุขสันต์วันปีใหม่ ขอให้เดชะคุณพระศรีรัตนตรัย จงคุ้มครองให้ปลอดภัย ขอให้ปราศจากโรคภัยทั้งปวง",
    "ขอให้ท่านมีความสุข ความเจริญ ความปีติยินดีมามอบให้เนื่องในวันปีใหม่ 2568",
    "ขออวยชัยให้ชีวิตเต็มไปด้วยเสียงหัวเราะและความสุขตลอดปี",
    "สุขสันต์วันปีใหม่ 2568 ขออำนาจบารมีคุณพระศรีรัตนตรัย อวยพรให้มีความสุขกาย สุขใจ คิดหวังสิ่งใดขอให้สมดังปรารถนา",
    "สวัสดีวันปีใหม่ ขอคุณพระศรีรัตนตรัย อวยพรและบันดาลให้ท่านและครอบครัวอยู่เย็น เป็นสุขตลอดไป",
    "สุขสันต์วันปีใหม่ ขออวยพรให้สุขภาพร่างกายแข็งแรง มั่งคั่ง มั่งมี อยู่ดี มีสุขตลอดปี ตลอดไป",
    "สวัสดีปีใหม่ 2568 ขออวยพรให้ท่านประสบความสำเร็จในทุกๆ สิ่งในปีใหม่นี้",
    "ปีใหม่นี้ขออำนาจคุณพระศรีรัตนตรัยดลบันดาลให้พบแต่ความเจริญก้าวหน้า โชคลาภไหลมาเทมาไม่ขาดสาย",
    "ในเทศกาลปีใหม่นี้ ขอกราบคุณพระศรีรัตนตรัยอวยพรให้ท่านเจริญด้วยอายุ วรรณะ สุขะ พละยิ่งๆ ขึ้นไป",
    "สวัสดีปีใหม่ ขอพรจากสิ่งศักดิ์สิทธิ์ทั่วหล้า ให้ท่านและครอบครัว มีแต่เงินทองไหลมาไม่ขาดสายด้วยเทอญ",
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
