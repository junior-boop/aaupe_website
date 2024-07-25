interface Element_UPE {
    children: JSX.Element | JSX.Element[] | React.ReactNode,
    titre: string,
    descript: string
}

export default function Element_UPE({ titre, descript, children }: Element_UPE) {
    return (
        <div className='bg-[#F1FEFB] lg:aspect-square px-6 py-6 lg:px-9 lg:py-9'>
            <div className="mb-4">
                {children}
            </div>
            <div className='font-judson text-2xl lg:text-3xl font-bold mb-4'>{titre}</div>
            <div style={{ lineHeight: 1.1 }}>
                {descript}
            </div>
        </div>
    )
}