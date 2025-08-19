import { globalStyles } from "@/globalStyles/globalStyles";
import { View,Text } from "react-native";

interface Props{
    jugada : number
}

export default function MensajeJuegoDificil({ jugada }:Props) {

    return (
            //No muestra el mensaje hasta que el usuario responda
            jugada===0?(
                <View style={globalStyles.dNone}> 

                </View>
            ):(
                //Valida que la respuesta sea correcta
                jugada===1?(
                    <View  > 
                        <Text style={[globalStyles.titulo,globalStyles.respuestaCorrecta, globalStyles.textCenter,globalStyles.mt10]}>
                            Respuesta correcta
                        </Text>
                    </View>
                ):(
                    <View> 
                        <Text style={[globalStyles.titulo,globalStyles.respuestaIncorrecta, globalStyles.textCenter,globalStyles.mt10]}>
                            Respuesta incorrecta
                        </Text>
                    </View>
                )
                
            )
    );
}