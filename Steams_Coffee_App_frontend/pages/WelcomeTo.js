import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function({navigation}) {
    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/ice_cofee_cup.jpg')} 
                        style={styles.image}
                    />
                    <View style={styles.imageCurve}></View>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Welcome to Coffee Shop</Text>
                    <Text style={styles.subtitle}>
                        Get wide range of specialty coffee, tea, and beverages.
                    </Text>
                    <TouchableOpacity style={styles.button}
                      onPress={
                        () => {
                            navigation.navigate('Login');
                        }
                      }
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5ebe0",
    },
    imageContainer: {
        position: "relative",
        height: "70%",
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    contentContainer: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: "#f5ebe0",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        alignItems: "center",
        marginTop: -40,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#5a3e36",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#8e6e64",
        textAlign: "center",
        marginBottom: 20,
        marginTop:10,
    },
    button: {
        backgroundColor: "#5a3e36",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});