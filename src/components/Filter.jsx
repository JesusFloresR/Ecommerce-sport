import { useState } from 'react';

export function Filter ({categories, callback}) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(''); // Estado para almacenar la categoría seleccionada
    const categorias = categories; // Lista de categorías

    const handleCategoriaChange = (event) => {
        setCategoriaSeleccionada(event.target.value); // Actualiza el estado cuando cambia la selección del <select>
    };
    return(
        <select value={categoriaSeleccionada} onChange={handleCategoriaChange}>
            <option value="">Mostrar todos</option>
                {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>{categoria}</option>
                ))}
      </select>
    )
}