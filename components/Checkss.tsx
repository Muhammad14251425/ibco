'use client'
import * as React from 'react'
import { SparklesCore } from './ui/sparkles'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const carosel = [
    {
        heading: "Shop To Get what you love",
        paragraph: "Timepieces that make a statement up to",
        span: " 40% off",
        button: "Start Buying",
        image: "/assets/Hero/webpc-passthru.png"
    },
    {
        heading: "Shop To Get what you love",
        paragraph: "Timepieces that make a statement up to",
        span: " 40% off",
        button: "Start Buying",
        image: "/assets/Hero/webpc-passthru.png"
    },
    {
        heading: "Shop To Get what you love",
        paragraph: "Timepieces that make a statement up to",
        span: " 40% off",
        button: "Start Buying",
        image: "/assets/Hero/webpc-passthru.png"
    },
]
import { MotionDiv, MotionH2, MotionImg, Motionbutton, Motionp } from './Framer-motion'
export function ProgressDemo() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
}
const Checkss = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 8000, stopOnInteraction: true })
    )
  return (
    <div className="h-[179px] md:h-96 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
    <div className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
    <Carousel
                plugins={[plugin.current]}
                className="w-full "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {carosel.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                                <div>
                                
                                    <div className=" ">
                                    <MotionDiv
                                        transition={{ duration: 0.5 }}
                                        className='h-[179px] sm:h-80 scs:h-72 md:h-96 flex justify-between px-4 sm:px-14 relative'>
                                            <div className="md:w-56"></div>
                                            
                                        <div

                                            className='flex justify-evenly md:justify-normal md:gap-y-4 md:mt-6 md:gap-x-0 flex-col overflow-hidden md:max-w-[350px] md:mx-0 md:ml-16 '>
                                            <MotionH2
                                                initial={{ y: -15, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                                className='uppercase text-[11px] scs:text-base tracking-tighter text-[#34BCEC] font-bold'>{item.heading}</MotionH2>
                                            <Motionp
                                                initial={{ y: -80, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                className='uppercase font-light pr-10 scs:pr-0 text-left scs:text-[28px] sm:text-[35px] sm:leading-9 scs:w-[80%] scs:leading-9 '>{item.paragraph}
                                                <span className='font-bold'>{" "} {item.span}</span>
                                            </Motionp>
                                            <Motionbutton
                                                initial={{ y: -100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.7 }}
                                                className='text-sm px-4 py-1 sm:py-3 sm:w-1/2 scs:text-base rounded-lg font-light bg-[#FED700] w-3/5'>{item.button}</Motionbutton>
                                        </div>

                                        <MotionImg
                                            initial={{ y: +120, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            src={item.image} alt='Shredder' className='h-40 w-32 mt-3 md:h-[350px] md:w-[270px] scs:h-64 scs:w-72 md:mt-2 sm:mt-5 sm:h-72' />
                                    </MotionDiv>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
    </div>
  </div>
  )
}

export default Checkss