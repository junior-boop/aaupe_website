import { useEffect, useState } from "react"
import { RiArrowDropDownLine, RiArrowLeftLine, RiArrowRightLine, RiArrowRightUpLine, RiCloseLargeFill, RiMenuFill } from "./icons"

const apropo: element[] = [
    {
        titre: "Qui nous sommes",
        descript: "AAUPE est une association qui œuvre depuis 2007 pour la protection et la sauvegarde des droits des enfants",
        url: "/a-propos/qui-nous-sommes"
    },
    {
        titre: "Notre engagement",
        descript: "Nous sommes fiers de nos réalisations, mais nous savons qu'il reste encore beaucoup à faire",
        url: "/a-propos/notre-engagement"
    },
    {
        titre: "Notre équipe",
        descript: "Derrière AAUPE, se trouve une équipe passionnée et dévouée qui œuvre chaque jour pour faire avancer notre cause.",
        url: "/a-propos/notre-equipe"
    },
    {
        titre: "Nos Partenaires Engagés",
        descript: "AAUPE est fière de s'associer à un réseau dynamique de partenaires engagés qui partagent nos valeurs et notre mission.",
        url: "/a-propos/nos-partenaires-engage"
    },
]

const objectif: element[] = [
    {
        titre: "Notre Mission",
        descript: "AAUPE est une association qui œuvre pour l'enfance et la famille.",
        url: "/objectif/notre-mission"
    },
    {
        titre: "Suivre notre évolution",
        descript: "Sous ce titre, vous trouverez les dernières nouvelles et événements concernant notre association. ",
        url: "/objectif/evolution"
    },
    {
        titre: "Les programmes",
        descript: "Découvrez nos programmes d'action et contribuez à un monde meilleur !",
        url: "/objectif/programme"
    },
    {
        titre: "Comment nous accompagner",
        descript: "AAUPE est fière de s'associer à un réseau dynamique de partenaires engagés qui partagent nos valeurs et notre mission.",
        url: "/objectif/accompagner"
    },
]

const recits: element[] = [
    {
        titre: "Actualités",
        descript: "Restez informés des dernières actions et événements de l'Association d'Appui à l'Unité de Protection de l'Enfance à Casablanca",
        url: "/recits/"
    },
    {
        titre: "Récits",
        descript: "Plongez au cœur de notre univers et découvrez des histoires inspirantes",
        url: "/recits/story"
    },
    // {
    //     titre: "Les programmes",
    //     descript: "Derrière AAUPE, se trouve une équipe passionnée et dévouée qui œuvre chaque jour pour faire avancer notre cause.",
    //     url: "/a-propos/notre-equipe"
    // },
    // {
    //     titre: "Comment nous accompagner",
    //     descript: "AAUPE est fière de s'associer à un réseau dynamique de partenaires engagés qui partagent nos valeurs et notre mission.",
    //     url: "/a-propos/nos-partenaires-engage"
    // },
]

export default function Header() {
    const [menu, setMenu] = useState<boolean>(false)

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        }
        else document.body.style.overflow = 'auto'
    }, [menu])

    return (
        <header className="w-full fixed z-[1]">
            <div className="px-6 h-auto bg-white">
                <div className="h-[72px] lg:min-h-[86px]  flex items-center justify-between">
                    <a href="/" className="flex-1 h-[42px] lg:h-[56px]  flex gap-4 items-center">
                        <img src="/Logo-AAUPE.jpg" className="h-full" />
                        <div className="hidden lg:block w-[50%] font-semibold text-xl font-inder text-gray-800 hover:text-gray-800">
                            A.A.U.P.E à Casablanca
                        </div>
                    </a>
                    <div className="flex-[2] h-[86px] hidden lg:flex justify-center items-center">
                        <ul className="flex h-full">
                            <Submenu title="À propos" description="Découvrez qui nous sommes et ce que nous faisons" submenu={apropo} />
                            <Submenu title="Notre objectif" description="Notre mission est d’informer et sensibiliser les enfants & leurs familles sur leurs Droits" submenu={objectif} />
                            <Submenu title="Récits" description="Leurs histoires ont transformé notre compréhension " submenu={recits} />
                            <li className="menu h-full"><a href="/impact" className="flex text-gray-800 h-full items-center px-4" style={{ lineHeight: 1 }}>Impact</a></li>
                            <li className="menu h-full"><a href="/action" className="flex text-gray-800 h-full items-center px-4" style={{ lineHeight: 1 }}>Passez à l'action</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 h-[56px] hidden lg:flex items-center justify-end">
                        <a href="/don" className="px-9 py-2 rounded-full bg-yellow-400 text-orange-900 font-semibold">Faire un don</a>
                    </div>

                    <div className="lg:hidden flex gap-3">
                        <div className="h-[56px] flex items-center justify-end">
                            <a href="/don" className="px-[7vw] py-1 rounded-full bg-yellow-400 text-orange-900 font-semibold">Faire un don</a>
                        </div>
                        <div>
                            <button onClick={() => setMenu(true)} className="h-[56px]  flex justify-center items-center">
                                <RiMenuFill className="w-9 h-9" />
                            </button>
                        </div>
                    </div>
                    {
                        menu && (
                            <div className="fixed top-0 left-0 w-full h-[100vh] bg-white z-[2]">
                                <div>
                                    <div className="px-4 py-4">
                                        <button onClick={() => setMenu(false)} className="w-10 h-10 flex items-center justify-center rounded-full border">
                                            <RiCloseLargeFill className="h-6 w-6" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        <Submenu_phone titre="À Propos" submenu={apropo} />
                                        <Submenu_phone titre="Notre objectif" submenu={objectif} />
                                        <Submenu_phone titre="Récits" submenu={recits} />
                                        <li className="flex text-gray-800 text-xl font-medium w-full items-center px-6 justify-between py-5 border-t"><a href="/impact" className="text-gray-800 ">Impact</a></li>
                                        <li className="flex text-gray-800 text-xl font-medium w-full items-center px-6 justify-between py-5 border-t"><a href="/action" className="text-gray-800 ">Passez à l'action</a></li>

                                    </ul>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

interface element {
    titre: string,
    descript?: string,
    url?: string
}
interface Submenu {
    title: string,
    description?: string,
    submenu?: element[]
}

function Submenu({ title, description, submenu }: Submenu) {


    const Element = ({ titre, descript, url }: element) => {
        return (
            <li className="">
                <a href={url} className="w-[12.5vw] flex flex-col gap-4 text-gray-800 py-9">
                    <div className="font-inter font-bold text-2xl">{titre}</div>
                    <div className="text-base">{descript}</div>
                    <div className="lien">
                        <RiArrowRightUpLine className="w-9 h-9" />
                    </div>
                </a>
            </li>
        )
    }

    return (
        <>
            <li className="menu titre h-full">
                <a className="flex text-gray-800 h-full items-center px-4" style={{ lineHeight: 1 }}>{title} <RiArrowDropDownLine className="h-6 w-6" /> </a>
                <ul className=" sous-titre absolute w-[100%] left-0 bg-white flex justify-center top-[72px] border-b">
                    <div className="w-full flex items-start gap-[5vw] px-[6vw]">
                        <div className="w-[25%] text-3xl py-9" style={{ lineHeight: 1 }}>
                            {description}
                        </div>
                        <div className="flex items-start gap-6">
                            {
                                submenu?.map((el, key) => <Element titre={el.titre} descript={el.descript} url={el.url} key={key} />)
                            }
                        </div>
                    </div>
                </ul>
            </li>

        </>
    )
}
interface Submenu_phone {
    titre: string,
    submenu: element[]
}

function Submenu_phone({
    titre, submenu
}: Submenu_phone) {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <li className="h-full ">
                <button onClick={() => setMenu(true)} className="flex text-gray-800 text-xl font-medium w-full items-center px-6 items-center justify-between py-5 border-t" style={{ lineHeight: 1 }}>
                    {titre}
                    <div>
                        <RiArrowRightLine className="h-7 w-7" />
                    </div>
                </button>
                {
                    menu && (
                        <div className="fixed top-0 left-0 w-full h-[100vh] bg-white z-[4]">
                            <div>
                                <div className="px-4 py-4">
                                    <button onClick={() => setMenu(false)} className="w-10 h-10 flex items-center justify-center rounded-full border">
                                        <RiArrowLeftLine className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {
                                        submenu.map((el, key) => (<li className='flex text-gray-800 text-xl font-medium w-full items-center px-6 justify-between py-5 border-t'>
                                            <a className="text-gray-800 " href={el.url}>{el.titre}</a>
                                        </li>))
                                    }


                                </ul>
                            </div>
                        </div>
                    )
                }
            </li>

        </>
    )
}

