
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const AlbumCards=({
    id,
    img="https://via.placeholder.com/150/29fe9f"

})=>{
    return(
        
        <View style={styles.container}>
            <View style={styles.carta}>
                <Text style={styles.texto}>Id de Album: {id}</Text>
            <Image style={styles.imagen} source={{uri: `${img}`}}/>
         
            </View>     
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flex: 1,
        backgroundColor: '#56D327',
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto:{
          flex:1,
          textAlign:'center' ,
          justifyContent:'center',
          color:"#fff",
          backgroundColor:"#f1f"
      },
      carta:{
         
        flexWrap:'wrap',
        borderRadius:10,
        margin:5,
        height:height*0.20,
        width:width*0.92,
        alignItems:'center',
        justifyContent:"center",
        marginVertical:5,
        borderColor:"#fff",
      },
      imagen:{
        margin:1,
        height:110,
        width:110,
      }

})

export default AlbumCards;
