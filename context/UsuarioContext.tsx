import { Paises } from "@/interfaces/Paises";
import { Usuario } from "@/interfaces/Usuario";
import usePaisesServices from "@/service/usePaisesServices";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { usuarios } from "../Data/Data";
//Interfaz que inplementa el contexto
interface UsuarioContext{
    usuario : Usuario,
    listaPaises:Paises[],
    mensaje: string | undefined,
    
    setUsuario:(React.Dispatch<React.SetStateAction<Usuario>>),
    inicio(usuarioSistema:Usuario):Promise<boolean> ,
    salir:()=>void
}
//Crea el contexto
const UsuarioContext = createContext<UsuarioContext | undefined>(undefined)

export function useUsuarioContext() {
    const context=useContext(UsuarioContext)
    if(context){
        return context
    }
    throw new Error("El contexto no puede ser accesado fuera del proveedor")
} 

export function UsuarioProvider({children}:PropsWithChildren) {
    //Mantiene la informacón del usuario que ingreso a la aplicación
    const [usuario,setUsuario] =useState<Usuario>({
        nombre:"",
        contrasenia:""
    })
    //Muestra un mensaje al usuario de que ingreso mal los datos
    const [mensaje,setMensaje] =useState<string | undefined>(undefined)

    const {obtenerPaises} = usePaisesServices()   
    //Mantiene la informacón de todos los países
    const [listaPaises,setListaPaises] =useState<Paises[]>([])

    function salir():void {
        //Valida que exista un usuario en el sistema
        if(usuario.nombre!=="" && usuario.contrasenia !== "")
            router.push("/")//Redirigue al usuario al formulario
        //Limpia el arreglo de países
        setListaPaises([])
        //Evita que se vea el mensaje
        setMensaje(undefined)
        return
    }

    async function inicio(usuarioSistema:Usuario):Promise<boolean> {
        //Valida que el usuario no sea nulo
        if(usuarioSistema){
            //Obtiene un usuario que este registrado en el sistema
            const usuario = usuarios.find((item)=> 
                item.contrasenia===usuarioSistema.contrasenia &&
                item.nombre === usuarioSistema.nombre
            )
            //Valida que el usuario exista
            if(usuario){
                //Obtiene todos los países
                const resultado:Paises[] = await obtenerPaises()
                //Valida que la lista no sea nula
                if(resultado )
                    setListaPaises(resultado)
                
                return true
            } 
            setMensaje("El usuario y/o la contraseña son incorrectas")
            return false
        }
        return false
    } 

    return(
        <UsuarioContext.Provider 
            value={{
                usuario,
                listaPaises,
                salir,
                inicio,
                setUsuario,
                mensaje
            }}>
            {children}
        </UsuarioContext.Provider>   
    )

}