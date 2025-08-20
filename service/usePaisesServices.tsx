import { Paises } from "@/interfaces/Paises";
import axios from "axios";
import { useState } from "react";


export default function usePaisesServices() {
    


    //Obtiene todos los paises
    async function  obtenerPaises() :Promise<Paises[]> {
        try {
            //Realiza la peticion
            const {data} = await axios.get<Paises[]>(process.env.EXPO_PUBLIC_API_URL);
            //Retorna los países
            return data
        } catch (error) {
            throw error
        }
    }

    return (
        {   
            obtenerPaises,
        }
    );
}
