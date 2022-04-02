import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'


export default function Button({item, style, onPress}) {
    
    
    return (
            <TouchableOpacity onPress={onPress} style={style}>
                <Text style={styles.titre}> {item.titre}</Text>
                <Image style={styles.link} source={{uri:item.link}}/> 
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{"Année : " +item.date}</Text>
                <Text style={styles.note}>{"note : " +item.note}/10</Text>  
            </TouchableOpacity>
            

        
    )
}
const styles = StyleSheet.create({

    note: {
        color : 'white',
      },
    link : {
        padding:70,
        width: '50%', height: '50%'
       
     },
     titre : {
        padding:10,

        fontSize: 24,
        fontWeight: 600,
        color : 'white',
     },
     date : {
        padding:10,

        fontSize: 17,
        color : 'white',
     },
     description : {
        padding:10,

        textAlign: 'center',
        fontSize: 15,
        color : 'white',
        fontWeight: "bold"

     },
     note : {
         color: "white",
         padding:10,
         marginBottom:50,
     },
     
  
  });