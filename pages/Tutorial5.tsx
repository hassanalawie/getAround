import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageStyle} from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial5'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: any
};


export default function Tutorial5({route,navigation}:Props) {
  const { buildings } = route.params;
  let [fontsLoaded] = useFonts({
    'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
  })
  if(!fontsLoaded){
    return <Text>Loading...</Text>
  }
  return (
    <View style={styles.container}>
    <Image
    style={styles.image}
    source={
      require("../assets/imagetut4.png")}
      />

        <Text style = {styles.text}>
          {"\n"}
            You're all set!{"\n"}{"\n"}{"\n"}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SelectBuilding',{buildings})}>  
            <Text style = {styles.button1}>
               Let's Go {"->"}
            </Text>
         </TouchableOpacity>


      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90ACEE',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
    text: {
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'normal',
      letterSpacing: 0.25,
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Montserrat',
    },
    button1: {
      fontSize: 32,
      paddingVertical: 10,
      paddingHorizontal: 70,
      backgroundColor: '#1852B5',
      color: 'white',
      margin:10,
      textAlign: 'center',
      fontFamily: 'Montserrat',
     },
     image: {
      width: 250,
      height: 250,
      top: 0,
      right: -10,
      position: 'absolute',
      transform: [{ rotate: '185deg' }],
      
     }
});
  