import ListarPaises from "@/components/ListarPaises";
import TxtBusqueda from "@/components/TxtBusqueda";
import { useUsuarioContext } from "@/context/UsuarioContext";
import { globalStyles } from "@/globalStyles/globalStyles";
import { Paises } from "@/interfaces/Paises";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function ListaDePaises() {
    //Trae todos los países 
    const {listaPaises} =useUsuarioContext()
    //Obtiene el nombre del país ingresado por el usuario
    const [nombre,setNombre]=useState<string>("");
    //Guarda todos los países filtrados por el susario
    const [paisesFiltrados,setPaisesFiltrados]=useState<Paises[]>([]);

    function filtrarPaises(nombre:string=""):void {
        //Valida que el nombre este vacio para mostrar todos los países
        if(nombre.replaceAll(" ","") ===""){
            setPaisesFiltrados(listaPaises)
            return
        }
        //Filtra los países que coincidan con el nombre ingresado por el usuario
        const paises:Paises[] = listaPaises.filter((item)=>{
           return item.name.common.trim().toLowerCase()
            .includes(nombre.trim().toLowerCase())
        })
        //Guarda los países filtrados
        setPaisesFiltrados(paises) 
    }

    return (
      <View 
        style={[
          globalStyles.fondoGris,
        ]}>
          {/*Filtra todos los países por nombre*/}
          <TxtBusqueda 
            nombre={nombre} 
            setNombre={setNombre} 
            filtrarPaises ={filtrarPaises}
          />
          {/*Lista los países filtrados*/}
          {//Valida que hayan países que mostrar
           paisesFiltrados?<ListarPaises
                            filtrarPaises ={filtrarPaises}
                            paisesFiltrados ={paisesFiltrados}
                          />
                          :<ActivityIndicator
                                size={"large"}
                                color={"blue"}
                            />
          }  
      </View>
    );
}
