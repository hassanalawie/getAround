import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial4'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};



export default function Tutorial4({navigation}:Props) {
    return (
      <View style={styles.container}>
      <Image
      style={styles.image}
      source={
        require("../assets/bell.png")
      }
      />
      <Image
      style={styles.image2}
      source={
        require("../assets/imagetut4.png")
      }
      />

          <Text style = {styles.text}>
          {"\n"}
            Do you wish to {"\n"}
            enable push {"\n"}
            notifications?{"\n"}
          </Text>
        

        <TouchableOpacity onPress={() => navigation.navigate('Tutorial5')}>  
            <Text style = {styles.button1}>
               Enable
            </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Tutorial5')}>  
            <Text style = {styles.button2}>
               Skip
            </Text>
         </TouchableOpacity>

         <Text style = {styles.text2}>
         {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
            You can always manage {"\n"}
            your push notifications in {"\n"}
            Settings.
          </Text>

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
    image: {
      width: 180,
      height: 220
    },
    image2: {
      width: 240,
      height: 240,
      marginTop: 0,
      bottom: 0,
      left: 0,
      position: 'absolute'
    },

    button1: {
    fontSize: 32,
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: '#1852B5',
    color: 'white',
    margin:10
   },

   button2: {
    fontSize: 32,
    paddingVertical: 10,
    paddingHorizontal: 90,
    backgroundColor: '#425575',
    color: 'white',
    margin:14
   },

   text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center'
  },
  text2: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'grey',
    textAlign: 'center'
  }

});