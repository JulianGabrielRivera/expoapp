
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';


const ExpoSecureStoreAdapter = {
    getItem:(key:string)=>{
        return SecureStore.getItemAsync(key);
    }
    ,
    setItem:(key:string,value:string)=>{
        SecureStore.setItemAsync(key,value);
    },
    removeItem: (key:string)=>{
        SecureStore.deleteItemAsync(key);
    }
}

export const supabase: SupabaseClient = createClient(process.env.EXPO_PUBLIC_supabaseUrl, process.env.EXPO_PUBLIC_supabaseKey,{
    auth:{
        storage: ExpoSecureStoreAdapter as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
    
   
})