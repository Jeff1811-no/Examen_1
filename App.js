import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import AlbumCards from './scr/components/albumCard';
import albumsInfo from './scr/api/api'
//import numero from "./utils/utils"

export default function App() {


  const [alBm,setAlbum]=useState([]);
  const [cnt,setcnt]=useState([]);
  const getalbums= async()=>{
    const am= await albumsInfo();

   setAlbum(am);
    setcnt(numero(am))
  }
  

  useEffect(()=>{
    getalbums();
  },[])
  
  const numero=(data)=>{
    
    const n=[];
    const imgrl=[]; 
    let i=0;
    let a=1;
    while(n.length<3){
        if(n.length==0){
            n.push(data[data.length-1].albumId)
            imgrl.push(data[data.length-1].url)
            imgrl.push(data[data.length-2].url)
        }
        if(n[i]===data[data.length-a].albumId){
            a++;
        }else{
            i++;
            n.push(data[data.length-a].albumId)
            imgrl.push(data[data.length-a].url)
            imgrl.push(data[data.length-a-1].url)
            a++;
        }
    }
    const datac=[];
    datac.push(n);
    datac.push(imgrl);
    return datac;

}





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
       id={cnt[0][0]}
    />
      <AlbumCards
      id={cnt[0][1]}/>
      <AlbumCards
      id={cnt[0][2]}/>
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
