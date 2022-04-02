import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("MovieRating++")
            }
        })
        return unsubscribe
    }, [])

    const inscription =() => {
        auth
        .createUserWithEmailAndPassword(email, mdp)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log("Inscrit en tant que ",user.email);
        })
        .catch(error => alert(error.message))
    }

    const ident =() =>{
        auth
        .signInWithEmailAndPassword(email,mdp)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log("Identifié en tant que ", user.email);
        })
        .catch(error => alert(error.message))
    }

    

  return (
// J'utilise KeyboardAvoidingView pour éviter de cacher/couvrir les input elements quand on a le clavier de mobile
    <KeyboardAvoidingView
    style={styles.container}
    behaviour="padding"
    
    >
      <View style={styles.inputContainer}>
          <Text style={styles.title}>MovieRating++</Text>
        <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        ></TextInput>
         <TextInput 
        placeholder="Mot de passe"
        value={mdp}
       onChangeText={text => setMdp(text)}
        style={styles.input}
        secureTextEntry
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={ident}
          style={styles.button}
        >
          <Text style={styles.buttonText}>S'identifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={inscription}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize:24,
    marginBottom:20,
    fontWeight:600,
    color:'#d2691e',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#d2691e',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#d2691e',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#d2691e',
    fontWeight: '700',
    fontSize: 16,
  },
})