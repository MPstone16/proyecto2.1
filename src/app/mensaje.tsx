import {router} from "expo-router";
import { Button, Text, View } from "react-native";

export default function MensajesScreen(){
    return(
        <View >
            <Text>Esta es la nueva pagina de Mensajes.</Text>
            <Button title="Volver" onPress={() => router.back()}></Button>
        </View>
    );
}