import { ButtonSearch } from "./ButtonSearch"

export function SearchField ({size}) {
    return(
        <div className={`relative ${size ? `${size}` : ''}`}>
            <form className="flex rounded-md overflow-hidden">
                <div className="w-full">
                    <input className="p-3 outline-0 w-full" type="text" />
                    <div className="bg-white hidden absolute top-12 left-0 z-10 width-suggestions">
                        <div className="w-full hover:bg-gray-300 hover:cursor-pointer p-3 h-10">
                            <span>zapatillas</span>
                        </div>
                        <div className="w-full hover:bg-gray-300 hover:cursor-pointer p-3 h-10">
                            <span>zapatillas</span>
                        </div>
                        <div className="w-full hover:bg-gray-300 hover:cursor-pointer p-3 h-10">
                            <span>zapatillas</span>
                        </div>
                    </div>
                </div>
                <ButtonSearch />
            </form>
        </div>
    )
}