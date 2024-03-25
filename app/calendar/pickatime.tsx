import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button, TextInput } from "react-native";
import { usePushNotifications } from "../../usePushNotifications";

import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link,Stack } from "expo-router";

export default function App() {
    const [messageSent, setMessageSent] = useState(false);
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [text, setText] = useState("");
  
    const handleChangeText = (value:string) => {
      setText(value);
    };
    const handlePressButton = () => {
      console.log("Input value:", text);
      // You can perform any action with the input value here
    };
    const { expoPushToken } = usePushNotifications();
    console.log(expoPushToken, "here");
    const sendMessage = () => {
      // Simulate a delay of 5000 milliseconds (5 seconds)
      setTimeout(() => {
        // Your code to send the message (e.g., API call)
        // This is just a placeholder, replace it with your actual code
        console.log("Message sent");
        setMessageSent(true);
      }, 5000);
    };
  
    return (
        <>
        <Stack.Screen options={{title:"Pick a time" ,headerBackTitle:"date",headerShown:true}}/>

      <View style={styles.container}>
      
  
         
 
        <Modal
          animationType="slide"
          transparent={true}
          visible={timeModalVisible}
          onRequestClose={() => setTimeModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <DateTimePicker mode="time" value={new Date()} display="spinner" />
  
              <Button
                title="Close Modal"
                onPress={() => setTimeModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
            fontSize: 14,
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Pick a time!
          </Text>
          <MaterialCommunityIcons
            name="clock-digital"
            size={24}
            color="black"
            title="Open Modal"
            onPress={() => setTimeModalVisible(true)}
          />
        </View>
  
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "50%",
            fontSize: 14,
            marginTop: 30,
          }}
        >
  
        <Link href="/calendar/reminderdescription">Next</Link>

        </View>
        <StatusBar style="auto" />
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
    datepicker: {
      height: 100,
      width: 50,
    },
    text: {
      fontSize: 24,
      position: "absolute",
      top: 150,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      elevation: 5, // shadow on Android
    },
  });
  