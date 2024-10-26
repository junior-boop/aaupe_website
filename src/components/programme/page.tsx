import { gql } from "graphql-request";
import { client } from "../graphql";
import Header from "../header";
import { useEffect, useRef, useState } from "react";
import Section from "../section";
import { RiArrowRightLine } from "../icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type SpecialsPage = {
    programme: string,
    theme: string,
    slugProgramme: string,
    imageEntete: {
        url: string
    },
    partenaire: {
        id: string,
        partenaireLogo: {
            url: string,
        },
        url: string,
    }[],
    contenu: [
        {
            id: string,
            titreSection: string,
            leftToRight: string,
            images: {
                url: string,
            },
            descriptionSection: {
                html: string
            }

        }
    ],
    article: {
        image: {
            url: string
        },
        title: string,
        titleSlug: string,
        id: string
    }
}

// stage: PUBLISHED

const getData = async (slug: string) => {
    const query = gql`query MyQuery {
  specialsPage(
    where: {slugProgramme: "${slug}"}
    stage: PUBLISHED
  ) {
    programme
    theme
    slugProgramme
    imageEntete {
      url
    }
    partenaire {
      ... on Partenaire {
        id
        partenaireLogo {
          url
        }
        url
      }
    }
    contenu {
      ... on Objectif {
        id
        objectifTexte
        isObjectif
      }
      ... on Section {
        id
        titreSection
        leftToRight
        images {
          url
          upload {
            status
            expiresAt
          }
        }
        descriptionSection {
          html
        }
      }
    }
    article {
      image {
        url
      }
      title
      titleSlug
      id
    }
  }
}`

    const data = (await client.request(query)) as { specialsPage: SpecialsPage };
    return data.specialsPage;
}

export default function ProgrammePages() {

    const [pageContent, setPage] = useState<SpecialsPage | null>(null)

    useEffect(() => {
        async function data() {
            setPage(await getData("mon-quartier-propre-residents-responsables-quartier-propre"))
        }

        data()
    }, [])

    const Content = (<Section_2 reverse={false}>
        <div className='w-full lg:w-[650px]'>
            <img src='/earth.webp' />
        </div>
        <div className='flex-1 mt-6'>

        </div>

    </Section_2>)

    if (pageContent !== null) {
        return (
            <>
                <Header transparent={true} />
                <Diaporama
                    image={pageContent.imageEntete.url}
                    theme={pageContent.theme}
                    programme={pageContent.programme}
                />

                {
                    pageContent?.contenu.map((conposant, key) => {
                        // @ts-ignore
                        if (conposant.isObjectif) {
                            // @ts-ignore
                            return <Objectif texte={conposant.objectifTexte} key={key} />
                        }
                    })
                }

                {
                    pageContent?.contenu.map((composant, key) => {
                        // @ts-ignore
                        if (!composant.isObjectif) {
                            return (
                                // @ts-ignore
                                <Section_2 reverse={composant.leftToRight} key={key}>
                                    <div className='w-full lg:w-[650px]'>
                                        <img src={composant.images.url} />
                                    </div>
                                    <div className='flex-1 mt-6'>
                                        <div className="text-3xl lg:text-5xl py-6 font-judson font-bold">{composant.titreSection}</div>
                                        <div dangerouslySetInnerHTML={{ __html: composant.descriptionSection.html }}></div>
                                    </div>

                                </Section_2>
                            )
                        }
                    })
                }

                {
                    pageContent.partenaire.length === 0
                        ? null
                        : (<Section>
                            <div className='font-judson text-3xl lg:text-5xl font-bold mb-5'>
                                Partenaires
                            </div>
                            <div className='grid-partenaire'>
                                {
                                    pageContent.partenaire.map((el, key) => (
                                        <div className='partenaire_parent' key={key}>
                                            <div className='partenaire'>
                                                <img src={el.partenaireLogo.url} alt='' width='100%' height='100%' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Section>)
                }
                <Parallaxe image='/projet_quartier_propre.webp'>
                    <div
                        className='max-w-[1280px] mx-auto h-full flex flex-col justify-end py-[32px] lg:py-[62px] text-white'>
                        <div className='text-2xl'>Actualité</div>
                        <div
                            className='font-judson text-4xl lg:text-[72px] font-bold lg:w-[50%] mb-7'
                            style={{ lineHeight: 1 }}>
                            Lancement du projet "Mon Quartier Propre"
                        </div>

                        <div>
                            <a
                                href='/programme/mon-quartier-propre'
                                className='flex w-full items-center py-5 font-semibold text-xl gap-5 text-white hover:text-white'>
                                <div
                                    className='w-[56px] aspect-square rounded-full flex items-center justify-center bg-yellow-400 text-orange-900'>
                                    <RiArrowRightLine className='w-6 h-6' />
                                </div>
                                Lire l'article
                            </a>
                        </div>
                    </div>
                </Parallaxe>
            </>
        )
    }
    else {
        return (
            <div>je charge....</div>
        )
    }
}

interface Diaporama {
    image: string,
    theme: string,
    programme: string
}

function Diaporama({ image, theme, programme }: Diaporama) {
    return (
        <section className="bg-cover bg-center bg-no-repeat h-[100vh] relative" style={{ backgroundImage: `url('${image}')` }}>
            <div className="linear-black h-full w-full absolute top-0 left-0"></div>
            <div className="relative z-[2] max-w-[1280px] mx-auto h-full py-5 lg:py-11" >
                <div
                    className='max-w-[1280px] mx-auto h-full flex flex-col justify-end py-[32px] lg:py-[62px] text-white'>
                    <div className='text-2xl'>{programme}</div>
                    <div
                        className='font-judson text-4xl lg:text-[72px] font-bold lg:w-[50%] mb-7'
                        style={{ lineHeight: 1 }}>
                        {theme}
                    </div>
                </div>
            </div>
        </section>
    )
}


function Objectif({ texte }: { texte: string }) {
    return (
        <div
            className='objectif font-judson italic font-bold w-full lg:w-[650px] mx-auto py-24 text-3xl lg:text-5xl text-center'>
            {texte}
        </div>
    )
}

function Section_2({ children, reverse }: { children: JSX.Element | JSX.Element[] | React.ReactNode, reverse: boolean }) {
    return (
        <section className={`${reverse ? "bg-[#199d5725]" : ''} py-[42px] lg:py-24 px-6 lg:px-0`}>
            <div className="max-w-[1280px] mx-auto">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-start gap-9 max-w-[1280px] w-full mx-auto px-6 lg:px-0`}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export function Parallaxe({ image, children }: { image: string, children: JSX.Element | JSX.Element[] | React.ReactNode }) {
    const paralaxe_bg = useRef()
    const paralax_container = useRef()

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (paralaxe_bg.current !== undefined) {
            gsap.to(".parallax-bg", {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: 'parallax-container',
                    start: "top bottom",
                    end: "bottom top ",
                    scrub: true,
                },
            });
        }
    }, { scope: paralax_container })
    return (
        // @ts-ignore
        <div ref={paralax_container} className='parallax-container h-[90vh] overflow-hidden relative bg-black'>
            <div
                // @ts-ignore
                ref={paralaxe_bg} className='parallax-bg bg-cover bg-center h-[150%] w-full absolute top-[-50%] left-0 z-0' style={{ backgroundImage: `url('${image}')` }}></div>
            <div className='paralaxe-content'>
                {children}
            </div>
        </div>
    )
}