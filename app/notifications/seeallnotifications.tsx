import { supabase } from '../../lib/supabase';
import { StyleSheet, Text, View, Modal, Button, TextInput } from "react-native";
import { Stack } from 'expo-router';
import { SupabaseClient} from '@supabase/supabase-js';
import { useEffect,useState } from 'react';



export default function YourComponent() {
    const [notifications, setNotifications] = useState(null);

// Function to fetch notifications from the 'notifications' table
const fetchNotifications = async () => {

    console.log('Supabase client initialized:', supabase);

    try {
        const { data , error }= await (supabase as SupabaseClient)
            .from('notifications')
            .select(); // Select all columns
            console.log(data);
            setNotifications(data);
        if (error) {
            console.error('Error fetching notifications:', error.message);
        } else {
            console.log('Notifications:', data);
            // Process fetched notifications here
        }
    } catch (error) {
        console.error('Error fetching notifications:', error);
    }
}
    useEffect(() => {
    fetchNotifications();
    }, []); // Run once on component mount
    console.log(notifications, "here");

    return (
        <>
            <Stack.Screen options={{ title: "My Notifications", headerBackTitle: "home", headerShown: true }}/>

            <View>
            {notifications?.map((notification:any, index) => (
        <View key={index}>
                        <Text>{notification.is_completed ? 'Completed' : 'Incomplete'}</Text>

            <Text>is_completed: {notification.is_completed}</Text>
            <Text>reminder: {notification.reminder}</Text>
            <Text>created_at: {notification.created_at}</Text>
        </View>
    ))}
            </View>
        </>
    );
}



