import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Display1 from "@/public/assets/Hero/display1.webp"
import Display2 from "@/public/assets/Hero/display2.webp"
import Display3 from "@/public/assets/Hero/display3.webp"
import Display4 from "@/public/assets/Hero/display4.webp"
import { MotionDiv } from "./Framer-motion"
import pic1 from "@/public/assets/data/1.webp"
import pic2 from "@/public/assets/data/2.webp"
import pic3 from "@/public/assets/data/3.webp"
import pic4 from "@/public/assets/data/4.webp"
import pic5 from "@/public/assets/data/5.webp"
import pic7 from "@/public/assets/data/7.jpg"
import pic8 from "@/public/assets/data/8.webp"
import pic9 from "@/public/assets/data/9.webp"
import pic10 from "@/public/assets/data/10.webp"
import pic11 from "@/public/assets/data/11.webp"
import pic12 from "@/public/assets/data/12.webp"
import pic13 from "@/public/assets/data/13.jpg"
import pic14 from "@/public/assets/data/14.jpg"
import pic15 from "@/public/assets/data/15.webp"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TabcontentFeatures from "./TabcontentFeatures"

const data1 = [
    {
        Category: "Audio Speakers",
        Name: "Wireless Audio System Multiroom 360",
        Image: Display1,
        price: "22000"
    },
    {
        Category: "Audio Speakers",
        Name: "Wireless Audio System Multiroom 360",
        Image: Display1,
        price: "22000"
    },
    {
        Category: "Audio Speakers",
        Name: "Wireless Audio System Multiroom 360",
        Image: Display1,
        price: "22000"
    },
    {
        Category: "Audio Speakers",
        Name: "Wireless Audio System Multiroom 360",
        Image: Display1,
        price: "22000"
    },
]
const data2 = [
    {
        Category : 'Shredder',
        Name : 'GBC Swingline EX10-06 Shredder',
        Image:  pic1,
        price: '77,289.00',
        Categorys: "Binder Accessories",
        Names: "Twin Loop Wire Binding (Ibiwire)",
        Images: pic9,
        prices: "2,390.00"
    },        
    {
        Category: "Laminator",
        Name: "A3 Laminator Lamination Machine",
        Image: pic2,
        price: "27,999.00",
        Categorys: "Binder Accessories",
        Names: " A-4 Lamination Pouch 80 Microns",
        Images: pic10,
        prices: "1,330.00"
    },
    {
        Category: "Sealer Machine",
        Name: "Sealer Machine PFS 300mm Iron Body",
        Image: pic3,
        price: "4,200.00",
        Categorys: "Binder Accessories",
        Names: "PVC Binding Sheet A4 15 MM",
        Images: pic11,
        prices: "1,450.00"
    },
    {
        Category: "Scissors & Cutters",
        Name: "Peach Paper Trimmer (Cutter)",
        Image: pic4,
        price: "3,750.00",
        Categorys: "Binder Accessories",
        Names: "A-4 Lamination Pouch 80 Microns",
        Images: pic12,
        prices: "1,055.00"
    },
    {
        Category: "Scissors & Cutters",
        Name: "PVC Die Cutter (Non Adjustable)",
        Image: pic5,
        price: "6,400.00",
        Categorys: "Counting Machine",
        Names: "Sardar SM-998P Mix Value",
        Images: pic13,
        prices: "62,639.00"
    },
    {
        Category : 'Binder Accessories',
        Name : 'Twin Loop Wire Binding (Ibiwire)',
        Image:  pic8,
        price: '3,100.00',
        Categorys: "Counting Machine",
        Names: "New Wave NW-2830 Cash Counting",
        Images: pic14,
        prices: "23,999.00"
    }, 
    {
        Category: "Binder Accessories",
        Name: "GBC CombBind C250Pro Binder Spiral",
        Image: pic7,
        price: "175,000.00",
        Categorys: "Staplers & Punches",
        Names: "Best Quality PVC Cutter Slot Punch",
        Images: pic15,
        prices: "4,670.00"
    }
]
const data3 = [
    {
        Category : 'Shredder',
        Name : 'GBC Swingline EX10-06 Shredder',
        Image:  pic1,
        price: '77,289.00',
        cutprice: "190"
    },
    {
        Category : 'Binder Accessories',
        Name : 'Twin Loop Wire Binding (Ibiwire)',
        Image:  pic8,
        price: '3,100.00',
        cutprice: "190"
    },
    {
        Category: "Binder Accessories",
        Name: "GBC CombBind C250Pro Binder Spiral",
        Image: pic7,
        price: "175,000.00",
        cutprice: "190"
    },
    {
        Category: "Scissors & Cutters",
        Name: "PVC Die Cutter (Non Adjustable)",
        Image: pic5,
        price: "6,400.00",
        cutprice: "190"
    },
    {
        Category: "Scissors & Cutters",
        Name: "Peach Paper Trimmer (Cutter)",
        Image: pic4,
        price: "3,750.00",
        cutprice: "190"
    },
    {
        Category: "Laminator",
        Name: "A3 Laminator Lamination Machine",
        Image: pic2,
        price: "27,999.00",
        cutprice: "190"
    },
    {
        Category : 'Shredder',
        Name : 'GBC Swingline EX10-06 Shredder',
        Image:  pic1,
        price: '77,289.00',
        cutprice: "190"
    },
    {
        Category: "Power Banks",
        Name: "Powerbank 1130 mAh Blue",
        Image: Display1,
        price: "210",
        cutprice: "190"
    },
    {
        Category: "Laminator",
        Name: "A3 Laminator Lamination Machine",
        Image: pic2,
        price: "27,999.00",
        cutprice: "190"
    },
]
const Feature = () => {
    return (
        <div>

            <div className="bg-gray-100 pt-2 ">
                <div className="mx-5 psc:mx-auto psc:max-w-lg md:max-w-[740px] " >
                    <Tabs defaultValue="bestdeals" className="md:hidden">
                        <div className=" w-full bg-gray-100 flex flex-col overflow-x-scroll overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
                            <TabsList className="w-full flex-shrink-0 mx-3 scs:-mx-2 psc:-mx-8 flex items-center justify-center p-0 ">
                                <TabsTrigger className="px-3 ml-16" value="bestdeals">Best Deals</TabsTrigger>
                                <TabsTrigger className="px-3" value="Shredres">Shreders</TabsTrigger>
                                <TabsTrigger className="px-3" value="lminators">laminators</TabsTrigger>
                                <TabsTrigger className="px-3" value="staplers&punches">Staplers & punches</TabsTrigger>

                            </TabsList>
                        </div>
                        <TabsContent value="bestdeals" className="">
                            <div className=" pt-4 flex flex-col gap-y-1 pb-6">
                                {data3.map((item, index) => (
                                    <div key={index} className="bg-white h-auto mx-4 p-4">
                                        <h2 className="text-[10px] sm:text-[12px] text-[#768B9E]">{item.Category}</h2>
                                        <h3 className="text-[#0062BD] text-[12px] sm:text-[15px] font-extrabold">{item.Name}</h3>
                                        <div className="psc:flex psc:w-full psc:justify-center psc:items-center">
                                            <MotionDiv
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}

                                            >
                                                <Image src={item.Image} alt="dummy-img" className="sm:h-[350px]  sm:w-[360px]" />
                                            </MotionDiv>
                                        </div>
                                        <div className="space-x-2">
                                            <span className="text-red-500 font-light text-lg">PKR: {item.cutprice}</span>
                                            <span className="text-gray-400 text-[11px] line-through">PKR: {item.price}</span>
                                        </div>
                                    </div>))}
                                <div className="bg-white h-auto mx-4 p-2">
                                    <h2 className="text-[10px] text-[#768B9E]">Power Banks</h2>
                                    <h3 className="text-[#0062BD] text-[12px] font-extrabold">Powerbank 1130 mAh Blu</h3>
                                    <Image src={pic1} alt="dummy-img" />
                                    <div className="space-x-2">
                                        <span className="text-red-500 font-light text-lg">$39.99</span>
                                        <span className="text-gray-400 text-[11px] line-through">$49.99</span>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="Shreders">on sale</TabsContent>
                        <TabsContent value="laminators">laminators</TabsContent>
                        <TabsContent value="stapler&punches">Staplers & punches</TabsContent>

                    </Tabs>
                </div>
                <div className="md:max-w-[950px] md:mx-7 lg:max-w-6xl lg:mx-5 xl:mx-auto thh:max-w-7xl">
                    <Tabs defaultValue="bestdeals" className="hidden md:flex md:flex-col w-full">
                        <div className=" w-full bg-gray-100 flex flex-col overflow-y-hidden z-20 ">
                            <TabsList className="w-full flex-shrink-0 mx-3 md:mx-0 scs:-mx-2 psc:-mx-8 xl:border-2 flex items-center justify-evenly p-0 ">
                                <TabsTrigger className="px-3 md:px-10 xl:px-28 ml-16 md:ml-0" value="bestdeals">Best Deals</TabsTrigger>
                                <TabsTrigger className="px-3 md:px-10 xl:px-28 " value="Shreders">Shreders</TabsTrigger>
                                <TabsTrigger className="px-3 md:px-10 xl:px-28" value="laminators">laminators</TabsTrigger>
                                <TabsTrigger className="px-3 md:px-10 xl:px-28" value="stapler&punches">Staplers & punches</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="bestdeals" className="hidden md:block w-full">
                            <TabcontentFeatures />
                        </TabsContent>
                        <TabsContent value="Shreders" className="hidden md:block w-full md:-mt-0">
                            <TabcontentFeatures />
                        </TabsContent>
                        <TabsContent value="laminators" className="hidden md:block w-full md:-mt-0">
                            <TabcontentFeatures />
                        </TabsContent>
                        <TabsContent value="stapler&punches" className="hidden md:block w-full md:-mt-0">
                            <TabcontentFeatures />
                        </TabsContent>

                    </Tabs>
                </div>
            </div>
            <div className="mt-12 psc:mx-auto psc:max-w-lg xl:mx-auto xl:max-w-7xl md:max-w-[950px] md:mx-7 lg:max-w-6xl lg:mx-5">
                <Carousel className="w-full">
                    <div className="flex items-center justify-between">
                        <h2 className="ml-2 relative font-bold text-xl tracking-tighter border-b-2 w-[41%] md:w-[20%]  pb-2 z-10 border-[#FED700]">Recently Added</h2>
                        <div className="-mb-5 mr-2 space-x-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                    <div className="border-b -z-10 -mt-[1px] mx-2" />
                    <CarouselContent className="-ml-1">
                        {data2.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 sm:basis-[344px] md:basis-1/2 lg:basis-1/3">
                                <div className="mt-2">
                                    <div className="grid grid-cols-10 items-center gap-1 px-2 sm:px-0 my-2">

                                        <MotionDiv
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="col-span-5 shadow-md hover:shadow-2xl transition-all p-2 bg-white" >
                                            <h3 className="text-[11px] text-[#768B9E]">{item.Category}</h3>
                                            <h2 className="text-[#0062BD] text-[12px] leading-4 mb-1 font-semibold">{item.Name}</h2>
                                            <Image src={item.Image} alt="dummy pic" className="sm:h-32 sm:w-28"/>
                                            <h2 className="text-[#333E48]">PKR: {item.price}</h2>
                                        </MotionDiv>



                                        <MotionDiv
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="col-span-5 shadow-md hover:shadow-2xl transition-all p-2 bg-white" >
                                            <h3 className="text-[11px] text-[#768B9E]">{item.Categorys}</h3>
                                            <h2 className="text-[#0062BD] text-[12px] leading-4 mb-1 font-semibold">{item.Names}</h2>
                                            <Image src={item.Images} alt="dummy pic" className="sm:h-32 sm:w-28"/>
                                            <h2 className="text-[#333E48] sm:mt- ">PKR: {item.prices}</h2>
                                        </MotionDiv>



                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>

            </div>
            <div className="mb-6">
                <div className="h-[1px] w-full bg-gray-200 mt-12" />
            </div>















        </div>
    )
}

export default Feature



