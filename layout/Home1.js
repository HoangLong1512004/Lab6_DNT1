import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home1 = ({navigation}) => {
  return (
    <View style={{backgroundColor:'green',height:'100%',width:500,flex:1}}>
        <View >
        <Image source={{uri:'https://i.pinimg.com/564x/a3/53/47/a3534743622b53a53de83acea383546c.jpg'}} style={{height:100,width:100,borderRadius:50,alignContent:'center',shadowRadius:90,shadowColor:'red'}}/>
            <Text style={{height:200,borderRadius:20,alignContent:'center',fontSize:20,width:200,alignContent:'center'}}>Ảnh chó Bull Pháp</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Mh2")}}>
            <Text style={{alignContent:'center',fontSize:20,width:100,height:50,borderRadius:20,backgroundColor:'blue',alignContent:'center',alignItems:'center'}}>Chuyển</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({})