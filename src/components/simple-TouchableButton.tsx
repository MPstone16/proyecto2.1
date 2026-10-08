import { StyleSheet, Text, TouchableOpacity } from "react-native";

type SimpleTouchableButtonProps = {
    title:string;
    onPress: () => void;
};

export default function SimpleTouchableOpacity({
    title,
    onPress,
}:SimpleTouchableButtonProps){
    return(
        <TouchableOpacity
            onPress = {onPress}
            style = {styles.button}
        >
            <Text style= {styles.text} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        margin:12, //Margen externo que separa el boton de los que esta arriba
        backgroundColor: "#171d70f5", //Color de fondo
        paddingVertical: 10, //Espacio interno, de arriba hasta el boton
        paddingHorizontal: 16, //Espacio interno, de izquierda a derecha entre el borde y texto
        borderRadius: 8, //Redondear esquinas
    },
    text: {
        color:"rgba(133, 158, 206, 0.75)",
        fontSize: 16,
        fontWeight: "600",
    }
})