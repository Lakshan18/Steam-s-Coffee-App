import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Loading() {

    const navigation = useNavigation();
    const [loadingText, setLoadingText] = useState("Initializing...");
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateProgress = () => {
            Animated.timing(progress, {
                toValue: 0.42,
                duration: 2000,
                useNativeDriver: false,
            }).start(() => {
                setLoadingText("Preparing...");
                setTimeout(() => {
                    Animated.timing(progress, {
                        toValue: 0.85,
                        duration: 3000,
                        useNativeDriver: false,
                    }).start(() => {
                        setLoadingText("Almost There...");
                        setTimeout(() => {
                            Animated.timing(progress, {
                                toValue: 1,
                                duration: 1000,
                                useNativeDriver: false,
                            }).start(() => {
                                setLoadingText("Get Ready...");
                                setTimeout(() => {
                                    navigation.navigate("WelcomeTo");
                                }, 1000);
                            });
                        }, 3000);
                    });
                }, 2000);
            });
        };

        animateProgress();
    }, [progress, navigation]);

    const progressInterpolation = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    const textYPosition = progress.interpolate({
        inputRange: [0, 0.42, 0.85, 1],
        outputRange: [0, -5, 5, -5],
    });

    return (
        <>
            <SafeAreaView style={{ flexGrow: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#2A2A2A', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', flex: 1, width: '100%', paddingHorizontal: 15 }}>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <View style={{ width: 150, height: 200 }}>
                                <Image source={require('./assets/images/Coffee_Shop_Logo.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </View>
                            <Text style={{ fontSize: 36, fontFamily: 'Delius', color: '#FFC400', fontWeight: '500', textAlign: 'center', marginTop: 14 }}>Steam's Cafe</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: '12%', alignItems: 'center' }}>
                            <Animated.Text style={[styles.loadingText, { transform: [{ translateY: textYPosition }] }]}>
                                {loadingText}
                            </Animated.Text>
                            <View style={styles.progressBarContainer}>
                                <Animated.View
                                    style={[styles.progressBar, { width: progressInterpolation }]}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    progressBarContainer: {
        width: '90%',
        height: 2.5,
        backgroundColor: '#5B5A58',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#A9921D',
    },
    loadingText: {
        fontSize: 18,
        marginBottom: 20,
        color: "#C5C68A",
    },
});
