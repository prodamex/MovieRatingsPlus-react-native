import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ListFilm from "./view/ListFilm";
import AddFilm from "./view/addFilm";



const Tab = createBottomTabNavigator();

const Main = () => {
  const [data, setData] = useState([{
    id: 1,
    titre: "Harry potter",
    description: "Harry, Ron and Hermione return to Hogwarts for a third adventure.",
    note: 8
    
  
  },{
    id: 2,
    titre: "It's Wonderful Life",
    description: "George Bailey has spent his entire life giving of himself to the people of Bedford Falls.",
    note: 5
  
  },{
    id: 3,
    titre: "Casino Royale",
    description: "James Bond goes on his first ever mission as a 00.",
    note: 5
  
  },{
  id: 4,
  titre: "Parker",
  description: "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead.",
  note: 7
  
  }]);
  
  const addfilm=()=>(<><AddFilm data={data} setData={setData}/></>);
  const listFilm =()=>(<><ListFilm data={data} /></>);
  console.log(data)
  return (
   <Tab.Navigator>
      <Tab.Screen
        name="Accueil - Liste des films"
        options={{
          tabBarLabel: "Liste des films",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="filmstrip-box-multiple" color={'#D2691E'} size={size} />
          ),
        }}
        component={listFilm}
      />
      <Tab.Screen name="Ajouter un film" 
      options={{
        tabBarLabel: "Ajouter un film",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={'#D2691E'} size={size} />
        ),
      }}component={addfilm} />
    </Tab.Navigator>
  );
};




export default Main;