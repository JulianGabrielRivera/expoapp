import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Feather, AntDesign,MaterialIcons, Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import { StyleSheet } from 'react-native';

const CustomDrawerContent = (props: any) =>{
    return(
        <DrawerContentScrollView {...props}   >
                <DrawerItem icon={({color,size}) => (<MaterialIcons name="notifications" size={24} color={color} />)} label={"Notifications"} labelStyle={styles.navItemLabel} onPress={()=>{
            router.push('/notifications/seeallnotifications');
        }}/>
              <DrawerItem icon={({color,size}) => (<Ionicons name="settings-outline" size={24} color={color} />)} label={"Signup"} labelStyle={styles.navItemLabel} onPress={()=>{
            router.push('/auth/signup');
        }}/>
     
        <DrawerItem icon={({color,size}) => (<Feather name="list" size={24} color={color} />)} label={"Date"} labelStyle={styles.navItemLabel} onPress={()=>{
            router.push('/calendar/pickadate');
        }}/>
          <DrawerItem icon={({color,size}) => (<MaterialIcons name="favorite-outline" size={24} color={color} />)} label={"Favorites"} labelStyle={styles.navItemLabel} onPress={()=>{
            router.push('/favorites');
        }}/>
        
         <DrawerItem icon={({color,size}) => (<Ionicons name="settings-outline" size={24} color={color} />)} label={"Settings"} labelStyle={styles.navItemLabel} onPress={()=>{
            router.push('/settings');
        }}/>
            </DrawerContentScrollView>
    )
        }
    

export default function Layout() {

  return (<Drawer screenOptions={{title: "Home", headerStyle:{
    backgroundColor:'#683447', 
  },    drawerIcon: ({ color, size }) => (
          <Feather name="menu" size={size} color="white" /> // Set color to white
        )}}  drawerContent={(props)=> <CustomDrawerContent {...props}   />}   />)
}

const styles = StyleSheet.create({
    navItemLabel:{
        marginLeft:-20,
        fontSize:18
    }
})