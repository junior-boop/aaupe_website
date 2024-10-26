import moment from "moment"
import type { Node_Query } from "../graphql-type"
import { RiArrowRightUpLine } from "../icons"

type first_element = {
    data: Node_Query
}


export function Element({ data }: first_element) {
    const title = data.title.length > 40 ? `${data.title.substring(0, 36)}...` : data.title
    const image = data.picture.url

    const content = data.content.raw.children
    const slug = data.titleSlug


    const publishedAt = moment(data.publishedAt).calendar()
    const paragraph = content.filter((el: any) => el.type === 'paragraph')
    const desc = paragraph[0].children[0].text.length > 100 ? `${paragraph[0].children[0].text.substring(0, 95)}...` : paragraph[0].children[0].text


    return (
        <a href={`/actualites/articles?slug=${slug}`} className="text-gray-800 hover:text-gray-800 h-full overflow-hidden rounded-lg">
            <div className="aspect-[3/2] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="px-6 py-4 bg-slate-100">
                <div className="font-judson text-[32px] font-bold first-letter:uppercase mb-4" style={{ lineHeight: 1.2 }}>
                    {title}
                </div>
                <div className="mb-4">
                    {desc}
                </div>
                <div className="text-sm lg:text-base">Publier le :</div>
                <div className="mb-4 text-sm lg:text-base font-bold">

                    {publishedAt}
                </div>
                <div className=" flex items-center justify-end">
                    <button className=" w-11 aspect-square flex items-center justify-center">
                        <RiArrowRightUpLine className="w-9 h-9" />
                    </button>
                </div>
            </div>

        </a >
    )
}