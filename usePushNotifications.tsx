import {useState,useEffect,useRef} from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import Constants from "expo-constants";

import {Platform} from "react-native"

export interface PushNotificationState{
    expoPushToken?: Notifications.ExpoPushToken,
    notification?: Notifications.Notification;
}

export const usePushNotifications = (): PushNotificationState =>{
Notifications.setNotificationHandler({
    handleNotification: async ()=>({
        shouldPlaySound:false,
        shouldShowAlert:true,
        shouldSetBadge:true,

    })
})


const [expoPushToken,setExpoPushToken] = useState<Notifications.ExpoPushToken | undefined>();
const [notification,setNotification] = useState<Notifications.Notification| undefined>();
const  notificationListener = useRef<Notifications.Subscription>();
const responseListener = useRef<Notifications.Subscription>();

async function registerForPushNotificationsAsync(){
    let token;
    if(Device.isDevice){
        const {status: existingStatus} =
        await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

    if (existingStatus !== "granted"){
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if(finalStatus !== "granted"){
        alert("Failed to get push tokeh for push notification");
        return;
    }
    token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas.projectId,

    })
    scheduleNotification()
    }
    else{
        console.log("Must be using a physical device for Push notifications");

    }
    if(Platform.OS === "android"){
        Notifications.setNotificationChannelAsync("default", {
            name:"default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0,250,250,250],
            lightColor:"FF231F7C"
        })
    }
    return token;

    async function scheduleNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Scheduled Notification",
            body: "This is a scheduled notification.",
        },
        trigger: {
            seconds: 10, // Schedule the notification to be triggered after 10 seconds
            channelId: "default",
        },
    });
}
}
    useEffect(()=>{
        registerForPushNotificationsAsync().then((token)=>{
            setExpoPushToken(token);
            

        })
        notificationListener.current = Notifications.addNotificationReceivedListener((notification)=>{
            setNotification(notification)
        })

        responseListener.current = Notifications.addNotificationResponseReceivedListener((response)=>{
            console.log(response);
        })

        return ()=>{
            Notifications.removeNotificationSubscription(notificationListener.current!)

            Notifications.removeNotificationSubscription(responseListener.current!);
        }
    },[]);
    

return {expoPushToken,notification};
};


