//Importar Slot desde expo router
//Slot es un componente que nos servira como spacio donde se va a renderizar la pantalla "activa" segun la ruta

import { Slot, Stack } from "expo-router"; //Tambien puede ser Stack

//Layout raiz de la app
//Este comoponente envuelve todas las rutas y vvvistas dentro de la carpeta app

export default function RootLaout(){
  return<Slot screenOptions={{headerShown:false}}/>
};

