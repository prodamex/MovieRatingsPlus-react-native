import React, {useState, useCallback} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import { Rating } from 'react-native-ratings';


const item = {
    titre: "Ajouter"
}

const AddFilm = ({data, setData}) => {

    const [titre, setTitre] = useState("");
    const [date, setDate] = useState("");

    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [link, setLink] = useState("");


    
    const save = useCallback(() =>{
        setData((state)=>[
            ...state,
            {
                titre: titre,
                description: description,
                date: date,
                note: note,
                link: link,
            }
        ])
    }, [setData, titre, description, note, link])

    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
    };
// Searchh function
const filtered = search.length > 0
? data.filter((item) =>
    item.titre.toLowerCase().includes(search.toLowerCase())
 ) : []

    return (
     <ScrollView>
         <View style={styles.view}>

{/* en bas / le search */}

<Text style={styles.heading}>Rechercher un film</Text>
            <TextInput style={styles.search}
            value={search} 
            onChange={handleSearchChange}
            ></TextInput>
            <View style={styles.text}>
            {filtered.map((item)  => {
            return (
                <p key={item.id}>
                    Nom: {item.titre} <br></br>
                    Date: {item.date} <br></br>
                    Rating: {item.note}/10<br></br>
                </p>
            );
                })}
            </View>
</View>
<View
style={{
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
}}
/>
            <Text style={styles.heading}>Ajouter un film</Text>
            <Text style={styles.text}>Titre :</Text>
            <TextInput onChangeText={setTitre} value={titre} style={styles.input}/>
            <Text style={styles.text}>Description :</Text>
            <TextInput onChangeText={setDescription} value={description} style={styles.input}/>
            <Text style={styles.text}>Année de sortie :</Text>
            <TextInput onChangeText={setDate} value={date} style={styles.input}/>
            
            {/*<TextInput onChangeText={setNote} value={note} style={styles.input}/>*/}
            <Text style={styles.text}>Mettez le lien URL de l'image :</Text>
            <TextInput onChangeText={setLink} value={link} style={styles.input}/>
            <Rating
            showRating
            onFinishRating={setNote}
            value={note}
            style={styles.rating}
            />
            <Button color="#D2691E" onPress={save} title="ajouter le film " ></Button>
            
     </ScrollView>
    )
}

export default AddFilm;

const styles = StyleSheet.create({
    heading:{
        color: '#D2691E',
        fontSize: 24,
        fontWeight: 300,
        textAlign: 'center',
        marginBottom:5,

    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    view: {
        marginBottom:20,
      },
    text: {
        marginLeft: 10,
        color : '#D2691E',
        textAlign: 'center',
        fontWeight: 400,
      },
     search:
    {
        fontSize:15,
        padding: 10,
        width:'100%',
        fontWeight: 200,
        backgroundColor: '#D2691E',
        borderRadius: 8,
        color: '#FFFFFF',
        marginTop: 5,
    },
    rating:
    {
        marginBottom:30,
    },
  
  });
