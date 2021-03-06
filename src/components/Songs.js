//Importacion de modulos necesarios
import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import { Card } from 'react-native-elements'
import { IconButton } from "react-native-paper";
import {Context as FavoriteContext} from "./providers/FavoriteContext"
import {Context as AuthContext} from './providers/AuthContext'
   

const Songs = ({ navigation, title, subtitle, image, id}) =>{
    const { createFavorite } = useContext(FavoriteContext);
    const {state} = useContext(AuthContext);
    
    function handleSave(){
        if(id){
            createFavorite(id, image, title, subtitle, state.user.id)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.user} onPress={()=>{navigation.navigate("Song", {image, id})}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: `${image}`
                                }}
                            />
                        <SafeAreaView style={styles.text}>
                            <Text  style={styles.song}>{title}</Text>
                            <Text  style={styles.name}>{subtitle}</Text>
                        </SafeAreaView>
                        <SafeAreaView>
                            <IconButton icon="star" size={20} color="#FF5B00" onPress={() => handleSave()}/> 
                        </SafeAreaView>
            </TouchableOpacity>
            <Card.Divider color= "transparent" />
        </SafeAreaView>
    )
}

//Llamamos los estilos para nuestra aplicacion donde vamos a llamar todo lo necesario 
//para nuestros diseños.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "transparent",
        textAlign:"left",
        fontSize: 20,
        color: "#FF5B00",
        borderColor: "transparent",
        borderWidth: 0
    },
    user:{
        flexDirection: 'row',
    },
    name:{
        fontFamily: "Roboto",
        color: "#FF5B00",
        fontSize: 10,
        fontWeight: "normal",
        textAlign: "left",
    },
    song: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 17,
        fontWeight: "normal",
        textAlign: "left",
        paddingTop:25,
        flexShrink:1,
    },
    text: {
        flex:1,
        flexDirection:'column',
        paddingLeft: 20,
    },
    images:{
        width:90,
        height:90,
        borderColor: "#FF5B00",
        borderWidth: 1,
      },
});

export default Songs;