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

async function getBuildingsFromApi() {
  try {
    let response = await fetch(
      'http://localhost:3000/Buildings/',
    );
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


export default function Tutorial3({navigation}:Props) {

    const [buildings, setBuildings] = useState<Array<string>>([]);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
    const departments:Array<{title:string,data:Array<dataType>}> = [
          { 
            title: 'Engineering', 
            data:[
              {
                key:"E7",
                value:false,
              },
              {
                key:"E6",
                value:false,
              },
              {
                key:"E5",
                value:false,
              },
              {
                key:"E4",
                value:false,
              },
              {
                key:"E3",
                value:false,
              },
              {
                key:"E2",
                value:false,
              },
              {
                key:"E1",
                value:false,
              }
            ]
          },
          { 
            title: 'Arts',
            data:[
              {
                key:"E7",
                value:false,
              },
              {
                key:"E6",
                value:false,
              },
              {
                key:"E5",
                value:false,
              },
              {
                key:"E4",
                value:false,
              },
              {
                key:"E3",
                value:false,
              },
              {
                key:"E2",
                value:false,
              },
              {
                key:"E1",
                value:false,
              }
            ]
          },
          { 
           title: 'Mathematics',
           data:[
            {
              key:"E7",
              value:false,
            },
            {
              key:"E6",
              value:false,
            },
            {
              key:"E5",
              value:false,
            },
            {
              key:"E4",
              value:false,
            },
            {
              key:"E3",
              value:false,
            },
            {
              key:"E2",
              value:false,
            },
            {
              key:"E1",
              value:false,
            }
          ]
          },
          { 
            title: 'Environment',
            data:[
              {
                key:"E7",
                value:false,
              },
              {
                key:"E6",
                value:false,
              },
              {
                key:"E5",
                value:false,
              },
              {
                key:"E4",
                value:false,
              },
              {
                key:"E3",
                value:false,
              },
              {
                key:"E2",
                value:false,
              },
              {
                key:"E1",
                value:false,
              }
            ]
          },
          { 
            title: 'Health',
            data:[
              {
                key:"E7",
                value:false,
              },
              {
                key:"E6",
                value:false,
              },
              {
                key:"E5",
                value:false,
              },
              {
                key:"E4",
                value:false,
              },
              {
                key:"E3",
                value:false,
              },
              {
                key:"E2",
                value:false,
              },
              {
                key:"E1",
                value:false,
              }
            ]
          },
          { 
            title: 'Science',
            data:[
              {
                key:"E7",
                value:false,
              },
              {
                key:"E6",
                value:false,
              },
              {
                key:"E5",
                value:false,
              },
              {
                key:"E4",
                value:false,
              },
              {
                key:"E3",
                value:false,
              },
              {
                key:"E2",
                value:false,
              },
              {
                key:"E1",
                value:false,
              }
            ]
          },
        ];
    let [fontsLoaded] = useFonts({
        'Montserrat':require('../assets/fonts/Montserrat-Regular.ttf'),
    })
    if(!fontsLoaded){
        return <Text>Loading...</Text>
    }

    const renderAccordians=()=> {
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

    return (
    <View style={styles.container}>
          <Image style={{position: 'absolute', bottom: 0, left: 5, height: 300, width: 400}} 
            source={require('../assets/tutorial3Blob.png')} 
            />
        <Text style={styles.titleText}>Where are your classes?</Text>
            <ScrollView style={styles.scroll}>
                {renderAccordians()}
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
  