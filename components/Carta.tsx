import { globalStyles } from "@/globalStyles/globalStyles";
import { useOrientacion } from "@/hooks/useOrientacion";
import { Paises } from "@/interfaces/Paises";
import { View,Image,Text } from "react-native";

interface Props{
    pais :Paises
}

export default function Carta({pais}:Props) {
    const esOrizontal = useOrientacion()
  return (
    <View style={[
        globalStyles.carta,
                esOrizontal?
                globalStyles.cartaOrizontal:
                globalStyles.cartaVertical,
        globalStyles.fondoBanco
    ]}>
        {/*Imagen del país*/}
        <Image style={globalStyles.bandera}
            source={{
                uri:pais.flags.png
            }}
        />
        {/*Nombre del país*/}
        <Text style={[globalStyles.titulo,globalStyles.textCenter]}
            numberOfLines={1}
        >
            {pais.name.common}
        </Text>
    </View>
  );
}