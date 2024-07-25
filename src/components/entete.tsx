import { RiArrowRightLine } from "./icons";

export default function Entete_Principal() {
    return (
        <section>
            <div className="lg:flex max-w-[1280px] mx-auto px-6 lg:px-0 py-32 lg:py-40">
                <div className="flex-1 aspect-square lg:p-11 p-8 ">
                    <div className="font-judson text-[42px] lg:text-[48px] mb-8" style={{ lineHeight: 1 }}>
                        +200 <br /> Enfants et familles
                    </div>
                    <p style={{ lineHeight: 1.2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ab dolores molestiae culpa, modi sed at unde et quod dolorum nisi cum quos error minima. Porro assumenda error nesciunt ipsa?..
                    </p>
                </div>
                <div className="flex-1 aspect-square lg:p-11 p-8">
                    <div className="font-judson text-[42px] lg:text-[48px] mb-8" style={{ lineHeight: 1 }}>
                        Depuis <br /> 2007
                    </div>
                    <p style={{ lineHeight: 1.2 }}>
                        L’AAUPE « Association d’Appui à l’Unité de Protection de l’Enfance à Casablanca » est
                        une association à but non lucratif, créée en 2007
                    </p>
                </div>
                <div className="flex-1 aspect-square bg-[#45AFDA] lg:p-11 p-8 flex justify-between flex-col">
                    <div className="font-judson font-bold text-[42px] lg:text-[48px]" style={{ lineHeight: 1 }}>
                        Notre <br /> Mission
                    </div>

                    <p style={{ lineHeight: 1.2 }}>
                        Mettre fin au danger ou risque de danger en prenant
                        les mesures nécessaires pour assurer à l’enfant & à la femme et / ou la
                        famille une sécurité physique, psychologique et affective...
                    </p>
                    <a href="/objectif/notre-mission" className="flex items-center justify-end text-gray-800 gap-4">
                        Lire plus <RiArrowRightLine className="h-9 w-9" />
                    </a>
                </div>
            </div>
        </section>
    )
}


interface Entete_page {
    image: string,
    titre: string,
}

export const Entete_page = ({ image, titre }: Entete_page) => {
    return (
        <section className="bg-cover bg-no-repeat bg-[30%] relative h-[400px] lg:h-[500px]" style={{ backgroundImage: `url(${image})` }}>
            <div className="linear-black absolute top-0 left-0 w-full h-[400px] lg:h-[500px]"></div>
            <div className="max-w-[1280px] mx-auto relative flex items-end h-full px-6 lg:px-0 py-4 lg:py-9">
                <div className="font-judson font-bold text-[48px] lg:text-[86px] text-white" style={{ lineHeight: 1 }}>
                    {titre}
                </div>
            </div>
        </section>
    )
}
export const Entete_page_2 = ({ image, titre }: Entete_page) => {
    return (
        <section className="bg-cover bg-no-repeat bg-[30%] relative h-[500px] lg:h-[700px]" style={{ backgroundImage: `url(${image})` }}>
            <div className="linear-black absolute top-0 left-0 w-full h-[500px] lg:h-[700px]"></div>
            <div className="max-w-[1280px] mx-auto relative flex items-end h-full px-6 lg:px-0 py-4 lg:py-12">
                <div className="font-judson font-bold text-[48px] lg:text-[86px] text-white" style={{ lineHeight: 1 }}>
                    {titre}
                </div>
            </div>
        </section>
    )
}

