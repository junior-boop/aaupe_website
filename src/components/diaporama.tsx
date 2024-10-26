interface Diaporama {
    image: string,
    children?: React.ReactNode | JSX.Element | JSX.Element[]
}
export default function Diaporama({ image, children }: Diaporama) {
    return (
        <section className="bg-cover bg-center bg-no-repeat  h-[80vh] relative" style={{ backgroundImage: `url(${image})` }}>
            <div className="linear-black h-full w-full absolute top-0 left-0"></div>
            <div className="relative z-[2] max-w-[1280px] mx-auto h-full py-5 lg:py-11" >
                {children}
            </div>
        </section>
    )
}