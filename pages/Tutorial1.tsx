import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ViewStyle } from 'react-native';
import Pagination from '../components/Pagination';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial1'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Tutorial1({navigation}:Props) {
      let [fontsLoaded] = useFonts({
        'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
    })
    if(!fontsLoaded){
      return <Text>Loading...</Text>
    }
    return (
      <View style={styles.container}>
        <Image style={{position: 'absolute', top: 0, right: 0, height: 300, width: 400}} 
            source={require('../assets/blobimage1.png')} 
            />  
        <Image style={{marginTop: -50, height: 350, width: 350}} 
            source={require('../assets/tutorialimage1.png')} 
            /> 
        <View style={styles.textContainer}> 
          <Text style={styles.h1}>Having Trouble Getting to Class?{'\n'}</Text>
          <Text style={styles.p}>GetAround can help you find an accessible route to your next class and provide the fastest route so you can get to class on time.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tutorial2')}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Pagination
        order={1}
        />
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
      marginBottom: 50,
      marginTop: 100,

    },
    buttonText:{
      textAlign:"center",
      fontSize:28,
      color:'white',
      fontFamily: 'Montserrat',

    }
});


  