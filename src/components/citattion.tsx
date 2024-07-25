import { RiDoubleQuotesL } from "./icons";

interface Citattion {
    citation: string,
    author?: string,
}

export default function Citation({ citation, author }: Citattion) {
    return (
        <section className="py-[64px] lg:py-[150px]">
            <div className="w-[80%] lg:w-[600px] mx-auto flex flex-col items-center justify-center gap-2 relative">
                <div>
                    <RiDoubleQuotesL className="w-16 h-16" />
                </div>
                <div className="font-judson font-bold italic text-4xl lg:text-[56px] text-center" style={{ lineHeight: 1 }}>
                    {citation}
                </div>
                <div>
                    - {author} -
                </div>
            </div>
        </section>
    )
}