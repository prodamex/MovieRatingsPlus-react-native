import { View, Text, SafeAreaView, ScrollView, StyleSheet , Image, Modal, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Boutton from '../components/Button';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core'


export default function settings() {
 
  const navigation = useNavigation()
// Deconnexion 
  const deco = ()=> {
    auth
    .signOut()
    .then(() =>{
        navigation.replace("MovieRating")
    })
    .catch(error => alert(error.message))
}

  return (
    <>
     <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={deco}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom:10,
    marginTop:40,
    textAlign: 'center',
    fontWeight: 400,
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
});