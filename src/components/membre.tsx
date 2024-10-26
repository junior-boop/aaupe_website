interface member {
    image: string,
    name: string,
    surname: string,
    role?: string
}

export default function Member({ image, name, role, surname }: member) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: `url("${image}")` }}></div>
            <div>
                <div className="font-judson name-member space-x-2 mb-[-5px]">
                    <span className="font-light">{surname}</span>
                    <span className="font-extrabold uppercase">{name}</span>
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-bold">{role}</div>
            </div>
        </div>
    )
}