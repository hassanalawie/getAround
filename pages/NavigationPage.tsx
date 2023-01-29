import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { Header } from 'react-native-elements';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NavigationPage'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function NavigationPage({navigation}:Props) {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={
            <TouchableOpacity style={{marginTop: -7}} onPress={() => navigation.navigate('SelectBuilding')}>
                <Image style={{height: 15, width: 15, marginTop:13, transform: [{ rotate: '180deg'}]}} 
              source={require('../assets/arrow.png')} 
                /> 
            </TouchableOpacity>
          }
          centerComponent={{text: 'Back to Buildings',  style: { color: '#fff', fontSize: 22 } }}
          containerStyle={{
            backgroundColor: '#2064CB',
            marginTop: 50
          }}
          />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Navigate</Text>
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
  headerContainer:{
    backgroundColor: '#2064CB'
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
    marginTop: 600,
    marginBottom:200

  },
  buttonText:{
    textAlign:"center",
    fontSize:28,
    color:'white',
  }
});
  