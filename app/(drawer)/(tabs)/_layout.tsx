// /app/(tabs)/_layout.js

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "home",
          title: "home",
        }}
      />
            <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "favorites",
          title: "favorites",
        }}
      />
    
    </Tabs>
  );
}