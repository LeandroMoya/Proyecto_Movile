import { useUsuarioContext } from "@/context/UsuarioContext";
import { Paises } from "@/interfaces/Paises";
import {  useState } from "react";

export default function useJuego() {
    //Guarda la cntidad de jugadas
    const [cantJugadas,setCantJugadas] =useState<number>(0)
    //Obtene todos los países
    const{listaPaises} =useUsuarioContext()
    //Cambia la jugada del usuario
    const [jugada,setJugada]=useState<number>(0)
    
    //https://stackoverflow.com/questions/37764665/how-to-implement-sleep-function-in-typescript
    //Atraza la ejecución del código
    function delay(tiempo : number) :Promise<void>{
        return new Promise((resolve)=>setTimeout((resolve),tiempo))
    }

    //Obtiene una cantidad de países ingresados por el usuario
    function obtenerPaisesRandom(cantPaises:number):Paises[]{
        //Obtiene todos los países
        const paises:Paises[] = listaPaises
        //Valida que la cantidad de países sea mayor a 0 y la lista de países tenga algo
        if(cantPaises<=0 || paises.length===0) return[]
        //Guarda los países a retornar
        const resultado:Paises[]=[]
        let i:number=0;
        while(i<cantPaises){
            //Crea un número random para elegir un país
            const numRandom:number = Math.floor(Math.random()*paises.length)
            //Valida que el país no este repetido
            if(undefined=== resultado.find((item)=>item.ccn3===paises[numRandom].ccn3)){
                //Suma un país
                i++;
                //Agrega el país a los países
                resultado.push(paises[numRandom]) 
            }
        }
        //Retorna los países random
        return resultado;
    }

    async function validarJugada(nombrePais:string,respuesta:string) :Promise<void>{
        //Evita que se ejecute el evento del boton mientras se aplica el delay
        if(jugada !==0) return
        //Valida que la respuesta del usuario sea la correcta
        if(nombrePais.replaceAll(" ","").toLowerCase()===respuesta.replaceAll(" ","").toLowerCase())
            setJugada(1) 
        else//De lo contrario será incorrecta
            setJugada(2)    
        //Atraza la ejecuión del programa
        await delay(2000)
        //Cambia la jugada al estado inicial
        setJugada(0)
        //Súma una jugada
        setCantJugadas(cantJugadas =>cantJugadas+1)  
    }

    return (
        {
            cantJugadas,
            jugada,
            validarJuego: validarJugada,
            delay,
            setCantJugadas,
            obtenerPaisesRandom,
            setJugada
        }
    );
}
