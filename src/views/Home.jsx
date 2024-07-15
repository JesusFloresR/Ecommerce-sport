import { Header } from "../components/Header"
import { HeroImage } from "../components/HeroImage"
import { SimpleCardProduct } from "../components/SimpleCardProduct"
import { fetchData } from '../services/serviceProducts'; // Importa la función del servicio
import React, { useState, useEffect } from 'react';

export function Home () {
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
            <HeroImage />
            <section className="width-1280 mx-auto py-7">
                <h4 className="text-xl font-medium mb-2">Vistazo de productos</h4>
                <div className="border-b-2 w-24 mb-7"></div>
                <article className="flex gap-8 flex-wrap">
                    {data.map(item => (
                        <SimpleCardProduct key={item.id} name={item.nombre} type="Calzado" price={item.precio} img={item.imagen}/>
                    ))}
                </article>
            </section>
        </>
    )
}