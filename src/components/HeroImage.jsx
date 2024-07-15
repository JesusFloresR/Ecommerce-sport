import { SearchField } from "./SearchField"
import modelImage from '../assets/model-hero-image2.png'
export function HeroImage () {
    return(
        <section className="hero-section">
            <div className="width-1280 mx-auto pt-28 flex h-full justify-around">
                <div>
                    <img src={modelImage} width={450} alt="" />
                </div>
                <div className="flex flex-col pt-28">
                    <h1 className="font-bold text-4xl">Ropa deportiva que inspira</h1>
                    <p className="text-xl">Descubre nuestra colección diseñada para potenciar tu rendimiento y estilo.</p>
                    <SearchField size="w-7/12"/>
                </div>
            </div>
        </section>
    )
}