import React from "react";

import { Text, View, StyleSheet, Image, Button, Alert, TextInput } from 'react-native'
import SimpleTouchableButton from "@/components/simple-TouchableButton";
import { router } from "expo-router";

const App = () => {
  return  (
    <View style = {styles.container}>
      <Text style = {styles.title}>Hola Mundo</Text>
      <Image
      source={require('../../assets/images/El_Buo..png')} 
      //source={{uri:'htps://picsum.photos/id/200/500/500'}} 
      style={styles.image}
      />
      <Button
        color='red'
        title="Presioname"
        //onPress={() => console.log("Hola EPN")}
        onPress={() => Alert.alert("Hola EPN")}
      />
      <SimpleTouchableButton
        title="Touchable Reutilizable"
        onPress={() => Alert.alert("Hola desde touchable Opacity")}
      />
      <SimpleTouchableButton
        title="Boton de Navegacion"
        onPress={() => router.push("/mensaje")}
      />
      <SimpleTouchableButton
        title="Boton de Formulario"
        onPress={() => router.push("/formulario")}
      />
      <TextInput/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'#397c7c'
  },
  title:{
    fontSize:50,
    color:'#000000'
  },
  image:{height:300, width:350},
})
export default App;