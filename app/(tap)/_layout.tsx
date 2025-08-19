import { Colores } from "@/constants/Colores";
import { useUsuarioContext } from "@/context/UsuarioContext";
import { useOrientacion } from "@/hooks/useOrientacion";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { View } from "react-native";


export default function TabLayout() {
   const esOrizontal = useOrientacion()
  const {salir}=useUsuarioContext()
  return (
//https://reactnavigation.org/docs/bottom-tab-navigator/#options
    <Tabs
        screenOptions={{
            headerShown:true,

            headerRight :()=>
            <View  style={[ !esOrizontal&&{marginRight:"3%"}]}>
                <FontAwesome
                    name="arrow-right-from-bracket"
                    size={30}
                    onPress={salir}
                />
            </View>,

            headerTitle:"",

            headerLeft:()=> 
            <View style={[ !esOrizontal&&{marginLeft:"10%"}]}>
                <FontAwesome
                    name="earth-americas"
                    size={30}
                />
            </View>,

            headerStyle:{
                height:70,
            },
            tabBarActiveTintColor:Colores.verdeLimon,
            tabBarVariant: esOrizontal?'material':"uikit",
            tabBarLabelPosition: 'below-icon',
            tabBarPosition:esOrizontal?'right':"bottom",
        }}
    >
        <Tabs.Screen 
            name="inicio/index"
            options={{
                title:"Países",
                tabBarIcon:({color})=><FontAwesome size={24} name="flag" color={color}/>
            }}
        />

        <Tabs.Screen 
            name="juego/index"
            options={{ 
                title:"Juego",
                tabBarIcon:({color})=><FontAwesome size={24} name="gamepad" color={color}/>,
            }}
        />

    </Tabs>
  );
}
