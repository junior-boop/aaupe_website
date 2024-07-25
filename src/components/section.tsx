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