import { View, Text, SafeAreaView, ScrollView, StyleSheet , Image, Modal, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Boutton from '../components/Button';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core'

const items = []

export default function ListFilm({data}) {
  const afficheInfo = (item) =>{
  console.log(item);    
  }

  return (
    <>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {data && data.map((item, index)=>(
          <Boutton key={index}
                 onPress={()=>afficheInfo(item)}
                 style={styles.button}
                 item={item}/>
        ))}
        </ScrollView>
      </SafeAreaView>

      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom:10,
    marginTop:10,
    textAlign: 'center',
    fontWeight: 400,
  },
  view: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D2691E",
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
    borderRadius:30,
  },
  search:
    {
        fontSize:15,
        padding: 15,
        width:'100%',
        fontWeight: 200,
        backgroundColor: '#D2691E',
        borderRadius: 8,
        color: '#FFFFFF',
        marginTop: 5,
    },
});