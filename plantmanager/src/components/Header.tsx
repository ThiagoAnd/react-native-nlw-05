import React,{useEffect,useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
    
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../assets/fotoThiago.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    const [userName,setUserName] = useState<string>();

    useEffect(() => {
        async function loadStoragedUserName(){
           const user = await AsyncStorage.getItem('@plantmanager:user');
           setUserName(user || "");
        }

        loadStoragedUserName();

    },[])

    return (
        <View style={styles.container}>
           <View>
               <Text style={styles.greetings}>Ola,</Text>
               <Text style={styles.userName}>{userName}</Text>
           </View>
           <Image style={styles.image} source={userImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 30
    },
    greetings:{
        fontSize:32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName:{
        fontSize:32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40  
    },
    image:{
        width:70,
        height:70,
        borderRadius:40
    }
})