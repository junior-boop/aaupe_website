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
    publishedAt: string;
    content: {
        html: string;
    };
    image: { url: string }[];
    id: string;
}

async function getData(slug: string) {
    const query = gql/* GraphQL */`
        query MyQuery {
            article(where: {titleSlug: "${slug}"}, stage: PUBLISHED) {
                picture {
                    url
                }
                image {
                    url
                }
                titleSlug
                title
                id
                content {
                    html
                }
                publishedAt
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
                <div>{moment(data?.publishedAt).calendar()}</div>
            </div>
            <div className="w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ">
                {
                    data === undefined
                        ? <Loader />
                        : <div dangerouslySetInnerHTML={{ __html: data?.content.html as string }}></div>
                }
            </div>
            <div className="w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0">
                {
                    data?.image.length !== 0
                        // @ts-ignore
                        ? <Gallerie data={data?.image} />
                        : null
                }
            </div>
        </>
    )
}


function Gallerie({ data }: { data: { url: string }[] }) {

    const Liste = data !== undefined ? data.map((el, key) => (
        <div className="w-full aspect-auto  mb-4 rounded-lg overflow-hidden">
            <img src={el.url} alt="image gallerie" className="w-full h-full object-cover object-center" />
        </div>
    )) : null

    return (
        <div>
            <div className="text-2xl font-bold mb-4">Quelque Images</div>
            {Liste}
        </div>
    )
}