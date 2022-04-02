import React, {useState} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput, ScrollView, Image } from 'react-native'


export default function imdb() {
    


    
    const apiurl = "https://www.omdbapi.com/?i=tt3896198&apikey=3bc2785a"
    const [state, setState]= useState({
        s: "",
        results : [],
        selected : {}
    });
//////// on appelle 'apiurl' et on ajoute le parametre ou la query '&s=' pour la recherche dans la base de donnees/l'api et on setState les results à results
    const search = () => {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
            let results = data.Search;
            setState(prevState =>{
                return { ...prevState, results: results}
            })
        })
    }

    return (
        <ScrollView style={styles.results}>
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Recherches dans IMDB - films</Text>
        <Text style={styles.rechercher}>Rechercher le film :</Text>

        <TextInput 
        style={styles.search}
//////// on crée onChangeText pour avoir la possibilité de changer le 's:' (Rechercher un film..) par du text/
        onChangeText={text => setState(prevState =>{
            return{...prevState, s: text}
        })}
        onSubmitEditing={search}
        value={state.s}
        />
            {state.results.map(result =>(
            <View key={result.imdbID} style={styles.result}>
                <Image source={{uri :result.Poster}} 
                style={styles.image} resizeMode="cover"
                />
                <Text style={styles.heading}>{result.Title}</Text>

            </View>
            ))}
    </SafeAreaView>
    </ScrollView>

    );
  }

  const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'flex-start',
        paddingTop: 40,
        alignItems: 'center',
        
    },
    rechercher:
    {
        marginTop:20,

    },
    title: 
    {
        color: '#D2691E',
        fontSize: 24,
        fontWeight: 300,
        alignItems: 'center',

    },
    image:{
        width:'100%',
        height:300
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
        marginTop: 20,
    },
    results:
    {
        flex:1,
    },
    result:
    {
        marginTop:20,
        flex:1,
        width:'100%',
        marginBottom:20,
    },
    heading:
    {
        color:'#D2691E',
        fontSize:16,
        fontWeight: 500,
        padding:20,
        backgroundColor:'#CBB9A8',
    }
  });
     