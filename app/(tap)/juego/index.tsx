import JuegoDificil from "@/components/JuegoDificil";
import JuegoFacil from "@/components/JuegoFacil";
import SelectorModoJuego from "@/components/SelectorModoJuego";
import { globalStyles } from "@/globalStyles/globalStyles";
import { useState } from "react";
import { View } from "react-native";

const tipoJuego:string[]= [
  "Fácil",
  "Difícil"
]
export default function JuegoPaises() {
  const [modoJuego, setModoJuego] = useState<string>(tipoJuego[0]);
  return (
    <View style={[
      globalStyles.container,
      globalStyles.fondoGris,
    ]}>

    <SelectorModoJuego 
      modoJuego={modoJuego} 
      setModoJuego={setModoJuego} 
      tipoJuego={tipoJuego}
    />

    {modoJuego === tipoJuego[0]?(
      <JuegoFacil/>):
      (<JuegoDificil/>)
    }
    </View>
  );
}