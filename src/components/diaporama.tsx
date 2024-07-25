interface Diaporama {
    image: string,

}
export default function Diaporama({ image }: Diaporama) {
    return (
        <section className="bg-cover bg-center bg-no-repeat  h-[80vh] relative" style={{ backgroundImage: `url(${image})` }}>
            <div className="linear-black h-full w-full absolute top-0 left-0"></div>
            <div className="max-w-[1280px] mx-auto " >
                { }
            </div>
        </section>
    )
}