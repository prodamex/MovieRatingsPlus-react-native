import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListFilm from "./view/ListFilm";
import AddFilm from "./view/addFilm";
import imdb from "./view/imdb";
import settings from "./view/settings";


const Tab = createBottomTabNavigator();

const Main = () => {

  
  const [data, setData] = useState([{
    id: 1,
    titre: "Harry potter",
    link: "https://conversationsabouther.net/wp-content/uploads/2021/12/Harry-Potter-et-les-reliques-de-la-mort-488636.jpeg",
    description: "Harry, Ron and Hermione return to Hogwarts for a third adventure.",
    date: 2007,
    note: 8
    
  
  },{
    id: 2,
    titre: "It's Wonderful Life",
    link : "https://m.media-amazon.com/images/M/MV5BMjQxNTM4Mjg1NV5BMl5BanBnXkFtZTgwNDYyNzM4NjM@._V1_.jpg",
    description: "George Bailey has spent his entire life giving of himself to the people of Bedford Falls.",
    date: 1946,
    note: 5
  
  },{
    id: 3,
    titre: "The Hobbit",
    link : "https://i.ytimg.com/vi/ZSzeFFsKEt4/maxresdefault.jpg",
    description: "The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson.",
    date: 2012,
    note: 8

  },{
    id: 4,
    titre: "King Richard",
    link : "https://i.guim.co.uk/img/media/0bd8a57a06fa7a0c11b5413e8e6dddc8955a1ba9/131_294_3326_1996/master/3326.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ff2f5ab88efff0986ce1e47efc994e25",
    description: "Armed with a clear vision and a brazen, 78-page plan, Richard Williams is determined to write his two daughters, Venus and Serena, into history",
    date: 2021,
    note: 7
  
  },{
    id: 5,
    titre: "Dogville",
    link : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ee1bd647dd7fb0638cb442675e2b14038b36c8464ea9ae4558797f4c18df4f39._SX1080_.jpg",
    description: "A barren soundstage is stylishly utilized to create a minimalist small-town setting in which a mysterious woman named Grace (Nicole Kidman) hides from the criminals who pursue her.",
    date: 2003,
    note: 6

  },{
  id: 6,
  titre: "Spider-Man ",
  link: "https://cdn.kulturegeek.fr/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-1024x642.jpg",
  description: "When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  date: 2022,
  note: 7,
  }]);
  
  const addfilm=()=>(<><AddFilm data={data} setData={setData}/></>);
  const listFilm =()=>(<><ListFilm data={data} /></>);

  console.log(data)
  return (

   <Tab.Navigator>
      <Tab.Screen 
        name="Accueil - Liste des films"
        options={{
          headerShown: false,
          tabBarLabel: "Liste des films",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="filmstrip-box-multiple" color={'#D2691E'} size={size} />
          ),
        }}
        component={listFilm}
      />

      
      <Tab.Screen 
      name="Ajouter ou rechercher dans la liste"
      options={{
        headerShown: false,
        tabBarLabel: "Ajouter/Rechercher",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="playlist-edit" color={'#D2691E'} size={size} />
        ),
      }}component={addfilm} />

      
      <Tab.Screen 
      name="Recherches dans IMDB - films"
      options={{
        headerShown: false,
        tabBarLabel: "Films IMDB" ,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="video-vintage" color={'#D2691E'} size={size} />
        ),
      }}component={imdb} />

      <Tab.Screen 
      name="Parametres"
      options={{
        headerShown: false,
        tabBarLabel: "Parametrages",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={'#D2691E'} size={size} />
        ),
      }}component={settings} />

    </Tab.Navigator>
  );

};




export default Main;