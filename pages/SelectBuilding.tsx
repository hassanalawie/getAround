import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { SearchBar } from 'react-native-elements';
import { useFonts } from 'expo-font';


type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectBuilding'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any
};

export default function SelectBuilding({route,navigation}:Props) {
  const { buildings } = route.params;
  let [fontsLoaded] = useFonts({
    'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
})
if(!fontsLoaded){
  return <Text>Loading...</Text>
}
    return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Where are you off to?</Text>
      <ScrollView style={{width:"100%"}}>
        {buildings.map((building:any)=>{
          return(
            <TouchableOpacity style = {styles.box} onPress={() => navigation.navigate('NavigationPage', {building})}>
              <Text style={styles.text}>

                {building}
              </Text>
            </TouchableOpacity>
          )
        })}

      </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#90ACEE',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft:40,
      paddingRight:40,
    },
    box:{
      width:"100%",
      height:70,
      backgroundColor:"#B6C8F5",
      marginBottom: 40,
      borderColor:"black",
      borderWidth:1,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      padding:10
    },
    text:{
      fontFamily: 'Montserrat',
      fontSize:20,
      textAlign:"center"
    },
    heading:{
      fontFamily: 'Montserrat',
      fontSize:32,
      marginTop:100,
      marginBottom:50,
      textAlign:"center"

    }
});
  