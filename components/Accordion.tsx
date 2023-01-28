import { useFonts } from 'expo-font';
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type dataType = {
    key:string;
    value:boolean;
}

type Props = {
    title:string;
    data:Array<dataType>;
    fontsLoaded:boolean;
    parentCallback: (childData: string) => void
}

export default class Accordian extends Component<{title:string, data:Array<dataType>,fontsLoaded:boolean, parentCallback: (childData: string) => void } , { expanded: boolean, data:Array<dataType> }> {
    constructor(props:Props) {
        super(props);
        this.state = { 
            data: props.data,
            expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    onTrigger = (childData:string) => {
        this.props.parentCallback(childData);
    }
  
  render() {
    if(!this.props.fontsLoaded){
        return <Text>Loading...</Text>
    }
    return (
       <View style={{width:"100%"}}>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <View style={{width:"100%",alignItems:"center", justifyContent:"center",flexDirection:"row"}}>
                    <Icon style={{position:"absolute",left:30}} name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color="white" />
                    <Text style={[styles.title]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}}>
                    <FlatList
                    data={this.state.data}
                    numColumns={1}
                    scrollEnabled={false}
                    renderItem={({item, index}) => 
                        <View>
                            <TouchableOpacity style={[ item.value?styles.activeChildRow: styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}>
                                <View style={{width:"100%",alignItems:"center", justifyContent:"center",flexDirection:"row"}}>
                                    <Icon style={{position:"absolute", left:30}} name={item.value?'check-box':'check-box-outline-blank'} size={24} color={ item.value ? "black" :  "black" } />
                                    <Text style={ item.value?styles.textActive:styles.textInActive} >{item.key}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.childHr}/>
                        </View>
                    }/>
                </View>
            }
            
       </View>
    )
  }

  onClick=(index: number)=>{
    const temp:Array<dataType> = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
    console.log(this.state.data[index].key);
    this.onTrigger(this.state.data[index].key)
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        fontSize: 12,
    },
    title:{
        fontSize: 20,
        fontFamily: 'Montserrat',
        color: "#FFFFFF",
    },
    itemActive:{
        fontSize: 12,
        color: "green"
    },
    itemInActive:{
        fontSize: 12,
        color: "dodgerblue"
    },
    btnActive:{
        borderColor: "black",
    },
    btnInActive:{
        borderColor: "black",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        alignItems:'center',
        backgroundColor:  "#2775E1",
        width:"100%",
    },
    childRow:{
        flexDirection: 'row',
        backgroundColor:"#B6C8F5",
        paddingLeft:0,
        paddingRight:0,
        },
    activeChildRow:{
        flexDirection: 'row',
        backgroundColor:"#2064CB"
        },
    parentHr:{
        height:1,
        color: "#FFFFFF",
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: "#DDDDDD",
        width:'100%',
    },
    colorActive:{
        borderColor: "blue",
    },
    colorInActive:{
        borderColor: "#BBBBBB",
    },
    textActive:{
        color:"white",
        fontFamily: 'Montserrat',
        fontSize:20,
    },
    textInActive:{color:"black",fontFamily: 'Montserrat',fontSize:20,}
    
});