
import Formulario from "@/components/Formulario";
import { useUsuarioContext } from "@/context/UsuarioContext";
import { globalStyles } from "@/globalStyles/globalStyles";
import { View,Text  } from "react-native";


export default function FormularioInicio() {
    const {mensaje}= useUsuarioContext()
    return (
      <View style={[globalStyles.container]}>
        {/*Formulario de inicio de cesión*/}
        <Formulario/>
        {/*Muestetra un mensaje de error al usuario si ingresa mal sus datos*/}
        {mensaje && <Text style={globalStyles.textoError}>{mensaje}</Text>} 
      </View>
    );
}