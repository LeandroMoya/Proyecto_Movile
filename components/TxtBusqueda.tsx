import { globalStyles } from "@/globalStyles/globalStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { Pressable, TextInput, View } from "react-native";

interface Props{
    nombre :string,
    setNombre:(nombre:string)=>void
    filtrarPaises : (nombre?:string)=>void
}

export default function TxtBusqueda({nombre,filtrarPaises,setNombre}:Props) {

    return (
            <View style={[ globalStyles.mt10,globalStyles.fDRow,globalStyles.jCenter]} >
                <Pressable
                    style={({pressed}) => [
                        {
                            opacity :pressed?0.5:1
                        },
                        globalStyles.bordesIcono,
                        globalStyles.fondoBanco
                    ]}
                    onPress={()=>filtrarPaises(nombre)}
                >
                    <FontAwesome
                        name="magnifying-glass"
                        size={40}
                    />
                </Pressable>

                <TextInput 
                    style={[
                        globalStyles.tamaniotexto,
                        globalStyles.w75,
                        globalStyles.txtBusqueda,
                        globalStyles.fondoBanco
                    ]}
                    onChangeText={setNombre}
                    placeholder="Busqueda"
                />
            
            </View>
    );
}
