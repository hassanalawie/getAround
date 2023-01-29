import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Image, LogBox, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Accordian from '../components/Accordion';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial3'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type dataType = {
  key:string;
  value:boolean;
}

type departmentType = {
  title:string;
  data:Array<dataType>;
}

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


export default function Tutorial3({navigation}:Props) {

    const [buildings, setBuildings] = useState<Array<string>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [allBuildings, setAllBuildings] = useState<Array<buildingType>>([]);
    const [engBuildings, setEngBuildings] = useState<Array<dataType>>([])
    const [artsBuildings, setArtsBuildings] = useState<Array<dataType>>([])
    const [envBuildings, setEnvBuildings] = useState<Array<dataType>>([])
    const [scienceBuildings, setScienceBuildings] = useState<Array<dataType>>([])
    const [healthBuildings, setHealthBuildings] = useState<Array<dataType>>([])
    const [mathBuildings, setMathBuildings] = useState<Array<dataType>>([])


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
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      getBuildings();
    }, [])
    const handleCallback = (childData:string) =>{
      buildings.includes(childData)?
      (setBuildings(
        buildings.filter((b)=>{
          return b !== childData
        }
        )
        )):(
          setBuildings( 
            [
              ...buildings, // that contains all the old items
              childData // and one new item at the end
            ]
            )
            
            )
          }
        let [fontsLoaded] = useFonts({
          'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
    })

    const renderAccordians=(departments:Array<departmentType>)=> {
      const items: JSX.Element[] = [];
      departments.map((department)=>{
        items.push(
          <Accordian 
          title = {department.title}
          data = {department.data}
          fontsLoaded = {fontsLoaded}
          parentCallback = {handleCallback}
          />
          );
        })
        return items;
      }
      
      if(!fontsLoaded || allBuildings.length === 0){
          return <Text>Loading...</Text>
      }
        return (
          <View style={styles.container}>
                <Image style={{position: 'absolute', bottom: 0, left: 5, height: 300, width: 400}} 
                  source={require('../assets/tutorial3Blob.png')} 
                  />
              <Text style={styles.titleText}>Where are your classes?</Text>
                  <ScrollView style={styles.scroll}>
                      {renderAccordians(
                        [
                          {
                            title:"Engineering",
                            data:allBuildings.filter((b)=>{
                              return b.category === "engineering"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                          {
                            title:"Environment",
                            data:allBuildings.filter((b)=>{
                              return b.category === "environment"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                          {
                            title:"Arts",
                            data:allBuildings.filter((b)=>{
                              return b.category === "arts"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                          {
                            title:"Health",
                            data:allBuildings.filter((b)=>{
                              return b.category === "health"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                          {
                            title:"Science",
                            data:allBuildings.filter((b)=>{
                              return b.category === "science"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                          {
                            title:"Math",
                            data:allBuildings.filter((b)=>{
                              return b.category === "math"
                            }).map((b)=>{
                              return ({
                                key: b.name,
                                value: false,
                              })
                            })
                          },
                
                        ]
                      )}
                  </ScrollView>
              <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Tutorial4')
                console.log(buildings);
                }}>
                  <Text style={styles.buttonText}>Next</Text>
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
    titleText: {
        fontSize: 32,
        fontFamily: 'Montserrat',
        textAlign:'center',
        margin:10,
        marginBottom:60,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#1852B5',
        padding: 10,
        width:185,
        height:60,
        marginTop: 150
      },
      buttonText: {
        textAlign:"center",
        fontSize:28,
        color:'white',
        fontFamily: 'Montserrat',
      },
      scroll:{
        maxHeight:"40%",
        width:'80%',

      },
});
  