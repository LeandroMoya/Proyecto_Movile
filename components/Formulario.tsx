import { useUsuarioContext } from '@/context/UsuarioContext';
import { globalStyles } from '@/globalStyles/globalStyles';
import { useOrientacion } from '@/hooks/useOrientacion';
import { Usuario } from '@/interfaces/Usuario';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Image, Text, TextInput, View } from 'react-native';
import Boton from './Boton';

export default function Formulario() {
    const esOrizontal = useOrientacion()

    const router = useRouter()
    const {inicio,setUsuario}= useUsuarioContext()

    const {
      register,
      setValue,
      handleSubmit,
      formState: { errors },
    } = useForm<Usuario>()

    async function onSubmit(data:Usuario):Promise<void>{
        //Valida el usuario ingresado con los que hay en el sistema
        const resultado = await inicio(data)
        //Valida si el ususario exista
        if(resultado){
            //Cambia los datos del usuario que ingreso
            setUsuario(data)
            //Redirecciona a la pagína del listado de países
            router.push("/(tap)/inicio")
        }
    }

    return (
        //Formulario de inicio de sesión 
        <View style={[globalStyles.formulario, esOrizontal&&globalStyles.formularioOrizontal]}>
            {/*Logo y encabezado*/}
            <View>
                <View style={[globalStyles.centrarItems]}>
                    <Image
                        style={globalStyles.icono}
                        source={require("../assets/images/icono.png")}
                    />
                </View>
                <Text style={globalStyles.titulo}>
                    GeoQuiz & Data Explorer
                </Text>
            </View>

            {/*Ingresar datos*/}
            <View style={[globalStyles.mt10,esOrizontal&&globalStyles.w50]}>
                {/*Nombre*/}
                <View>

                    <Text style={[globalStyles.tamaniotexto]} >
                        Nombre
                    </Text>

                    <TextInput
                        onChangeText={value=>setValue("nombre",value)}
                        {...register("nombre", 
                            {   required: {
                                    value:true,
                                    message:"El campo es requerido"
                                }
                            }
                        )} 
                        style={[globalStyles.tamaniotexto,globalStyles.txt]}
                    />
                    {errors.nombre&& <Text style={globalStyles.textoError}>{errors.nombre.message}</Text>}
                </View>

                {/*Contraseña*/}
                <View style={globalStyles.mt10}>

                    <Text style={[globalStyles.tamaniotexto]}>
                        Contraseña.
                    </Text>

                    <TextInput
                        {...register("contrasenia", 
                            {   required: {
                                    value:true,
                                    message:"El campo es requerido"
                                }
                            }
                        )} 

                        textContentType="newPassword"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        enablesReturnKeyAutomatically
                        onChangeText={value=>setValue("contrasenia",value)}
                        style={[globalStyles.tamaniotexto,globalStyles.txt]}
                    />

                    {errors.contrasenia&& <Text style={globalStyles.textoError}>{errors.contrasenia.message}</Text>}
                </View>

                {/*Boton*/}
                <Boton
                    titulo='Inicio'
                    handleSubmit ={handleSubmit}
                    onSubmit ={onSubmit}
                />

            </View>

        </View>  
  );
}