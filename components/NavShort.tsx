import Menu from "@/public/assets/navbar/menu.svg"
import Image from "next/image"
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

const NavShort = () => {
  return (
    <div>
                        <Sheet>
                            <SheetTrigger>
                                <Image src={Menu} alt="menu-icon" className="-mb-2" />
                            </SheetTrigger>
                            <SheetContent side={"left"} className="bg-white p-0">
                                <SheetHeader className="text-left ">
                                    <SheetTitle className="navbar text-sm">Value of the Day</SheetTitle>
                                    <SheetTitle className="navbar text-sm">Top 100 Offers</SheetTitle>
                                    <SheetTitle className="navbar text-sm">New Arrivals</SheetTitle>
                                    <Accordion type="single" collapsible>
                                        {footer.map((item, index) => (
                                            <AccordionItem key={index} value={`item-${index + 1}`}>

                                                <SheetTitle className="navbar text-sm px-5 py-0">
                                                    <AccordionTrigger className="">
                                                        <h2>{item.heading}</h2>
                                                    </AccordionTrigger>
                                                </SheetTitle>
                                                <AccordionContent className="flex flex-col justify-center bg-gray-100 font-normal pb-0">
                                                    {item.item1 ? <p className="py-4 border-b px-5 hover:bg-gray-200">{item.item1}</p> : <div></div>}
                                                    {item.item2 ? <p className="py-4 border-b px-5 hover:bg-gray-200">{item.item2}</p> : <div></div>}
                                                    {item.item3 ? <p className="py-4 border-b px-5 hover:bg-gray-200">{item.item3}</p> : <div></div>}
                                                    {item.item4 ? <p className="py-4 border-b px-5 hover:bg-gray-200">{item.item4}</p> : <div></div>}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>


                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
  )
}

export default NavShort