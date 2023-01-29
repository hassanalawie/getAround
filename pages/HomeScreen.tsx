import { StackNavigationProp } from '@react-navigation/stack';
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
    fontSize:20,
    color:'white',
    marginTop: 8

  },
  homepageButton:{
    flexDirection:'row'
  }
});


// { name: "Mathematics & Computer Building", latitude:"43.47255946052637", longitude:"-80.54381424583426", category:"math", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true},
// { name: "Mathematics 3 ", latitude:"43.47296850462841", longitude:"-80.54404379326743", category:"math", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:false, washrooms:true},
// { name: "W.G. Davis Computer Research Centre ", latitude:"43.47286298325763", longitude:"-80.54191874580721", category:"math", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true},
// { name: "Health Services", latitude:"43.47317373922823", longitude:"-80.54599510943241", category:"health", accessibleEntrance:true, elevators:true,foodAndDrink:false, parking:true, washrooms:true},
// { name: "Lyle S. Hallman Institute for Health ", latitude:"43.47329179711815", longitude:"-80.54612147374965", category:"health", accessibleEntrance:true, elevators:true,foodAndDrink:false, parking:true, washrooms:true},
// { name: "B.C. Matthews Hall", latitude:"43.47392562850217", longitude:"-80.54490449653522", category:"health", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true},
// { name: "AHS Expansion Building", latitude:"43.47365549159795", longitude:"-80.54604341603928", category:"health", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true}},
// { name: "Earth Sciences & Chemistry", latitude:"43.471504833499", longitude:"-80.54302327270094", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:false, parking:false, washrooms:true}},
// { name: "Science Teaching Complex", latitude:"43.470574686881925", longitude:"-80.54410751168702", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true}},
// { name: "Biology 1", latitude:"43.47092972308486", longitude:"-80.54286938420694", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:false, washrooms:true}},
// { name: "Biology 2", latitude:"43.47072670381078", longitude:"-80.54419461424308", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:false, parking:false, washrooms:true}},
// { name: "Psychology, Anthropology, Sociology", latitude:"43.46729284735623", longitude:"-80.54260984552654", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:true, washrooms:true}},
// { name: "Optometry", latitude:"43.47585259048499", longitude:"-80.5451402315051", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:false, washrooms:true}},
// { name: "Physics", latitude:"43.47005440777166", longitude:"-80.54074396356282", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:false, washrooms:true}},
// { name: "Quantum Nano Centre", latitude:"43.47153129570774", longitude:"-80.54381383861657", category:"science", accessibleEntrance:true, elevators:true,foodAndDrink:true, parking:false, washrooms:true}},

// 43.47255946052637, -80.54381424583426
// 43.47296850462841, -80.54404379326743
// 43.47286298325763, -80.54191874580721
// 43.470463197685845, -80.54599510943241
// 43.47329179711815, -80.54612147374965
// 43.47392562850217, -80.54490449653522
// 43.47365549159795, -80.54604341603928


// Start from Earth sciences
// 43.471504833499, -80.54302327270094
// 43.470574686881925, -80.54410751168702
// 43.47092972308486, -80.54286938420694
// 43.47072670381078, -80.54419461424308
// 43.46729284735623, -80.54260984552654
// 43.47585259048499, -80.5451402315051
// 43.47005440777166, -80.54074396356282
// 43.47153129570774, -80.54381383861657

