import { gql } from "graphql-request"
import { useEffect, useState } from "react"
import { client } from "../graphql"
import moment from "moment"
import Loader from "../Loader"


interface Article {
    picture: {
        url: string;
    };
    title: string;
    createdAt: string;
    content: {
        html: string;
    };
    specialsPage: any[]; // Le type exact n'est pas clair à partir des données fournies
}

async function getData(slug: string) {
    const query = gql/* GraphQL */`
        query MyQuery {
            article(where: {titleSlug: "${slug}"}, stage: PUBLISHED) {
                picture {
                url
                }
                title
                createdAt
                content {
                html
                }
                specialsPage {
                slugProgramme
                theme
                programme
                imageEntete {
                    url
                }
                }
            }
            }
    `



    const { article } = await client.request(query) as { article: Article }
    console.log(article)
    return article

}

export default function Articles_Content({ url }: { url: string }) {
    const [data, setData] = useState<Article>()

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
            <div className="lg:pt-28 lg:pb-6 lg:mb-[200px] bg-slate-200 lg:h-[400px]">
                <div className="bg-gray-500 lg:w-[800px] aspect-square lg:aspect-video mx-auto rounded-md bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${data?.picture.url})` }}></div>

            </div>
            <div className="w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0">
                <div className=" text-4xl font-bold">{data?.title}</div>
                <div>{moment(data?.createdAt).calendar()}</div>
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