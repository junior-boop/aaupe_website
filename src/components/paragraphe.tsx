import { RiArrowRightUpLine, RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill } from "./icons"

interface paragraphe {
    image: string,
    children?: JSX.Element | JSX.Element[] | React.ReactNode,
    inverse?: boolean
}

export function Paragraphe_1({ image, children, inverse = false }: paragraphe) {
    return (
        <section className="paragraphe-1">
            <div className={`max-w-[1280px] mx-auto lg:flex items-start gap-6 px-6 lg:px-0 ${inverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-[50%] aspect-square bg-slate-300 bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: `url('${image}')` }}></div>
                <div className="flex-1 lg:px-6 pb-6">
                    {children}
                </div>

            </div>
        </section>
    )
}

export function Paragraphe() {
    return (
        <div className='w-full lg:w-[700px] px-6 lg:px-0 mx-auto'>
            <div
                className='text-3xl lg:text-5xl py-6 font-judson font-bold lg:text-center'>
                Devenez un acteur du changement en soutenant notre association
            </div>
            <div className='mb-6 lg:text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
                pariatur voluptatem deserunt saepe tempora magni ipsam veniam deleniti
                nulla atque error repellat odit, aut dicta optio. Dolorem corporis
                molestiae nulla.
            </div>
            <div className='mb-6 lg:text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
                pariatur voluptatem deserunt saepe tempora magni ipsam veniam deleniti
                nulla atque error repellat odit, aut dicta optio. Dolorem corporis
                molestiae nulla.
            </div>
            <div className='mb-6 lg:text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
                pariatur voluptatem deserunt saepe tempora magni ipsam veniam deleniti
                nulla atque error repellat odit, aut dicta optio. Dolorem corporis
                molestiae nulla.
            </div>
        </div>
    )
}

type ilot = {
    children: JSX.Element | JSX.Element[] | React.ReactNode
}

export function Ilot({ children }: ilot) {
    return (
        <div className="w-full lg:w-[450px] bg-[#A3CD39] text-[#242e0a] px-4 py-4 lg:px-9 lg:py-9">
            {children}
        </div>
    )
}

export function Ilot_2() {
    return (
        <div className="w-full lg:w-[450px]">
            <div className="w-full lg:w-[450px] bg-[#8bdbff] text-[#0b2735] px-4 py-4 lg:px-10 lg:py-10 mb-6">
                <div className="font-judson text-3xl lg:text-5xl mb-9 text-center font-bold">Nos Réseaux Sociaux</div>
                <div className="text-center mb-6 w-[90%] mx-auto" style={{ lineHeight: 1 }}>
                    Envie de rester connecté(e) à l'actualité de l'AAUPE et de ne rien manquer ? Suivez-nous sur nos réseaux sociaux !
                </div>
                <div className="flex items-center gap-9 justify-center">
                    <a href="" className="text-[#0b2735] hover:text-[#3B5998]"><RiFacebookCircleFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                    <a href="" className="text-[#0b2735] hover:text-[#0077B5]"><RiLinkedinBoxFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                    <a href="" className="text-[#0b2735] hover:text-[#132d3a]" ><RiInstagramFill className="w-16 h-16 lg:w-16 lg:h-16 " /></a>
                </div>
            </div>
            <div>
                <a href="/impact" className="bg-[#A3CD39] text-[#242e0a] hover:text-[#242e0a] flex items-center justify-between py-3 px-4 lg:px-6">
                    Notre Impact
                    <RiArrowRightUpLine className="w-6 h-6 lg:w-9 lg:h-9 " />
                </a>
            </div>
        </div>
    )
}

