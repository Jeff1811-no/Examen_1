import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import AlbumCards from './scr/components/albumCard';
import albumsInfo from './scr/api/api'
import numero from "./utils/utils"

export default function App() {


  const [alBm,setAlbum]=useState([]);
  const [cnt,setcnt]=useState([]);
  const getalbums= async()=>{
    const am= await albumsInfo();

    setAlbum(am);
    setcnt(numero(alBm));
    console.log(cnt[0]);
  }
  

  useEffect(()=>{
    getalbums();

  },[])
if(!alBm){
  return(
    <View style={styles.container}>
      <Text>Espera</Text>
    </View>
  )
}

  return (
    <View style={styles.container}>
       <StatusBar   backgroundColor = "#fff"   
                    hidden = {false}    
                      />
      <ScrollView style={styles.scroll}>
      <AlbumCards
       id={cnt[0]}/>
      <AlbumCards
      id={cnt[1]}/>
      <AlbumCards
      id={cnt[2]}/>
      </ScrollView>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll:{
    flex:1,
    marginTop:50,
  }
});
