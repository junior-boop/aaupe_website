import { RiMailSendLine, RiWhatsappLine } from "./icons";
import Section from "./section";

export default function ActionProps() {
    return (
        <Section>
            <div className="font-judson font-bold text-5xl">
                Notre petite boutique
            </div>
            <div className="mb-6 mt-3 lg:w-[50%]">
                En achetant l'un de nos produits, vous participez activement à notre mission de protection et soutien des Enfants et des familles.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full aspect-square border flex items-center justify-center rounded-xl overflow-hidden">
                    <img src="/chapeau.jfif" alt="" />
                </div>
                <div className="w-full aspect-square border flex items-center justify-center rounded-xl overflow-hidden">
                    <img src="/t-shirt.jfif" alt="" />
                </div>
                <div className="w-full aspect-square border flex items-center justify-center rounded-xl overflow-hidden">
                    <img src="/Jaquette.jfif" alt="" />
                </div>
            </div>
            <div className='py-6'>
                <div
                    className='bg-[#F1FEFB] px-4 lg:px-9 py-6 lg:py-9 rounded-xl flex flex-col lg:flex-row items-end justify-between'>
                    <div className='lg:w-[50%]'>
                        <div className='font-judson font-bold text-3xl lg:text-5xl mb-9'>
                            Contactez nous pour acheter un produit
                        </div>
                        <div>
                            Vous aussi, vous souhaitez vous engagez auprès des enfants et
                            jeunes ? <br /> Faites votre commande d'un de nos produits via WhatsApp
                        </div>
                    </div>
                    <a
                        href='mailto:info@aaupe.org.ma'
                        className='mt-5 lg:mt-0 w-full lg:w-[200px] lg:aspect-square rounded-xl flex flex-col gap-6 bg-slate-800 text-white p-6 hover:text-slate-50 justify-center items-center'>
                        <div className='text-center' style={{ lineHeight: 1.1 }}>
                            Contacter nous via WhatsApp
                        </div>
                        <div>
                            <RiWhatsappLine className='w-20 h-20' />
                        </div>
                    </a>
                </div>
            </div>
        </Section>
    )
}