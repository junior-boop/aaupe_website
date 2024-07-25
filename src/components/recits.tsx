import { RiArrowRightLine } from "./icons"

export default function Recits() {
    return (
        <section className="bg-[#0E0E0E] py-24">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-white text-[42px] lg:text-[52px] font-judson font-bold pb-10 px-6 lg:px-0" style={{ lineHeight: 1 }}>
                    Découvrez nos Récits
                </div>
                <div className="grid gap-10 lg:grid-cols-3 mb-5 px-6 lg:px-0">
                    <Story />
                    <Story />
                    <Story />
                </div>
            </div>
        </section>
    )
}


function Story() {
    return (
        <div className="bg-cover bg-center bg-no-repeat w-full aspect-[3/5] flex flex-col justify-end" style={{ backgroundImage: "url('/story_2.webp')" }}>
            <div className="linear-black h-[50%] flex items-center px-6">
                <a href="/" className="flex flex-col gap-4 text-white hover:text-white hover:translate-y-[-12px] duration-300 ease-in-out">
                    <div className="font-judson text-3xl lg:text-4xl font-bold text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing...
                    </div>
                    <a className=" text-white hover:text-white flex gap-4 items-center">
                        <RiArrowRightLine className="w-9 h-9" /> Lire plus sur ce récits
                    </a>
                </a>
            </div>
        </div>
    )
}