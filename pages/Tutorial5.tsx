import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageStyle} from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import Pagination from '../components/Pagination';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial5'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};


export default function Tutorial5({navigation}:Props) {
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

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelectBuilding')}>
            <View style={styles.homepageButton}>
              <Text style={styles.buttonText}>Let's go </Text>
              <Image style={{height: 15, width: 15, marginTop:13}} 
              source={require('../assets/arrow.png')} 
              /> 
            </View>
        </TouchableOpacity>
        <Pagination
        order={5}
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
    textAlign: 'center'
  },
    text: {
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      textAlign: 'center',
      marginTop: 300
    },
    button1: {
      fontSize: 32,
      paddingVertical: 10,
      paddingHorizontal: 70,
      backgroundColor: '#1852B5',
      color: 'white',
      margin:10,
      textAlign: 'center'
     },
     image: {
      width: 250,
      height: 250,
      top: 0,
      right: -10,
      position: 'absolute',
      transform: [{ rotate: '185deg' }],
      
     },
     button:{
      alignItems: 'center',
      backgroundColor: '#1852B5',
      padding: 10,
      width:185,
      height:60,
      marginBottom: 200,
      marginTop: 20,
    },
    buttonText:{
      fontSize:20,
      color:'white',
      marginTop: 8
  
    },
    homepageButton:{
      flexDirection:'row'
    }
});
  