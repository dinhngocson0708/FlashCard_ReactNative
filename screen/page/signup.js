import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import ButtonBasics from '../components/button';
import ButtonSignup from '../components/buttonSignupp';
export default function Signup() {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground source={require('../../assets/sign-up.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Sign up to Shh!</Text>
                <ButtonSignup />
                <View style={styles.combo}>
                    <View style={styles.line} />
                    <Text style={styles.text2}>Or log in with Email</Text>
                    <View style={styles.line} />
                </View>
                {/* <Text style={styles.title}>Already have an account? <Text style={styles.login}>Login</Text></Text> */}
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter your name"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter username"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />

                    <CheckBox
                        style={styles.CheckBox}
                        title="I agree with the Terms of Service and Privacy policy"
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                    />

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 90,
        marginLeft: 10,
    },
    tilteText: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 20,
        marginLeft: 20,
    },

    title: {
        marginLeft: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    login: {
        color: 'black'
    }
    ,
    input: {
        margin: 10,
        padding: 10,
        height: 40,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
    },
    text2: {

    },
    combo: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "center",

    },
    line: {
        margin: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: 1,
        width: 100,
    },
    CheckBox:{
        color:'white'
    }
});