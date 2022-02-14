import React, {useState, useCallback} from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native'

const item = {
    titre: "Ajouter"
}

const AddFilm = ({data, setData}) => {

    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");

    
    const save = useCallback(() =>{
        setData((state)=>[
            ...state,
            {
                titre: titre,
                description: description,
                note: note
            }
        ])
    }, [setData, titre, description, note])

    return (
        <SafeAreaView>
            <Text style={styles.text}>Titre :</Text>
            <TextInput onChangeText={setTitre} value={titre} style={styles.input}/>
            <Text style={styles.text}>Description :</Text>
            <TextInput onChangeText={setDescription} value={description} style={styles.input}/>
            <Text style={styles.text}>Note sur /10 :</Text>
            <TextInput onChangeText={setNote} value={note} style={styles.input}/>
            <Button color="#D2691E" onPress={save} title="ajouter" ></Button>

        </SafeAreaView>
    )
}

export default AddFilm;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
        marginLeft: 10,
        marginTop: 10,
        color : '#D2691E',
      },
  
  });