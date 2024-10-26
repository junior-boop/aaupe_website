interface Section {
    children: JSX.Element | JSX.Element[] | React.ReactNode
}

export default function Section({ children }: Section) {
    return (
        <section className="py-[42px] lg:py-24 px-6 lg:px-0">
            <div className="max-w-[1280px] mx-auto">
                {children}
            </div>
        </section>
    )
}

export function Section_2({ children, reverse }: { children: JSX.Element | JSX.Element[] | React.ReactNode, reverse: boolean }) {
    return (
        <section className="py-[42px] lg:py-24 px-6 lg:px-0">
            <div className="max-w-[1280px] mx-auto">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse bg-[#199d5752]' : 'lg:flex-row'} lg:items-end gap-9 max-w-[1280px] w-full mx-auto px-6 lg:px-0`}>
                    {children}
                </div>
            </div>
        </section>
    )
}