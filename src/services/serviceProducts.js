// import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // URL base del backend

// Función para realizar una solicitud GET a un endpoint específico
export const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/Obtenerproductos');
        const responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Puedes manejar el error aquí o dejar que se propague hacia arriba
    }
};
