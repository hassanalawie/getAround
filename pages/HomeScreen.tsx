import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomeScreen({navigation}:Props) {
  let [fontsLoaded] = useFonts({
    'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
})
if(!fontsLoaded){
  return <Text>Loading...</Text>
}
    return (
      <View style={styles.container}>
        <Image style={{justifyContent: 'center', position: 'absolute', top: 50, height: 80.19, width: 200}} 
            source={require('../assets/waterloologo.png')} 
            />  
        <Image style={{justifyContent: 'center', marginTop: 150, left: 0, height: 400, width: 600}} 
            source={require('../assets/samplephoto.png')} 
            /> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tutorial1')}>
            <View style={styles.homepageButton}>
              <Text style={styles.buttonText}>Get Started </Text>
              <Image style={{height: 15, width: 15, marginTop:13}} 
              source={require('../assets/arrow.png')} 
              /> 
            </View>
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
  },
  textContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxHeight: '30%',
  },
  h1:{
    fontSize: 32,
    textAlign: 'center',
    width:'80%',
    fontFamily: 'Montserrat',
  },
  p:{
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#1852B5',
    padding: 10,
    width:185,
    height:60,
    marginBottom: 200,
    marginTop: 50,
  },
  buttonText:{
    fontSize:20,
    color:'white',
    marginTop: 8,
    fontFamily: 'Montserrat',

  },
  homepageButton:{
    flexDirection:'row'
  }
});
  