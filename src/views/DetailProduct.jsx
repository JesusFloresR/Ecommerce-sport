import { Header } from "../components/Header"
import { useLocation, useParams } from 'react-router-dom';

export function DetailProduct (props) {
    const location = useLocation();
    const {descripcion, id_producto, nombre, imagen, precio} = location.state;
    // console.log("state: ", location);
    return (
        <>
        <Header />
        <section className="pt-28 w-full">
            <div className="mx-auto grid grid-cols-2" style={{ maxWidth: '1280px'}}>
                <div style={{ backgroundImage: `url(${imagen})`, height: '700px', backgroundSize: 'contain', backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                <div className="flex flex-col justify-center" style={{marginLeft: "20px"}}>
                    <span className="text-rose-800 font-semibold" >Conjunto</span>
                    <h3 className="text-3xl font-bold my-4">{nombre}</h3>
                    <span className="text-2xl font-bold text-rose-800">S/ {precio}</span>
                    <p className="my-10" >{descripcion}</p>
                    <div className="flex items-center gap-4 mb-5">
                        <button className="text-5xl mr-3">-</button>
                        <span className="text-4xl">1</span>
                        <button className="text-5xl ml-3">+</button>
                    </div>
                    <button className="bg-rose-800 text-white py-4">Agregar al carrito</button>
                </div>
            </div>
        </section>
        </>
    )
}