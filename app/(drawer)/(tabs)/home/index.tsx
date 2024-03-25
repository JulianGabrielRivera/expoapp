// /app/(tabs)/home/index.js

import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from 'react-native';


export default function Page() {
  return (
    <View style={styles.container} >
      <Stack.Screen options={{ headerShown: false}}  />
      <Link href={"/calendar/pickadate"} style={{ marginTop: 16, color:"white" }}>
       Click me to start notifications
      </Link>
    </View>
  );
}  const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#15317E",
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
    color:"white"
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
