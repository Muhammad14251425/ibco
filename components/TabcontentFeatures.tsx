import Image from 'next/image'
import React from 'react'
import { MotionDiv } from './Framer-motion'
import Display1 from "@/public/assets/Hero/display1.webp"
import Display2 from "@/public/assets/Hero/display2.webp"
import Display3 from "@/public/assets/Hero/display3.webp"
import Display4 from "@/public/assets/Hero/display4.webp"
import pic10 from "@/public/assets/data/10.webp"
import pic11 from "@/public/assets/data/11.webp"
import pic12 from "@/public/assets/data/12.webp"
import pic13 from "@/public/assets/data/13.jpg"
import pic14 from "@/public/assets/data/14.jpg"
import pic15 from "@/public/assets/data/15.webp"
const TabcontentFeatures = () => {
  return (
    <div>
         <div className=" pt-4 flex flex-col md:grid md:grid-cols-8 gap-y-1 pb-6 w-full">
                          
                          <div className="md:col-span-2 space-y-1">
                          <div  className="bg-white h-auto mx-1 p-4 ">
                              <h2 className="text-[10px] sm:text-[12px] md:text-[10px] text-[#768B9E] xl:text-sm">Power Banks</h2>
                              <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] md:text-[11px] font-extrabold xl:text-base">Powerbank 1130 mAh Blue</h3>
                              <div className="psc:flex psc:w-full psc:justify-center psc:items-center md:block">
                              <MotionDiv
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              
                              >
                              <Image src={pic10} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px] md:w-40 md:h-40 xl:w-56 xl:h-56"/>
                              </MotionDiv>
                              </div>
                              <div className="space-x-2">
                                  <span className="text-red-500 font-light text-lg md:text-base">PKR: 190</span>
                                  <span className="text-gray-400 text-[11px] line-through md:text-[10px]">PKR: 210</span>
                              </div>
                          </div>
                          <div  className="bg-white h-auto mx-1 p-4 ">
                              <h2 className="text-[10px] sm:text-[12px] md:text-[10px] text-[#768B9E] xl:text-sm">Power Banks</h2>
                              <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] md:text-[11px] font-extrabold xl:text-base">Powerbank 1130 mAh Blue</h3>
                              <div className="psc:flex psc:w-full psc:justify-center psc:items-center md:block">
                              <MotionDiv
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              
                              >
                              <Image src={pic11} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px] md:w-40 md:h-40 xl:w-56 xl:h-56"/>
                              </MotionDiv>
                              </div>
                              <div className="space-x-2">
                                  <span className="text-red-500 font-light text-lg md:text-base">PKR: 190</span>
                                  <span className="text-gray-400 text-[11px] line-through md:text-[10px]">PKR: 210</span>
                              </div>
                          </div>
                          </div>
                          <div  className="bg-white h-auto md:flex md:flex-col justify-evenly p-4 md:col-span-4">
                              <div className="md:-mt-5">
                              <div className='xl:-mt-10'>
                              <h2 className="text-[10px] sm:text-[12px] md:text-[10px] text-[#768B9E] xl:text-sm">Power Banks</h2>
                              <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] md:text-[11px] font-extrabold xl:text-base">Powerbank 1130 mAh Blue</h3>
                              </div>
                              </div>
                              <div className="psc:flex psc:w-full psc:justify-center psc:items-center ">
                              <MotionDiv
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              
                              >
                              <Image src={pic12} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px] xl:w-[420px] xl:[380px] "/>
                              </MotionDiv>
                              </div>
                              <div className="space-x-2 xl:-mb-10">
                                  <span className="text-red-500 font-light text-lg md:text-base">PKR: 190</span>
                                  <span className="text-gray-400 text-[11px] line-through md:text-[10px]">PKR: 210</span>
                              </div>
                          </div>
                          
                          <div className="md:col-span-2 space-y-1">
                          <div  className="bg-white h-auto mx-1 p-4 ">
                              <h2 className="text-[10px] sm:text-[12px] md:text-[10px] text-[#768B9E] xl:text-sm">Power Banks</h2>
                              <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] md:text-[11px] font-extrabold xl:text-base">Powerbank 1130 mAh Blue</h3>
                              <div className="psc:flex psc:w-full psc:justify-center psc:items-center md:block">
                              <MotionDiv
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              
                              >
                              <Image src={pic13} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px] md:w-40 md:h-40 xl:w-56 xl:h-56"/>
                              </MotionDiv>
                              </div>
                              <div className="space-x-2">
                                  <span className="text-red-500 font-light text-lg md:text-base">PKR: 190</span>
                                  <span className="text-gray-400 text-[11px] line-through md:text-[10px]">PKR: 210</span>
                              </div>
                          </div>
                          <div  className="bg-white h-auto mx-1 p-4 ">
                              <h2 className="text-[10px] sm:text-[12px] md:text-[10px] text-[#768B9E] xl:text-sm">Power Banks</h2>
                              <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] md:text-[11px] font-extrabold xl:text-base">Powerbank 1130 mAh Blue</h3>
                              <div className="psc:flex psc:w-full psc:justify-center psc:items-center md:block">
                              <MotionDiv
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              
                              >
                              <Image src={pic14} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px] md:w-40 md:h-40 xl:w-56 xl:h-56"/>
                              </MotionDiv>
                              </div>
                              <div className="space-x-2">
                                  <span className="text-red-500 font-light text-lg md:text-base">PKR: 190</span>
                                  <span className="text-gray-400 text-[11px] line-through md:text-[10px]">PKR: 210</span>
                              </div>
                          </div>
                          </div>
              
                  </div>
    </div>
  )
}

export default TabcontentFeatures