import { SvgSpinners8DotsRotate } from "./icons"

const Loader = ({ white }: { white?: boolean }) => {
    return (
        <div className="flex items-center justify-center h-[50vh] w-full">
            <div className={`flex flex-col justify-center items-center gap-4 ${white ? "text-white" : 'text-gray-800'}`}>
                <SvgSpinners8DotsRotate className="h-9 w-9" />
                Chargement...
            </div>
        </div>
    )
}

export default Loader