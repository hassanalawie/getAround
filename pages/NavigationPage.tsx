import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image, Modal, Pressable, Alert, Linking } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';
import { Header } from 'react-native-elements';



type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NavigationPage'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route:any
};

type buildingType = {
  _id:string;
  name:string;
  latitude:string;
  longitude:string;
  category:string;
  elevators:boolean;
  accessibleEntrance:boolean;
  foodAndDrink:boolean;
  parking:boolean;
  washrooms:boolean;
}


export default function NavigationPage({route,navigation}:Props) {
  const [allBuildings, setAllBuildings] = useState<Array<buildingType>>([]);
  const [latitude, setLatitude] = useState<number>();
  const [longtitude, setLongtitude] = useState<number>();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const getBuildings = async () => {
    try {
      const response = await fetch('http://192.168.0.20:3000/Buildings/');
      const json = await response.json();
      setAllBuildings(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBuildings();
  }, [])

  const {building} = route.params;
  let [fontsLoaded] = useFonts({
    'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
  })
  if(!fontsLoaded || loading){
    return <Text>Loading...</Text>
  }
    return (
    <View style={styles.container}>
      <Header
          placement="center"
          centerComponent={{text: building,  style: { fontFamily:"Montserrat", fontSize: 22, color:"white" } }}
          containerStyle={{
            backgroundColor: '#2064CB',
            marginTop: 50,
            position:"absolute",
            top:0,
            marginBottom: 50
          }}
          />
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              {
              allBuildings.find((b)=>{
                return b.name === building
              })?.foodAndDrink?(
                <Text>Food and Drink Available</Text>
              ):(<Text>No Food and Drink Available</Text>)
              }
              {
              allBuildings.find((b)=>{
                return b.name === building
              })?.parking?(
                <Text>Parking Available</Text>
              ):(<Text>No Parking Available</Text>)
              }
              {
              allBuildings.find((b)=>{
                return b.name === building
              })?.accessibleEntrance?(
                <Text>Accessible Entrance</Text>
              ):(<Text>No Accessible Entrance</Text>)
              }
              {
              allBuildings.find((b)=>{
                return b.name === building
              })?.elevators?(
                <Text>Accessible Washrooms</Text>
              ):(<Text>No Accessible Washrooms</Text>)
              }

            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Accessibility Information</Text>
      </Pressable>
        <Image style={{height: 348, width: 350, marginTop:30}} 
            source={require('../assets/map.png')} 
            />  

        <TouchableOpacity style={styles.button2} onPress={() => {
          Linking.openURL('https://goo.gl/maps/fu4RuAWcsVvnhDXd6')
                }}>
                  <Text style={styles.buttonText}>Navigate</Text>
              </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#90ACEE",
    },
      centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
    header: {
      position:"absolute",
      top:0,
      width:"100%",
      height:100,
      backgroundColor:"#2064CB",
      alignItems:"baseline",
      flexDirection:"row",
      paddingTop:50,
      paddingLeft:30,
      paddingRight:30
    },
    text: {
      fontFamily: 'Montserrat',
      fontSize:22,
      color:"white",
      width:"80%"
    },
    button2: {
      alignItems: 'center',
      backgroundColor: '#1852B5',
      padding: 10,
      width:185,
      height:60,
      marginTop: 100
    },
    buttonText: {
      textAlign:"center",
      fontSize:28,
      color:'white',
      fontFamily: 'Montserrat',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      marginTop:150,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
      button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
  