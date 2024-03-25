// /app/index.js

import { Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useContext } from 'react';
import  {AuthContext} from '../provider/AuthProvider';
export default function Page() {

  const {session} = useContext(AuthContext);
  console.log(session);
  // if(!session){
  //   return <Redirect href={"/auth/signup"} />;

  // }
  return <Redirect href={"/(drawer)/(tabs)/home"} />;
}