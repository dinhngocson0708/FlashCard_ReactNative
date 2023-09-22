import React, { Component } from 'react';  
import { TouchableOpacity,StyleSheet, View,Text,} from 'react-native';  
  
export default function  ButtonBasics() {  
        return (  
            <View style={styles.container}> 
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>  
        );  
    }  

  
const styles = StyleSheet.create({  
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 18,
        margin: 25,
        marginTop: 260,
        alignItems: 'center',
    },
    buttonText: {
        margin: 0,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',  
    },
})  