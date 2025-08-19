import { useEffect} from "react";
import { FlatList, View } from "react-native";

import Carta from "./Carta";
import { Paises } from "@/interfaces/Paises";
import { useOrientacion } from "@/hooks/useOrientacion";

interface Props{
    filtrarPaises : (nombre?:string)=>void,
    paisesFiltrados:Paises[]
}

export default function ListarPaises({filtrarPaises,paisesFiltrados}:Props) {
    const esOrizontal = useOrientacion()
    useEffect(()=>{
        //Muestra todos lo los países
        filtrarPaises();
    },[])

    return (
        <View style={[esOrizontal?{height:"80%"}:{height:"90%"}]}>
            {   /*Lista todos los países*/
                <FlatList
                    key={esOrizontal?2:1}
                    data={paisesFiltrados}
                    numColumns={esOrizontal?2:1}
                    keyExtractor={item => item.ccn3}
                    renderItem={({item}) => <Carta pais={item}/>}
                />     
            }
        </View>
    );
}
