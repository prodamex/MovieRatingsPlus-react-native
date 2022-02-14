import { View, Text, SafeAreaView, ScrollView, StyleSheet , Image} from 'react-native';
import React from 'react';
import Boutton from '../components/Button';

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
  scrollView: {
    marginHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D2691E",
    padding: 10
  },
});