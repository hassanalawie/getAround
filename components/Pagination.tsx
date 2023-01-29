import { Image, LogBox, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type Props={
    order:number
}
export default function Pagination(props: Props){
    return (
    <View style={{flexDirection:'row', width: 100, justifyContent: 'space-between'}}>

        <View style={props.order >= 1 ? (styles.active):styles.inactive}>
            
        </View>
        <View style={props.order >= 2 ? (styles.active):styles.inactive}>
            
        </View>
        <View style={props.order >= 3 ? (styles.active):styles.inactive}>
            
        </View>
        <View style={props.order >= 4 ? (styles.active):styles.inactive}>
            
        </View>
        <View style={props.order >= 5 ? (styles.active):styles.inactive}>
            
        </View>

    </View>
    
    )}

    const styles = StyleSheet.create({
        active: {
            width: 5, 
            height: 5, 
            borderRadius: 100,
            backgroundColor: '#1852B5'
        },
        inactive: {
            width: 5, 
            height: 5, 
            backgroundColor: 'white', 
            borderRadius: 100
        },
      });