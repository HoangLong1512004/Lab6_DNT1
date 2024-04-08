import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home3 = ({ navigation }) => {
    return (
        <View style={{backgroundColor:'green',height:'100%',width:500,flex:1}}>
            <Image source={{ uri: 'https://i.pinimg.com/564x/ea/c9/9a/eac99a33113faa944900fe4ea086d52b.jpg' }} style={{ height: 100, width: 100 }} />
            <Text style={{ height: 200, borderRadius: 20, alignContent: 'center', fontSize: 20, width: 200 }}>Con cừu</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Mh1")}}>
                <Text style={{ alignContent: 'center', fontSize: 20, width: 100, height:50, borderRadius: 20, backgroundColor: 'blue',alignItems:'center' }}>back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home3

const styles = StyleSheet.create({})