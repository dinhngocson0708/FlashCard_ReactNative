import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

export default function ButtonSignup() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}><Image source={require('../../assets/iconGG.png')} style={styles.icon} /> Sign up with Google</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
}) 