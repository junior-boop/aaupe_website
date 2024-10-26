import { RiArrowRightLine } from "../icons";
import { Parallaxe } from "../programme/page";

export default function ParallaxeContent() {
    return (
        <Parallaxe image='/mon-quartier-propre.webp'>
            <div
                className='max-w-[1280px] mx-auto h-full flex flex-col justify-end py-[32px] lg:py-[62px] text-white'>
                <div className='text-2xl'>Mon Quartier Propre</div>
                <div
                    className='font-judson text-4xl lg:text-[72px] font-bold lg:w-[50%] mb-7'
                    style={{ lineHeight: 1 }}>
                    Résidents Responsables ...Quartier Propre
                </div>
                <div className='lg:w-[50%] mb-4 line_height'>
                    Notre projet de quartier vert et global « Derbi Nki », vise à
                    transmettre les caractéristiques d'une civilisation durable et globale
                    à nos quartiers. ...
                </div>
                <div>
                    <a
                        href='/programme/mon-quartier-propre'
                        className='flex w-full items-center py-5 font-semibold text-xl gap-5 text-white hover:text-white'>
                        <div
                            className='w-[56px] aspect-square rounded-full flex items-center justify-center bg-yellow-400 text-orange-900'>
                            <RiArrowRightLine className='w-6 h-6' />
                        </div>
                        Lire plus d'information
                    </a>
                </div>
            </div>
        </Parallaxe>
    )
}