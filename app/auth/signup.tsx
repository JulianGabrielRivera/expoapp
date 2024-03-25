import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Stack,useNavigation } from 'expo-router';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false); // State to track signup process
    const navigation = useNavigation("");

    async function signUpWithEmail() {
        
        // Check if already signing up, if true, return
        if (isSigningUp) return;

        try {
            setIsSigningUp(true); // Set signing up state to true
            const { error } = await supabase.auth.signUp({
                email,
                password
            });
            
            if (error) {
                Alert.alert("Error", error.message);
            } else {
                Alert.alert("Success", "Account created successfully!");
                // Navigate to the next screen or perform necessary actions upon successful signup
            }
        } catch (err) {
            console.log(err);
            Alert.alert("Error", "An unexpected error occurred. Please try again later.");
        } finally {
            setIsSigningUp(false); // Reset signing up state to false after signup attempt
        }
    }
    

    return (
        <>
            <Stack.Screen options={{ title: "Sign up", headerBackTitle: "home", headerShown: true ,headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Back"
                        />
                    )}} />
            <View style={styles.container}>
                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="jon@gmail.com"
                />
                <Text>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder=""
                    secureTextEntry
                />
                <Button title="Create Account" onPress={signUpWithEmail} />
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
