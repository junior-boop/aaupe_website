import { gql } from "graphql-request"
import { client } from "../graphql"
import type { Story } from "../graphql-type"
import { Ilot_2 } from "../paragraphe"
import { useEffect, useState } from "react"

// async function getData(slug: string) {
//     const query = gql/* GraphQL */`
//         query MyQuery {
//             story(where: {titleSlug: "${slug}"}, stage: PUBLISHED) {
//     bioOf
//     content {
//       html
//       raw
//     }
//     createdBy {
//       id
//     }
//     title
//     titleSlug
//     publishedAt
//   }
//         }
//     `

//     const { story } = await client.request(query) as Story
//     return story

// }


export default async function StoriesArticles() {
    // const [slug, setSlug] = useState('')

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const url_next = new URLSearchParams(window.location.search)
    //         const txt = url_next.get('slug') as string

    //         setSlug(txt)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (slug.length > 0) {
    //         const loadData = async () => {
    //             const { title, content, } = await getData(slug)
    //             return { title, content }
    //         }

    //         // console.log(loadData())
    //     }

    // }, [slug])

    return (
        <div className="max-w-[1280px] w-full mx-auto pt-16">
            <div className="w-full flex items-center justify-center py-10 lg:py-16 ">
                <div className="font-judson font-bold text-[42px] lg:text-[52px] lg:w-[60%] text-center uppercase " style={{ lineHeight: 1.1 }}>
                    {/* {title} */}
                </div>
            </div>
            {/* <div className="w-full aspect-video bg-cover bg-slate-100 bg-no-repeat bg-center mb-10" style={{ backgroundImage: `url(${picture.url})` }}></div> */}
            <div className="lg:flex gap-11 px-6 lg:px-9">
                {/* <div className="content" dangerouslySetInnerHTML={{ __html: content.html }}></div> */}
                <div>
                    <Ilot_2 />
                </div>
            </div>
        </div>
    )
}