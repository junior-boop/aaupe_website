import { gql } from "graphql-request"
import { RiArrowRightLine } from "./icons"
import { client } from "./graphql"
import type { doc_Query, Story } from "./graphql-type"
import { useEffect, useState } from "react"
import Loader from "./Loader"

const getData = async () => {
    const query = gql/* GraphQL */`
    query MyQuery {
        stories(first: 3, orderBy: publishedAt_DESC, stage: PUBLISHED) {
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


export default function Recits() {

    const [data, setData] = useState<doc_Query[]>([])

    useEffect(() => {
        async function loadData() {
            const { stories } = await getData() as Story;
            setData(stories);
        }

        loadData();
    }, [])

    return (
        <section className="bg-[#0E0E0E] py-24">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-white text-[42px] lg:text-[52px] font-judson font-bold pb-10 px-6 lg:px-0" style={{ lineHeight: 1 }}>
                    Découvrez nos Récits
                </div>
                {
                    data.length === 0
                        ? <Loader white />
                        : (<div className="grid gap-10 lg:grid-cols-3 mb-5 px-6 lg:px-0">
                            {
                                data.map((el, key) => <Story data={el} key={key} />)
                            }
                        </div>)
                }
            </div>
        </section>
    )
}


function Story({ data }: { data: doc_Query }) {

    const slug = data.titleSlug

    const desc = data.description[0].length > 100 ? `${data.description[0].substring(0, 120)}...` : data.description[0]
    return (
        <a href={`/stories/article?slug=${slug}`} className="w-full rounded-xl h-[500px] bg-white flex items-end p-9">
            <div className="text-black">
                <div className="font-judson font-bold text-5xl mb-9">{data.title}</div>
                <div className="mb-4">{desc}</div>
                <div className="flex justify-end items-center gap-4">
                    Lire plus <a className='h-9 w-9'>
                        <RiArrowRightLine className="h-9 w-9" />
                    </a>
                </div>

            </div>
        </a>
    )
}