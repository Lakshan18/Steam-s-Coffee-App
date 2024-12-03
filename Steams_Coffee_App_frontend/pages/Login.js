import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <ImageBackground style={{ flexGrow: 1, zIndex: -1 }}
                source={require('../assets/images/coffee_log_bg.jpg')}
            >
                <View style={{ flex: 1, zIndex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, }}>
                    <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(103, 95, 73, 0.6)', borderRadius: 10, paddingVertical: 10, }}>
                        
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
