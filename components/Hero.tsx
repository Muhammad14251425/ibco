'use client'
import * as React from "react"
import { MotionDiv, MotionH2, MotionImg, Motionbutton, Motionp } from './Framer-motion'
import Logo from "@/public/assets/navbar/Ibico Bag-03.png"
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Display1 from "@/public/assets/Hero/display1.webp"
import Display2 from "@/public/assets/Hero/display2.webp"
import Display3 from "@/public/assets/Hero/display3.webp"
import Display4 from "@/public/assets/Hero/display4.webp"
import Search from "@/public/assets/navbar/search.svg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Autoplay from "embla-carousel-autoplay"
import Spiral1 from "@/public/assets/Hero/spiral.webp"
import Spiral2 from "@/public/assets/Hero/spiral1.webp"
import Spiral3 from "@/public/assets/Hero/spiral2.webp"
import Pouches from "@/public/assets/Hero/pouches.webp"
import Arrow from "@/public/assets/Hero/rightarrow.svg"
import Pouchess from "@/public/assets/Hero/pouchesbig.webp"
import pic1 from "@/public/assets/data/1.webp"
import pic2 from "@/public/assets/data/2.webp"
import pic3 from "@/public/assets/data/3.webp"
import pic4 from "@/public/assets/data/4.webp"
import pic5 from "@/public/assets/data/5.webp"
import pic6 from "@/public/assets/data/6.webp"
import pic7 from "@/public/assets/data/7.jpg"
import pic8 from "@/public/assets/data/8.webp"
import pic9 from "@/public/assets/data/9.webp"
import pic10 from "@/public/assets/data/10.webp"
import pic11 from "@/public/assets/data/11.webp"
import pic12 from "@/public/assets/data/12.webp"
import pic13 from "@/public/assets/data/13.jpg"
import pic14 from "@/public/assets/data/14.jpg"
import pic15 from "@/public/assets/data/15.webp"
import { Progress } from "@/components/ui/progress"
import Timer from "./Timer"
import { SparklesCore } from "./ui/sparkles"
import NavShort from "./NavShort"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Repeat from "@/public/assets/navbar/retweet-11.png"
import Heart from "@/public/assets/navbar/heart.svg"
import User from "@/public/assets/navbar/user-round.svg"
import Bag from "@/public/assets/navbar/cart.svg"
const data1 = [
    {
        Category : 'Shredder',
        Name : 'GBC Swingline EX10-06 Shredder',
        Image:  pic1,
        price: '77,289.00',
    },        
    {
        Category: "Laminator",
        Name: "A3 Laminator Lamination Machine",
        Image: pic2,
        price: "27,999.00"
    },
    {
        Category: "Sealer Machine",
        Name: "Sealer Machine PFS 300mm Iron Body",
        Image: pic3,
        price: "4,200.00"
    },
    {
        Category: "Scissors & Cutters",
        Name: "Peach Paper Trimmer (Cutter)",
        Image: pic4,
        price: "3,750.00"
    },
    {
        Category: "Scissors & Cutters",
        Name: "PVC Die Cutter",
        Image: pic5,
        price: "6,400.00"
    },
    {
        Category : 'Binders & Binder Accessories',
        Name : 'Twin Loop Wire Binding (Ibiwire)',
        Image:  pic8,
        price: '3,100.00',
    }, 
    {
        Category: "Binders & Binder Accessories",
        Name: "GBC CombBind C250Pro Binder Spiral",
        Image: pic7,
        price: "175,000.00"
    },
]
const data2 = [
           
    {
        Category: "Binders & Binder Accessories",
        Name: "Twin Loop Wire Binding (Ibiwire)",
        Image: pic9,
        price: "2,390.00"
    },
    {
        Category: "Binders & Binder Accessories",
        Name: " A-4 Lamination Pouch 80 Microns",
        Image: pic10,
        price: "1,330.00"
    },
    {
        Category: "Binders & Binder Accessories",
        Name: "PVC Binding Sheet A4 15 MM",
        Image: pic11,
        price: "1,450.00"
    },
    {
        Category: "Binders & Binder Accessories",
        Name: "A-4 Lamination Pouch",
        Image: pic12,
        price: "1,055.00"
    },
    {
        Category: "Counting Machine",
        Name: "Sardar SM-998P Mix Value",
        Image: pic13,
        price: "62,639.00"
    },
    {
        Category: "Counting Machine",
        Name: "New Wave NW-2830 Cash Counting",
        Image: pic14,
        price: "23,999.00"
    },
    {
        Category: "Staplers & Punches",
        Name: "Best Quality PVC Cutter",
        Image: pic15,
        price: "4,670.00"
    },

]
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
const projects = [
    {
        image: Spiral1,
        paragraph: "Catch big  on the spirals",
        span: " 40% off",
    },
    {
        image: Spiral2,
        paragraph: "Catch big  on the spirals",
        span: " 70% off",
    },
    {
        image: Spiral3,
        paragraph: "Shop the  product",
        span: " Hottest",
    },
    {
        image: Pouches,
        paragraph: "Shop the  product",
        span: " Hottest",
    },

]
let footer = [
    {
        heading: "Shredder and Laminators",
        item1: "Shredders",
        item2: "Laminators",
    },
    {
        heading: "Binder & binder Accessories",
        item1: "Plastic Binding spirals",
        item2: "Lamination Pouch",
        item3: "Twin Loop Wire Binding",
        item4: "PVC Binding Sheets"
    },
    {
        heading: "School Sets",
        item1: "ID Cards",
        item2: "Yo-Yo Clip",
        item3: "ID Jackets",
        item4: "Lanyards"
    },
    {
        heading: "SCissors & Cutters",
        item1: "Paper Trimmers (Cutter)",
        item2: "Die Cutters",
    },
    {
        heading: "Staplers & punches",
        item1: "Staplers",
        item2: "Slot Punches",
    },
    {
        heading: "Cash Counting Machine",
    },
    {
        heading: "Manual",
        item1: "Hand Pallet Truck",
    },
    {
        heading: "Tapes & Dispensers",
        item1: "Binding Tapes",
    },
    {
        heading: "Measuirng Tools & Scales",
        item1: "Digital Weighing Scale",
    },
    {
        heading: "Shrink Wrap ",
        item1: "Stretch Wrap Rolls",
    }
]
const hover = [
    {
        image: Repeat,
        name: "Compare"
    },
    {
        image: Heart,
        name: "Wishlist"
    },
    {
        image: User,
        name: "My Account"
    },
    {
        image: Bag,
        name: "Cart"
    },
]
import { ChevronDown } from "lucide-react"
import Menu from "@/public/assets/navbar/menu.svg"
export function ProgressDemo() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
}
const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 8000, stopOnInteraction: true })
    )


    return (


        <div>
            <div className="h-[12vh] hidden thh:block ">
                <div className="thh:max-w-6xl xl:max-w-7xl thh:mx-auto thh:flex thh:justify-between thh:items-center mt-6 ">
                    <Image src={Logo} alt="Logo" className="h-10 w-28" />
                    <div className="flex items-center gap-x-6  ">
                        <NavShort />
                        <div className="flex  ">
                            <DropdownMenu>



                                <div className="flex">
                                    <input type="text" className="border-[#FED700] outline-none max-h-12 border-y-2 border-l-2 px-4 py-2 rounded-l-full text-sm" placeholder="Search for Products" />
                                    <DropdownMenuTrigger className="flex gap-x-12 outline-none border-[#FED700] border-y-2 relative pr-2 rounded-none py-2 max-h-12">
                                        <h2 className="mr-20 text-sm text-gray-400 font-normal">Accessories</h2>
                                        <ChevronDown />
                                    </DropdownMenuTrigger>


                                    <button className="bg-[#FED700] max-h-12 px-4 py-2 rounded-r-full"><Image src={Search} alt="search" className="h-4 w-4" /></button>
                                </div>

                                <DropdownMenuContent className="flex flex-col justify-center gap-y-[1px] bg-white font-normal pb-0 w-64 ">
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">Shreadders</p>
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">Cutters</p>
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">Spirals</p>
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">lamination</p>
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">smart id card</p>
                                    <p className="  -mt-1 rounded-sm pl-1 hover:bg-blue-400 ">printers</p>
                                </DropdownMenuContent>


                            </DropdownMenu>
                            <div>
                            </div>
                        </div>
                    </div>
                   
                    <div>

                        {hover.map((item,index)=>(

                            <TooltipProvider key={index} >
                                <Tooltip>
                                    <TooltipTrigger><Image src={item.image}  className="h-6 w-6 mx-5" alt={item.name}/></TooltipTrigger>
                                    <TooltipContent className="bg-black text-white">
                                        <p>{item.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                                ))}



                    </div>
                </div>
                    <div className="max-w-7xl thh:mx-7 mt-5 xl:mx-auto flex  justify-between">
                        <div className="flex justify-evenly gap-x-7 items-center  ">
                            <div className="flex flex-col">
                            <div className="flex bg-[#FED700] gap-x-3 py-3 px-5 pr-32 rounded-t-lg ">
                                <Image src={Menu} alt="menu" />
                                <h2 className="font-bold">All Departments</h2>
                            </div>
                            <div className="bg-white px-6 h-auto text-sm py-3 font-semibold rounded-b-lg cursor-pointer z-10">
                                <h2 className="border-b py-2 hover:ml-1 ">Value of the Day</h2>
                                <h2 className="border-b py-2 hover:ml-1">Top 100 Offers</h2>
                                <h2 className="border-b py-2 hover:ml-1">New Arrivals</h2>
                                <h2 className="border-b py-2 hover:ml-1">Laminators</h2>
                                <h2 className="border-b py-2 hover:ml-1">Printers</h2>
                                <h2 className="border-b py-2 hover:ml-1">Cards</h2>
                                <h2 className="border-b py-2 hover:ml-1">Spirals</h2>
                                <h2 className="border-b py-2 hover:ml-1">Shreaders</h2>
                                <h2 className="border-b py-2 hover:ml-1">Cutters</h2>
                                <h2 className="py-2">Cutters</h2>
                            </div>
                            </div>
                            <div className="-mt-96">
                                <h2 className="text-red-500 font-bold">All Pages</h2>
                            </div >
                            <div className="-mt-96">
                                <h2 className="font-bold">Featured Brands</h2>
                            </div>
                            <div className="-mt-96">
                                <h2 className="font-bold">Trending Styles</h2>
                            </div>
                            <div className="-mt-96">
                                <h2 className="font-bold">Gift Cards</h2>
                            </div>

                        
                        </div> 


                        <div className="mt-4">
                            
                        <h2 className="font-bold">Free Shipping on Orders $50+</h2>
                        </div>   
                    </div>
            </div>
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

                                    <div className="bg-gray-200  ">
                                        <MotionDiv
                                            transition={{ duration: 0.5 }}
                                            className='h-[179px] sm:h-80 scs:h-72 md:h-96 flex justify-between xl:justify-evenly xl:h-[420px] px-4 sm:px-14 '>
                                            <div className="md:w-56"></div>

                                            <div

                                                className='flex justify-evenly md:justify-normal md:gap-y-4 xl:max-w-xs  md:mt-6 md:gap-x-0 flex-col overflow-hidden md:max-w-[350px] md:mx-0 md:ml-16 lg:ml-0 '>
                                                <MotionH2
                                                    initial={{ y: -15, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5 }}
                                                    className='uppercase text-[11px] scs:text-base tracking-tighter text-[#34BCEC] font-bold lg:tracking-[3px]'>{item.heading}</MotionH2>
                                                <Motionp
                                                    initial={{ y: -80, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6 }}
                                                    className='uppercase font-light pr-10 scs:pr-0 text-left scs:text-[28px] sm:text-[35px] lg:tracking-[4px] lg:text-4xl lg:w-full sm:leading-9 scs:w-[80%] scs:leading-9 '>{item.paragraph}
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
                                                src={item.image} alt='Shredder' className='h-40 w-32 mt-3 xl:-ml-24 xl:[h-480px] xl:w-[310px] xl:mt-12 md:h-[350px] md:w-[270px] scs:h-64 scs:w-72 md:mt-2 sm:mt-5 sm:h-72' />
                                        </MotionDiv>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div>
                <div className='relative max-w-xl lg:max-w-6xl lg:mx-5  thh:max-w-7xl xl:mx-auto thh:mx-5 md:mx-7 md:max-w-[930px] sm:mx-auto max-h-36 scs:max-h-44 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80 mt-2 mx-5 scs:mx-10 bg-gray-100 md:bg-white rounded-lg'>
                    {
                        projects.map((project, index) => (
                            <div key={index} className='md:bg-gray-100 md:p-2 snap-center md:mr-2 w-full md:w-1/2 thh:w-1/3 2xl:w-1/4 flex-shrink-0 grid grid-cols-2 gap-y-5 2xl:gap-x-0 scs:gap-x-5 md:gap-x-4 items-center justify-center mx-10 md:mx-0 m-4  h-auto'>
                                <MotionDiv
                                    initial={{ y: +20, opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Image src={project.image} alt='img'
                                        className='w-40 h-28 scs:h-36 md:h-[108px] object-contain ml-4 scs:mx-auto float-right' />
                                </MotionDiv>
                                <div className='h-full flex flex-col justify-evenly px-0 '>

                                    <h2 className='text-base text-left scs:text-[18px] scs:leading-5 font-light uppercase w-[65%] md:w-[90%] leading-4' >{project.paragraph}<span className='font-bold' >{project.span}</span> on the spirals</h2>
                                    <button className='text-[12px] font-bold flex gap-x-2 items-center'>Shop now
                                        <Image src={Arrow} alt='right-arrow' className='h-3 w-3 bg-[#FED700] rounded-full text-white' />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=" md:mx-7 lg:max-w-6xl thh:max-w-7xl xl:gap-x-0 xl:mx-auto lg:mx-5 md:max-w-[930px] md:grid md:grid-cols-2 thh:grid-cols-3 2xl:grid-cols-4 md:gap-x-2 md:mb-10">
                <div>
                    <div className="border-[#FED700] fss:max-w-[460px] thh:max-w-[430px] lg:max-w-[570px] scs:mx-auto md:mx-0 mt-4 border-2 flex flex-col justify-evenly gap-y-3 mx-4 max-w-md md:max-w-[470px] h-auto rounded-xl p-4">
                        <h2 className='animate-pulse font-bold md:text-xl md:font-medium'>Special Offer</h2>
                        <div className="flex items-center justify-center w-full">
                            <Image src={Pouchess} alt='pouches' className="md:h-72 md:w-72" />
                        </div>
                        <h2 className='text-sm text-center tracking-tighter font-bold text-[#0062BD]'>Game Console Controller + USB 3.0 Cable</h2>
                        <h3 className='text-center text-3xl text-[#333E48] mb-5'>$99.00</h3>
                        <div className='flex justify-between'>
                            <h2 className='text-[#333E48]'>
                                Already Sold:
                                <span className='font-semibold'>74</span>
                            </h2>
                            <h2 className='text-[#333E48]'>
                                Available:
                                <span className='font-semibold'>26</span>
                            </h2>
                        </div>

                        <div className="bg-[#EEEEEE] max-w-md h-4 rounded-lg ">
                            <div className="bg-[#FED700] h-4 rounded-lg w-[60%]" />
                        </div>
                        <h4 className="text-[#333E48] text-center text-sm tracking-tighter">Hurry Up! Offer ends in:</h4>
                        <div className="flex justify-center mt-2">
                            <Timer duration={8 * 3600 + 20 * 60 + 45} />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex gap-x-8  text-sm font-semibold text-[#333E48]">
                                <h2>HOURS</h2>
                                <h2 className="-ml-2">MINS</h2>
                                <h2>SECS</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl mx-5 thh:max-w-[870px] 2xl:max-w-5xl xl:mr-0 thh:mx-1 xl:ml-2 csb:mx-auto thh:col-span-2 2xl:col-span-3" >
                    <div className="" >
                        <Tabs defaultValue="featured" className="[400px] mt-4  ">
                            <TabsList className="flex justify-center psc:gap-x-8 md:gap-x-1 thh:gap-x-7 xl:gap-x-16 2xl: mx-1 scs:mx-auto border-2">
                                <TabsTrigger className="px-6 thh:px-20 2xl:px-24" value="featured">Featured</TabsTrigger>
                                <TabsTrigger className="px-6 thh:px-20 2xl:px-24" value="onsale">On Sale</TabsTrigger>
                                <TabsTrigger className="px-6 thh:px-20 2xl:px-24" value="toprated">Top Rated</TabsTrigger>
                            </TabsList>
                            <TabsContent value="featured">
                                <div className="bg-gray-50 md:bg-white mt-4">
                                    <div className="grid grid-cols-10 md:grid-cols-9 2xl:grid-cols-12 items-center gap-1">
                                        {data1.map((item, index) => (
                                            <MotionDiv
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                                key={index} className="col-span-5 md:col-span-3 shadow-md hover:shadow-2xl transition-all p-2 bg-white" >
                                                <h3 className="text-[11px] md:text-[10px] text-[#768B9E]">{item.Category}</h3>
                                                <h2 className="text-[#0062BD] text-[12px] md:text-[10px] md:font-extrabold leading-4 mb-1 font-semibold">{item.Name}</h2>
                                                <Image src={item.Image} alt="dummy pic" className="thh:h-44 thh:w-44 md:h-24 md:w-24" /> 
                                                <h2 className="text-[#333E48] xl:mt-3">PKR: {item.price}</h2>
                                            </MotionDiv>))}
                                        {/* <div className="h-40 w-[1px] bg-gray-200 "  /> */}
                                        {data2.map((item, index) => (
                                            <MotionDiv
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                                key={index} className="col-span-5 md:col-span-3 shadow-md hover:shadow-2xl transition-all p-2 bg-white">
                                                <h3 className="text-[11px] text-[#768B9E]">{item.Category}</h3>
                                                <h2 className="text-[#0062BD] text-[12px] leading-4 mb-1 font-semibold">{item.Name}</h2>
                                                <Image src={item.Image} alt="dummy pic" className="thh:h-44 thh:w-44  md:h-24 md:w-24"/>
                                                <h2 className="text-[#333E48] xl:mt-3">PKR: {item.price}</h2>
                                            </MotionDiv>))}
                                    </div>
                                </div>
                                <div className="my-8" />
                            </TabsContent>
                            <TabsContent value="onsale">on sale</TabsContent>
                            <TabsContent value="toprated">toprated</TabsContent>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero