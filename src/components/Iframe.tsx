import { gql } from "graphql-request"
import { useEffect, useState } from "react"
import { client } from "./graphql"
import type { doc_Query, Story } from "./graphql-type"
import moment from "moment"
import Loader from "./Loader"


async function getData(slug: string) {
    const query = gql/* GraphQL */`
        query MyQuery {
            story(where: {titleSlug: "${slug}"}, stage: PUBLISHED) {
                bioOf
                content {
                    html
                    raw
                }
                createdBy {
                    id
                }
                title
                titleSlug
                publishedAt
            }
        }
    `

    const { story } = await client.request(query) as Story
    return story

}

export default function Iframe({ url }: { url: string }) {
    const [data, setData] = useState<doc_Query>()

    useEffect(() => {
        const loadData = async () => {
            const url_next = new URLSearchParams(window.location.search)
            const txt = url_next.get('slug') as string

            const result = await getData(txt)
            setData(result)
        }

        loadData()

    }, [])




    return (
        <>
            <div className="pt-16 pb-6 bg-slate-200">
                <div className="w-full px-6 mx-auto mt-16 lg:w-[650px] lg:px-0">
                    <div className="text-5xl lg:text-7xl font-bold mb-9 font-judson">{data?.title}</div>
                    <div className="mb-4 text-base lg:text-xl font-bold">
                        Récit de : {data?.bioOf}
                    </div>
                    <div className="text-sm lg:text-base">Publier le :</div>
                    <div className="mb-4 text-sm lg:text-base font-bold">

                        {
                            moment(data?.publishedAt).calendar()
                        }
                    </div>
                </div>
            </div>
            <div className="w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ">
                {
                    data === undefined
                        ? <Loader />
                        : <div dangerouslySetInnerHTML={{ __html: data?.content.html as string }}></div>
                }
            </div>
        </>
    )
}