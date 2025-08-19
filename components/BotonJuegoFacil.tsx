import { Colores } from "@/constants/Colores";
import { globalStyles } from "@/globalStyles/globalStyles";
import { useOrientacion } from "@/hooks/useOrientacion";
import { Pressable,Text } from "react-native";

interface Props{
    nombrePaisRespuesta :string
    jugada:number
    nombrePaisJuego : string
    onSubmit:()=>void
}

export default function BotonJuegoFacil({nombrePaisRespuesta,jugada,onSubmit,nombrePaisJuego}:Props) {

    const esOrizontal =useOrientacion()
    
    return (
            <Pressable
                onPress={onSubmit}
                style={({pressed}) =>[
                    globalStyles.mt10,
                    globalStyles.btn,
                    //Agregar un margen a la izquierda 
                    //cuando es en modo orizontal
                    esOrizontal&&globalStyles.mL1,
                    {
                        opacity :pressed?0.5:1
                    },
                    //Color por defecto del boton
                    {backgroundColor:jugada===0?Colores.azul:
                        //Valida si el usuario acerto pone el boton de verde
                        //De lo contrario será rojo
                        nombrePaisRespuesta.replaceAll(" ","").toLowerCase()===
                        nombrePaisJuego.replaceAll(" ","").toLowerCase()?Colores.verde:Colores.rojo}
                ]}
            >
                <Text style={[
                    //Agrega un texto de menor tamaño si el modo es
                    //Orizontal
                    esOrizontal?
                        globalStyles.tamaniotexto:
                        globalStyles.titulo,

                    globalStyles.textCenter,
                    globalStyles.textoBlanco
                ]}
                    numberOfLines={1}
                >
                    {nombrePaisRespuesta}
                </Text>
            </Pressable>
    );
}
