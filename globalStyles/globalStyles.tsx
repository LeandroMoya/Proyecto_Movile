import { Colores } from "@/constants/Colores";
import { StyleSheet } from "react-native";

export const globalStyles= StyleSheet.create({

  container:{
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    width:"100%"
  },

  h100:{
    height:"100%"
  },

  formulario:{
    padding:30,
    borderRadius:40,
    backgroundColor: Colores.blanco,
  },

  formularioOrizontal:{
    flexDirection:"row",
    width:"85%",
  },

  tamaniotexto:{
    fontSize:20,
  },

  btn:{
    backgroundColor:Colores.azul,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  },

  textoBtn:{
    fontSize:24
  },

  textoBlanco:{
    color:Colores.blanco
  },

  textCenter:{
    textAlign:"center",
  },

  mt100:{
    marginTop:100
  },

  mt10:{
    marginTop:10
  },

  fondoBanco:{
    backgroundColor:Colores.blanco
  },

  fondoGris:{
    backgroundColor:Colores.fondoGris
  },

  txt:{
    borderBottomWidth: 2, 
    borderBottomColor: Colores.verdeLimon,
    marginEnd:10
  },
  
  textoError:{
    color:Colores.rojo,
    fontSize:18
  },

  respuestaIncorrecta:{
    color:Colores.rojoClaro,
    padding:10,
    borderRadius:10,
    backgroundColor:Colores.rojoOscuro
  },

  respuestaCorrecta:{
    color:Colores.verdeClaro,
    padding:10,
    borderRadius:10,
    backgroundColor:Colores.verdeOscuro
  },

  centrarItems:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
  },

  icono:{
    width:125,
    height:125
  },

  titulo:{
    fontSize:25
  },

  pTop80:{
    paddingTop: 80
  },

  jCenter:{
    justifyContent:"center",
  },
  
  aItemsCenter:{
    alignItems:"center"
  },

  fDRow:{
    flexDirection:"row",
  },

  w75:{
    width:"75%",
  },

  w50:{
    width:"50%",
  },

  mL1:{
    marginLeft:"1%"
  },

  w100:{
    width:"100%",
  },

  bandera:{
    width:"100%",
    height:150
  },

  carta:{
    width:"100%",
    paddingBottom:6,
    overflow:"hidden",
    borderRadius:10,
    marginBottom:20
  },

  cartaVertical:{
    width:"65%",
    marginHorizontal:"17.5%",
  },

  cartaOrizontal:{
    width:"40%",
    margin:"5%"
  },

  mT30:{
    marginTop:30
  },

  txtBusqueda:{
    borderWidth: 2,
    borderColor: Colores.verdeLimon,
    borderRadius:20,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0
  },

  bordesIcono:{
    padding:6,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: Colores.verdeLimon,
    borderRadius:20,
    borderTopRightRadius:0,
    borderBottomRightRadius:0
  },

  dNone:{
    display:"none"
  },

  banderaJuegoOrizontal:{
    width:"50%",
    height:"100%",
  },

  banderaJuegoVertical:{
    width:"100%",
    height:"50%"
  },

  selectorJuego:{
    width:"40%",
    borderRadius:20,
    backgroundColor:Colores.grisOscuro,
    marginBottom:"6%"
  },

  mB1:{
    marginBottom:"1%"
  },

  txtJuego:{
    padding:7,
    borderWidth:2,
    borderColor:Colores.grisOscuro,
    marginTop:"7%",
    backgroundColor:Colores.blanco,
    borderRadius:10,
  },

  contenedorJuego:{
    width:"96%",
    height:"70%"
  },

})