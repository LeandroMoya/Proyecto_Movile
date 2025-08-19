import { globalStyles } from "@/globalStyles/globalStyles";
import { useOrientacion } from "@/hooks/useOrientacion";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

interface Props{
    modoJuego:string,
    setModoJuego :(itemValue:string)=>void,
    tipoJuego:string[]
}

export default function SelectorModoJuego({modoJuego,setModoJuego,tipoJuego}:Props) {
  const esOrizontal = useOrientacion()
  return (
    <View style={[
        globalStyles.selectorJuego,
        esOrizontal&&globalStyles.mB1
    ]}>
        {/*Permite cambiar el modo de juego*/}
        <Picker
            selectedValue={modoJuego}
            onValueChange={(itemValue) => setModoJuego(itemValue)}
        >  
            {   
                //Muestra todas ls opciones de modo de juego
                tipoJuego.map((item,id)=>(
                    <Picker.Item 
                        key={id}
                        label={item} 
                        value={item} 
                        style={globalStyles.tamaniotexto} 
                    />
                ))
            } 
        </Picker>
    </View>
  );
}
