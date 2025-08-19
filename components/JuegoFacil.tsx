import { globalStyles } from "@/globalStyles/globalStyles";
import useJuego from "@/hooks/useJuego";
import { useOrientacion } from "@/hooks/useOrientacion";
import { Paises } from "@/interfaces/Paises";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image,View } from "react-native";
import BotonJuegoFacil from "./BotonJuegoFacil";

export default function JuegoFacil() {
    const esOrizontal =useOrientacion()
    //Guarda la lista de países
    const [paisesJuego,setPaisesJuego]=useState<Paises[]>([])
    //Obtiene el indice del país a adivinar del arreglo de países
    const [paisRandom,setPaisRandom]=useState<number>(0)

    const{
        cantJugadas,
        jugada,
        validarJuego,
        obtenerPaisesRandom,
    }=useJuego()
    
    //Se dispara cada ves que el usuario realiza una jugada
    useEffect(()=>{
        //Obtiene 4 países para iniciar el juego
        const resultado:Paises[] =  obtenerPaisesRandom(4)
        //Obtiene un país random que será el que se mostrar en pantalla
        const paisHaAdivinar :number= Math.floor(Math.random()*resultado.length)
        setPaisesJuego(resultado);
        setPaisRandom(paisHaAdivinar);
    },[cantJugadas])

    return (
        <View style={[globalStyles.contenedorJuego]} >
            {
                paisesJuego.length>0?(
                    <View style={[
                        esOrizontal&&globalStyles.fDRow,
                    ]}>
                        {/*Imagen del país a adivinar*/}
                        <Image 
                            style={[
                                esOrizontal?
                                    globalStyles.banderaJuegoOrizontal:
                                    globalStyles.banderaJuegoVertical
                            ]}
                            source={{
                                uri:paisesJuego[paisRandom].flags.png
                            }}
                        />

                        {/*Muestra los países que son opciones a elegir*/}
                        <View style={[
                            esOrizontal?
                                globalStyles.w50:
                                globalStyles.w100,
                        ]}>
                            {paisesJuego.map((item) => (
                               <BotonJuegoFacil 
                                    key={item.ccn3}
                                    nombrePaisRespuesta={item.name.common} 
                                    //Nombre del país ha adivinar
                                    nombrePaisJuego={paisesJuego[paisRandom].name.common}
                                    onSubmit={()=>
                                        validarJuego(
                                        item.name.common,
                                        paisesJuego[paisRandom].name.common 
                                    )}
                                    jugada={jugada}
                                />
                            ))}
                        </View>
                    </View>
                ):(
                    <ActivityIndicator
                        size={"large"}
                        color={"blue"}
                    />
                )
            }
            
        </View>
    );
}
