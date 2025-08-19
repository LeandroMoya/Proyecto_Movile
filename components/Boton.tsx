import { globalStyles } from "@/globalStyles/globalStyles";
import { UseFormHandleSubmit } from "react-hook-form";
import { Pressable, View,Text } from "react-native";

interface Props{
    handleSubmit:UseFormHandleSubmit<any,any>,
    onSubmit:(data:any)=>void,
    titulo:string,
}

export default function Boton({handleSubmit,onSubmit,titulo}:Props) {

  return (
        <View style={[globalStyles.centrarItems,globalStyles.mt10]}>
            <Pressable 
                onPress={() => handleSubmit(onSubmit)()} 
                style={({pressed})=>[
                    {
                        opacity : pressed ? 0.7 : 1,
                    },
                    globalStyles.btn,
                ]}
            >
                <Text style={[
                    globalStyles.textoBtn,
                    globalStyles.textCenter,
                    globalStyles.textoBlanco
                ]}>
                    {titulo}
                </Text>
            </Pressable>
        </View>
  );
}
