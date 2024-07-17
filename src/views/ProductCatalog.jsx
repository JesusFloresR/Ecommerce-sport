import { Header } from "../components/Header"
import { SearchField } from "../components/SearchField"
import { DetailCardProduct } from "../components/DetailCardProduct"
import { fetchData } from '../services/serviceProducts'; // Importa la función del servicio
import { useState, useEffect } from 'react';
import { Filter } from "../components/Filter";
import { Link } from 'react-router-dom';

export function ProductCatalog () {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            try {
                const result = await fetchData(); // Llama a la función del servicio
                console.log(result)
                setData(result); // Actualiza el estado con los datos obtenidos
            } catch (error) {
                // Manejo de errores, por ejemplo, mostrar un mensaje de error
                console.error('Error:', error);
            }
        };

        fetchDataFromBackend(); // Llama a la función al montar el componente
    }, []); // El segundo parámetro del useEffect es un array vacío para ejecutar una sola vez
    return (
        <>
            <Header />
            <section className="pt-28 w-full">
                <div style={{ maxWidth: '1280px' }} className="mx-auto">
                    <div className="mb-3 flex w-full">
                        <Filter categories={['categoria 1', 'categoria 2', 'categoria 3']} />
                        <Filter categories={['categoria 1', 'categoria 2', 'categoria 3']} />
                        <SearchField/>
                    </div>
                    <div className="mb-5 h-0.5 bg-gray-200/70"></div>
                    <article style={{display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {data.map(item => (
                            <Link to={`/product/${item.id_producto}`} 
                            state={{
                                ...item
                            }}
                            >
                                <DetailCardProduct key={item.id_producto} name={item.nombre} type="Calzado" price={item.precio} img={item.imagen} description={item.descripcion}/>
                            </Link>
                        ))}
                    </article>
                </div>
            </section>
        </>
    )
}