import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Headphones from "@/public/assets/footer/headphones.svg"
import Logo from "@/public/assets/features/Ibico-Bag-03.svg"
import Logo1 from "@/public/assets/navbar/Ibico Bag-03.png"
import Image from "next/image"
import Post from "@/public/assets/footer/footer.svg"
import { IoLogoFacebook } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
const data = [
    {
        heading: "We Recommend",
        p1: "Home v1",
        p2: "Home v1",
        p3: "Home v1",
        p4: "Home v1",
        p5: "Home v1",
        p6: "Home v1",
    },
    {
        heading: "My Account",
        p1: "Home v1",
        p2: "Home v1",
        p3: "Home v1",
        p4: "Home v1",
        p5: "Home v1",
        p6: "Home v1",
    },
    {
        heading: "Customer Care",
        p1: "Home v1",
        p2: "Home v1",
        p3: "Home v1",
        p4: "Home v1",
        p5: "Home v1",
        p6: "Home v1",
    },
    {
        heading: "About Us",
        p1: "Home v1",
        p2: "Home v1",
        p3: "Home v1",
        p4: "Home v1",
        p5: "Home v1",
        p6: "Home v1",
    },
]
const Footer = () => {
    return (
        <div>
            <div className="fss:hidden">
                <div className='bg-gray-100 px-4 py-4 pb-4'>
                    <Accordion type="single" collapsible className="space-y-3 max-w-lg md:max-w-[950px] md:mx-7 mx-auto">
                        {data.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="bg-white py-3 px-3 font-semibold">{item.heading}</AccordionTrigger>
                                <AccordionContent className="bg-white rounded-b-xl ">
                                    <div className="px-3 space-y-2 text-[#0062BD] font-semibold">
                                        <h2>{item.p1}</h2>
                                        <h2>{item.p2}</h2>
                                        <h2>{item.p3}</h2>
                                        <h2>{item.p4}</h2>
                                        <h2>{item.p5}</h2>
                                        {item.p6 ? <h2>{item.p6}</h2> : <div></div>}

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="bg-gray-700 w-full h-[25vh] flex flex-col justify-evenly items-center text-white">

                    <Image src={Logo} alt="logo" className=" h-20 w-40" />
                    <div className="text-center">
                        <h2 className=" text-sm tracking-tighter">Got Questions ? Call us 24/7!</h2>
                        <h3>(800) 8001-8588</h3>
                        <h3>(0600) 874 548</h3>
                    </div>
                </div>

            </div>
            <div className="hidden fss:flex fss:flex-col ">
                <div className="bg-[#FED700] w-full p-4 px-6 ">
                    <div className="flex justify-between items-center lg:max-w-[1400px] lg:mx-auto ">
                        <div className="lg:flex thh:flex-row thh:gap-x-10 lg:flex-col lg:gap-y-4">
                            <div className="flex items-center gap-x-4">
                                <Image src={Post} alt="post-icon" />
                                <h2 className="text-xl font-semibold">Sign up to Newsletter</h2>
                            </div>
                            <h2 >...and receive <span className="font-bold">$20 coupon for first shopping</span></h2>
                        </div>
                        <div>
                            <input type="email" placeholder="Enter Your email address" className="rounded-l-full pl-8 py-2" />
                            <button className="rounded-r-full px-6 bg-gray-800 text-white py-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden fss:block">
                <div className="fss:mt-12 lg:max-w-[1400px] lg:mx-auto">
                    <div className="fss:grid fss:grid-cols-12 fss:gap-x-6 p-4 px-6 2xl:p-0" >
                        <div className="col-span-5 space-y-4 lg:flex lg:flex-col justify-evenly h-[30vh]">
                            <div className="lg:space-y-5 lg:-mt-6">
                                <Image src={Logo1} alt="logo" className="h-10 w-28" />
                                <div className="flex gap-x-5 items-center md:mt-2">
                                    <Image src={Headphones} alt="headphones" className="h-14 w-12" />
                                    <div>
                                        <h5 className="text-xs text-gray-500 my-2">Got Questions ? Call us 24/7!</h5>
                                        <div className="flex flex-col thh:flex-row gap-y-2 gap-x-1">
                                            <h2 className="font-bold">(800) 8001-8588,</h2>
                                            <h2 className="font-bold"> (0600) 874 548</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 ">
                                <div>
                                    <h2 className="text-sm font-bold ">Contact Info</h2>
                                    <h3 className="lg:text-sm md:text-xs md:mt-2">17 Princess Road, London, Greater London NW1 8JR, UK</h3>
                                </div>
                                <div className="flex gap-x-5 ">
                                    <IoLogoFacebook className="h-6 w-6 text-gray-600" />
                                    <FaWhatsapp className="h-6 w-6 text-gray-600" />
                                    <FaPinterest className="h-6 w-6 text-gray-600" />
                                    <FaLinkedin className="h-6 w-6 text-gray-600" />
                                    <FaInstagram className="h-6 w-6 text-gray-600" />
                                    <FaYoutube className="h-6 w-6 text-gray-600" />
                                    <FaWifi className="h-6 w-6 text-gray-600 rotate-45" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className="fss:grid fss:grid-cols-3 md:gap-x-4 fss:h-[28vh]">
                                <div className="fss:flex fss:flex-col fss:justify-between">
                                    <h2 className="font-bold text-sm">Find It Fast</h2>
                                    <div className="text-sm space-y-1 text-gray-600">
                                        <h3>Laptops & Computers</h3>
                                        <h3>Cameras & Photography</h3>
                                        <h3>Smart Phones & Tablets</h3>
                                        <h3>Video Games & Consoles</h3>
                                        <h3>TV & Audio</h3>
                                        <h3>Gadgets</h3>
                                        <h3>Waterproof Headphones</h3>
                                    </div>
                                </div>
                                <div className="fss:flex fss:flex-col fss:justify-between">
                                    <h2 className="font-bold  text-sm "></h2>
                                    <div className="text-sm space-y-1 text-gray-600" >
                                        <h3>About</h3>
                                        <h3>Contact</h3>
                                        <h3>Wishlist</h3>
                                        <h3>Compare</h3>
                                        <h3>FAQ</h3>
                                        <h3>Store Directory</h3>

                                    </div>
                                </div>
                                <div className="fss:flex fss:flex-col fss:justify-between">
                                    <h2 className="font-bold  text-sm">Customer Care</h2>
                                    <div className="text-sm space-y-1 text-gray-600">
                                        <h3>My Account</h3>
                                        <h3>Track your Order</h3>
                                        <h3>Customer Service</h3>
                                        <h3>Returns/Exchange</h3>
                                        <h3>FAQs</h3>
                                        <h3>Product Support</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer