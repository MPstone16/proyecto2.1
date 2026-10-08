import {router} from "expo-router";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

export default function MensajesScreen(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Esta es la nueva pagina de Formulario.</Text>
            <Text style = {styles.title}>Ingrese su nombre:</Text>
            <TextInput style = {styles.button}/>
            <Text style = {styles.title}>Ingrese su apellido:</Text>
            <TextInput style = {styles.button}/>
            <Text style = {styles.title}>Ingrese una materia:</Text>
            <TextInput style = {styles.button}/>
            <Button title="Volver" onPress={() => router.back()}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'#397c7c'
  },
  title:{
    fontSize:17,
    color:'#000000'

  },
  button:{
        margin:12, //Margen externo que separa el boton de los que esta arriba
        backgroundColor: "#bdbdc7f5", //Color de fondo
        paddingVertical: 10, //Espacio interno, de arriba hasta el boton
        paddingHorizontal: 100, //Espacio interno, de izquierda a derecha entre el borde y texto
        borderRadius: 0, //Redondear esquinas
    },
})