import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Menu from "@/public/assets/navbar/menu.svg"
import Search from "@/public/assets/navbar/search.svg"
import User from "@/public/assets/navbar/user-round.svg"
import Cart from "@/public/assets/navbar/cart.svg"
import Image from "next/image"
import Location from "@/public/assets/navbar/location.svg"
import Truck from "@/public/assets/navbar/truck.svg"
import Bag from "@/public/assets/navbar/cart.svg"
import IBCO from "@/public/assets/navbar/Ibico Bag-03.png"
import NavShort from "./NavShort"
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
const Navbar = () => {
    return (
        <nav >
            <div className=' flex items-center bg-[#FED700] justify-between p-4 px-6 h-[7vh] thh:hidden'>
                <div className='flex items-center gap-x-5'>
                    <NavShort />
                    <div>
                        {/* <h2 className="italic font-extrabold text-3xl shadow-xl shadow-black/20 -mt-2">ibico</h2> */}
                        <Image src={IBCO} alt="Logo" className="h-6 w-24  " />
                    </div>
                </div>
                <div className="flex items-center gap-x-5">
                    <Image src={Search} alt="Search-svg" />
                    <Image src={User} alt="User-svg" />
                    <Image src={Cart} alt="Cart-svg" />
                </div>

            </div>

            <div className="thh:flex hidden border-b pb-1 w-full">
                <div className="thh:flex justify-between mx-6 xl:mx-auto w-full max-w-7xl pt-2">
                    <h2 className="text-sm tracking-tighter">Welcome to Worldwide Electronics Store</h2>
                    <div className="flex text-sm gap-x-1 items-center">
                        <div className="flex items-center gap-x-2">
                            <Image src={Location} className="h-5 w-5" alt="location" />
                            <h2>Store Locator</h2>
                        </div>
                        <div className="h-4 bg-gray-300 w-[1px] mx-2" />
                        <div className="flex items-center gap-x-1">
                            <Image src={Truck} className="h-5 w-5" alt="location" />
                            <h2>Track Your Order</h2>
                        </div>
                        <div className="h-4 bg-gray-300 w-[1px] mx-2" />
                        <div className="flex items-center gap-x-1">
                            <Image src={Bag} className="h-5 w-5" alt="location" />
                            <h2>Shop</h2>
                        </div>
                        <div className="h-4 bg-gray-300 w-[1px] mx-2" />
                        <div className="flex items-center gap-x-1">
                            <Image src={User} className="h-5 w-5" alt="location" />
                            <h2>My Account</h2>
                        </div>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Navbar