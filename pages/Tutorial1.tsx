import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial1'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Tutorial1({navigation}:Props) {
    return (
      <View style={styles.container}>
        <Image style={{position: 'absolute', top: 0, right: 0, height: 300, width: 400}} 
            source={require('../assets/blobimage1.png')} 
            />  
        <Image style={{marginTop: 100, height: 350, width: 350}} 
            source={require('../assets/tutorialimage1.png')} 
            /> 
        <View style={styles.textContainer}> 
          <Text style={styles.h1}>Having Trouble Getting to Class?{'\n'}</Text>
          <Text style={styles.p}>Get Around can help you find an accessible route to your next class and provide the fastest route so you can get to class on time.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tutorial2')}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
}

const PAGINATION: ViewStyle = {
  width: 20,
  flexDirection: 'row',
  justifyContent: 'center',
}

const PAGINATION_DOT: ViewStyle = {
  borderRadius: 12,
  width: 12,
  height: 12,
  margin: 15,
  backgroundColor: 'white'
}

const PAGINATION_DOT_SELECTED: ViewStyle ={
  backgroundColor: '#1852B5'
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
    },
    p:{
      fontSize: 20,
      textAlign: 'center',
      
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
      textAlign:"center",
      fontSize:28,
      color:'white',

    }
});


  