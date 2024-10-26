import { gql } from "graphql-request";
import { Entete_page_3 } from "../entete";
import Section from "../section";
import { Storys } from "./components";
import { client } from "../graphql";
import type { doc_Query, Story } from "../graphql-type";
import { useEffect, useState } from "react";
import { RiInformation2Line, SvgSpinners8DotsRotate } from "../icons";
import Loader from "../Loader";

const getData = async () => {
    const query = gql/* GraphQL */`
    query MyQuery {
        stories(first: 20, orderBy: publishedAt_DESC, stage: PUBLISHED) {
            bioOf
            title
            titleSlug
            stage
            id
            createdAt
            createdBy {
                id
                name
            }
            content {
                html
                raw
            }
            publishedAt
            description
        }
    }
`

    const data = await client.request(query) as Story
    const stories = data.stories as doc_Query[]

    return data
}

export default function StoriesPage() {

    const [data, setData] = useState<doc_Query[]>([])

    useEffect(() => {
        async function loadData() {
            const { stories } = await getData() as Story;
            setData(stories);
        }

        loadData();
    }, [])


    return (
        <>
            <Entete_page_3 titre="Récits" />
            <Section>
                <div className="p-4 lg:p-9 bg-slate-100 rounded-lg mb-11 flex flex-col lg:flex-row gap-5 items-start">
                    <div> <RiInformation2Line className='h-10 lg:h-16 w-10 lg:w-16 ' /></div>
                    Pour préserver la sécurité de nos enfants sur Internet, il est recommandé d'adopter quelques règles simples : éviter de publier leurs photos, sauf si elles sont floutées ou si leur visage n'est pas visible, ne pas partager leur nom complet sur les réseaux sociaux, et privilégier les pseudonymes. En adoptant ces bonnes pratiques, nous contribuons à leur offrir une enfance numérique sereine.
                </div>

                {
                    data.length === 0
                        ? <Loader />
                        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                data.map((el, key) => <Storys data={el} key={key} />)
                            }
                        </div>
                }

            </Section>
        </>
    )
}
