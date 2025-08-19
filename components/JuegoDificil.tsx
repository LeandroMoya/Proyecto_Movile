import { globalStyles } from "@/globalStyles/globalStyles";
import useJuego from "@/hooks/useJuego";
import { useOrientacion } from "@/hooks/useOrientacion";
import { Juego } from "@/interfaces/Juego";
import { Paises } from "@/interfaces/Paises";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Image, Text, TextInput, View } from "react-native";
import Boton from "./Boton";
import MensajeJuegoDificil from "./MensajeJuegoDificil";


export default function JuegoDificil() {
    //Guarda el país que sera la respuesta correcta
    const [paisJuego,setPaisJuego]=useState<Paises>()
    const esOrizontal=useOrientacion()
    const {
      control,
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Juego>({
        defaultValues: {
            nombrePais: "",
            respuesta:""
        },
    })
    const{
        jugada,
        validarJuego,
        obtenerPaisesRandom,
    }=useJuego()

    async function onSubmit(data:Juego) {
        //Valida que no se haya hecho una jugada anteriormente
        await validarJuego(data.nombrePais,data.respuesta)
        obtenerPaisJuego()
    }

    function obtenerPaisJuego() {
        //Obtiene un país ramdon
        const paisRamdon :Paises[] = obtenerPaisesRandom(1);
        //Guarda el país en otra variable
        const pais:Paises = paisRamdon[0]
        setPaisJuego(pais)
        reset({
            //Obtiene el núevo nombre del país a adivinar
            nombrePais: pais.name.common,
            respuesta:""
        })
    }
    
    useEffect(()=>{
        obtenerPaisJuego()
    },[])

    return (
   
        <View  style={[
            globalStyles.contenedorJuego, 
        ]}>

            {paisJuego?
                (
                    <View style={[
                        globalStyles.h100,
                        esOrizontal&&globalStyles.fDRow,
                        globalStyles.aItemsCenter
                    ]}>
                        {/*Imagen del país a adivinar*/}
                        <Image
                            style={[
                                esOrizontal?
                                    globalStyles.banderaJuegoOrizontal:
                                    globalStyles.banderaJuegoVertical
                            ]}
                            source={{
                                uri:paisJuego?.flags.png
                            }}
                        />
                        <View style={[
                            esOrizontal?
                                globalStyles.w50:
                                globalStyles.w100,
                            esOrizontal&&globalStyles.mL1
                        ]}>
                            {/*Mensaje de retroalimentacion en modo orizontal*/}
                            {esOrizontal&&( <MensajeJuegoDificil jugada={jugada}/>)}

                            {/*Guarda la respuesta correcta*/}
                            <TextInput
                                style={globalStyles.dNone}
                                {...register("nombrePais")} 
                            />

                            {/*Respuesta del usuario*/}
                            <Controller
                                control={control}
                                name="respuesta"
                                rules={{ required: "El campo es requerido" }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={[
                                            globalStyles.tamaniotexto,
                                            globalStyles.txtJuego,
                                        ]}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />

                            {errors.respuesta&& <Text style={globalStyles.textoError}>{errors.respuesta.message}</Text>}
                            <Boton
                                titulo="Validar"
                                handleSubmit={handleSubmit}
                                onSubmit={onSubmit}
                            /> 
                        </View>

                        {/*Mensaje de retroalimentacion en modo vertical*/}
                        {!esOrizontal&&( <MensajeJuegoDificil jugada={jugada}/>)}
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
