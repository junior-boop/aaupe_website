interface member {
    image: string,
    name: string,
    role?: string
}

export default function Member({ image, name, role }: member) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}></div>
            <div>
                <div className="font-judson font-bold name-member">{name}</div>
                <div className="">{role}</div>
            </div>
        </div>
    )
}