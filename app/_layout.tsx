import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs, useRouter } from 'expo-router'; // Import Tabs component
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Button } from 'react-native';
import AuthContext  from "../provider/AuthProvider";


import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <AuthContext>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="index" options={{headerTitle: "Home Page",headerRight: () =>(<Button title="Login" onPress={()=> router.push('/login')}></Button>), headerStyle:{
        backgroundColor:'beige' 
      }}}/>
      <Stack.Screen name="login" options={{title: 'Login'}}/>
      <Stack.Screen name="calendar/pickadate" options={{headerTitle: "Date Page"}}/>
      <Stack.Screen name="calendar/pickatime" options={{headerTitle: "Time Page"}}/>
      <Stack.Screen name="calendar/reminderdescription" options={{headerTitle: "Reminder Page"}}/>
      <Stack.Screen name="(drawer)" options={{headerShown: false}}/> */}
  <Stack.Screen
                    name="auth"
                    options={{ headerShown: false }}
                  />

        {/* <Stack.Screen name="(tabs)"/> */}
        {/* <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="calendar/date" options={{ headerShown:false }} />
        <Stack.Screen name="calendar/time" options={{ headerShown:false }} /> */}


      </Stack>
     
      
    </ThemeProvider>
    </AuthContext>
  );
}
