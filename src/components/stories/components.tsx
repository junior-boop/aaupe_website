import moment from "moment"
import type { first_element } from "../graphql-type"
import { RiArrowRightUpLine } from "../icons"

export function Storys({ data }: first_element) {
    const title = data.title.length > 40 ? `${data.title.substring(0, 36)}...` : data.title
    const content = data.content.raw.children
    const slug = data.titleSlug


    const paragraph = content.filter((el: any) => el.type === 'paragraph')
    const desc = data.description[0].length > 100 ? `${data.description[0].substring(0, 120)}...` : data.description[0]

    const publishedAt = moment(data.publishedAt).calendar()


    return (
        <a href={`/stories/article?slug=${slug}`} className="text-gray-800 hover:text-gray-800 flex h-full">
            <div className="px-6 pt-4 lg:pt-9 lg:px-9 rounded-lg bg-slate-50 h-full flex flex-col justify-between hover:bg-slate-200 hover:shadow-sm">
                <div>
                    <div className="font-judson text-3xl lg:text-[32px] font-bold first-letter:uppercase" style={{ lineHeight: 1.2 }}>
                        {title}
                    </div>
                    <div className="mb-4 text-base lg:text-xl font-bold">
                        Récit de : {data.bioOf}
                    </div>
                    <div className="mb-4 text-base lg:text-xl">
                        {desc}
                    </div>
                    <div className="text-sm lg:text-base">Publier le :</div>
                    <div className="mb-4 text-sm lg:text-base font-bold">

                        {publishedAt}
                    </div>
                </div>
                <div className=" flex items-center justify-end h-[92px]">
                    Lire plus
                    <button className=" w-11 aspect-square flex items-center justify-center">
                        <RiArrowRightUpLine className="w-9 h-9" />
                    </button>
                </div>
            </div>
        </a>
    )
}